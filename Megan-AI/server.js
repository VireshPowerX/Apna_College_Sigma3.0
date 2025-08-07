const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Project knowledge storage
const projectKnowledge = {};

// Project scanning endpoint
app.post('/scan-project', (req, res) => {
    const projectPath = path.join(__dirname, 'project');
    
    function scanDirectory(dir) {
        const results = [];
        try {
            const items = fs.readdirSync(dir);
            
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                try {
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory()) {
                        results.push({
                            name: item,
                            children: scanDirectory(fullPath)
                        });
                    } else {
                        results.push({ name: item });
                    }
                } catch (e) {
                    console.error(`Error reading ${fullPath}:`, e);
                }
            });
        } catch (e) {
            console.error(`Error scanning directory ${dir}:`, e);
        }
        
        return results;
    }
    
    try {
        const structure = scanDirectory(projectPath);
        res.json({ success: true, structure });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Project analysis endpoint
app.post('/analyze-project', async (req, res) => {
    try {
        // Get project files content
        const projectPath = path.join(__dirname, 'project');
        const filesContent = await getFilesContent(projectPath);
        
        // Prepare prompt with project context
        const prompt = `Analyze these project files and suggest specific improvements:
${filesContent}

Provide concrete suggestions focusing on:
1. Code quality improvements
2. Potential bugs
3. Performance optimizations
4. Missing best practices
5. Specific to files like Simon`;

        // Query Ollama
        const ollamaResponse = await fetch('http://localhost:11434/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'megancoder',
                messages: [
                    { 
                        role: 'system', 
                        content: 'You are Megan AI, a focused code assistant. Only discuss the project files provided.' 
                    },
                    { role: 'user', content: prompt }
                ],
                stream: false
            })
        });
        
        const data = await ollamaResponse.json();
        res.json({ 
            success: true, 
            suggestions: data.message.content.split('\n').filter(line => line.trim())
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Ollama proxy endpoint
app.post('/ask-megan', async (req, res) => {
    if (!req.body || !req.body.message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const { message, context = [] } = req.body;
    
    try {
        // Get current project structure (could be cached)
        const projectPath = path.join(__dirname, 'project');
        const projectStructure = scanDirectory(projectPath);
        
        // Enhanced system message
        const systemMessage = {
            role: 'system',
            content: `You are Megan AI, a code assistant focused exclusively on this project.
            
            Current Project Structure:
            ${JSON.stringify(projectStructure, null, 2)}
            
            Project Knowledge:
            ${JSON.stringify(projectKnowledge, null, 2)}
            
            Instructions:
            1. Focus only on the existing project files
            2. Provide specific, actionable suggestions
            3. When discussing code, reference exact file locations
            4. Format code examples with proper syntax highlighting
            5. If asked about unrelated topics, respond with:
               "I'm focused on assisting with this project's code"`
        };

        const ollamaResponse = await fetch('http://localhost:11434/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'megancoder',
                messages: [
                    systemMessage,
                    ...context.filter(msg => msg.role && msg.content),
                    { 
                        role: 'user', 
                        content: `Project context: ${JSON.stringify(projectStructure)}\n\nUser question: ${message}`
                    }
                ],
                stream: false
            }),
            timeout: 30000
        });
        
        if (!ollamaResponse.ok) {
            throw new Error(`Ollama API error: ${ollamaResponse.statusText}`);
        }
        
        const data = await ollamaResponse.json();
        res.json({
            response: data.message.content,
            context: [...context, { role: 'assistant', content: data.message.content }]
        });
    } catch (error) {
        console.error('Ask Megan error:', error);
        res.status(500).json({ 
            error: error.message,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// Advanced file analysis endpoint
app.post('/deep-analyze', async (req, res) => {
    try {
        const projectPath = path.join(__dirname, 'project');
        const files = await getCodeFiles(projectPath);
        
        const analysis = await Promise.all(files.map(async file => {
            const content = fs.readFileSync(file.path, 'utf8');
            const response = await analyzeWithOllama(`
                Analyze this ${file.type} file:
                PATH: ${file.path}
                CONTENT:
                ${content}
                
                Provide:
                1. Three specific improvements
                2. Potential bugs
                3. Optimization suggestions
            `);
            return { file: file.path, analysis: response };
        }));
        
        res.json({ success: true, analysis });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Auto-fix endpoint
app.post('/auto-fix', async (req, res) => {
    const { filepath, issue } = req.body;
    
    try {
        const content = fs.readFileSync(path.join(__dirname, filepath), 'utf8');
        const response = await analyzeWithOllama(`
            Fix this issue in the file:
            ISSUE: ${issue}
            FILE PATH: ${filepath}
            CURRENT CONTENT:
            ${content}
            
            Provide:
            1. The complete fixed file content
            2. Explanation of changes
        `);
        
        res.json({ success: true, fixedContent: response });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Project knowledge learning endpoint
app.post('/learn-from-changes', async (req, res) => {
    const { before, after, explanation } = req.body;
    
    // Store in project knowledge
    if (!projectKnowledge.changes) projectKnowledge.changes = [];
    projectKnowledge.changes.push({ before, after, explanation });
    
    // Update Ollama's understanding
    await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'megancoder',
            messages: [{
                role: 'system',
                content: `New project pattern learned:
                Change made: ${explanation}
                Before: ${before}
                After: ${after}`
            }]
        })
    });
    
    res.json({ success: true });
});

// Helper functions
async function getFilesContent(dir) {
    let content = '';
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            content += await getFilesContent(fullPath);
        } else if (file.match(/\.(js|html|css|json|py|java|php)$/i)) {
            try {
                const fileContent = fs.readFileSync(fullPath, 'utf8');
                content += `\n\n=== FILE: ${file} ===\n${fileContent}`;
            } catch (e) {
                console.error(`Error reading ${file}:`, e);
            }
        }
    }
    
    return content;
}

async function getCodeFiles(dir) {
    const codeFiles = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            codeFiles.push(...await getCodeFiles(fullPath));
        } else if (isCodeFile(file)) {
            codeFiles.push({
                path: fullPath,
                type: getFileType(file),
                size: stat.size
            });
        }
    }
    
    return codeFiles;
}

function isCodeFile(filename) {
    return /\.(js|ts|html|css|json|py|java|php|go|rs)$/i.test(filename);
}

function getFileType(filename) {
    const ext = path.extname(filename).toLowerCase();
    const types = {
        '.js': 'JavaScript',
        '.ts': 'TypeScript',
        '.html': 'HTML',
        '.css': 'CSS',
        '.json': 'JSON',
        '.py': 'Python',
        '.java': 'Java',
        '.php': 'PHP',
        '.go': 'Go',
        '.rs': 'Rust'
    };
    return types[ext] || ext.substring(1).toUpperCase();
}

async function analyzeWithOllama(prompt) {
    const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'megancoder',
            messages: [
                { 
                    role: 'system', 
                    content: 'You are a code analysis assistant. Provide detailed, technical analysis of the provided code.'
                },
                { role: 'user', content: prompt }
            ],
            stream: false
        })
    });
    
    const data = await response.json();
    return data.message.content;
}

app.listen(PORT, () => {
    console.log(`Megan AI server running on http://localhost:${PORT}`);
    console.log('Access the interface at http://localhost:3000/Megan.html');
});