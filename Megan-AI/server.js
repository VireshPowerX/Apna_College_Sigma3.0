const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Ollama configuration
const OLLAMA_BASE_URL = "http://localhost:11434";
const OLLAMA_CHAT_ENDPOINT = `${OLLAMA_BASE_URL}/api/chat`;
const OLLAMA_MODEL = "megancoder"; // Your preferred model

// Enhanced CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.static(__dirname));

// Project knowledge storage
const projectKnowledge = {};

// Create project directory if it doesn't exist
const projectPath = path.join(__dirname, "project");
if (!fs.existsSync(projectPath)) {
  fs.mkdirSync(projectPath, { recursive: true });
  // Create sample files
  fs.writeFileSync(
    path.join(projectPath, "index.js"),
    '// Your main application file\nconsole.log("Hello Megan AI!");'
  );
  fs.writeFileSync(
    path.join(projectPath, "package.json"),
    JSON.stringify(
      {
        name: "megan-ai-project",
        version: "1.0.0",
        description: "Project assisted by Megan AI",
        main: "index.js",
        scripts: {
          start: "node index.js",
        },
      },
      null,
      2
    )
  );
}

// Helper function to scan directory
function scanDirectory(dir) {
  const results = [];
  try {
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      try {
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          results.push({
            name: item,
            path: fullPath,
            type: "directory",
            children: scanDirectory(fullPath),
          });
        } else {
          results.push({
            name: item,
            path: fullPath,
            type: "file",
          });
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

// Add this new endpoint to get initial project structure
app.get("/initial-structure", (req, res) => {
  try {
    const structure = scanDirectory(projectPath);
    res.json({ success: true, structure });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 1. Project scanning endpoint
app.post("/scan-project", (req, res) => {
  try {
    const structure = scanDirectory(projectPath);
    res.json({ success: true, structure });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Get file content endpoint
app.post("/get-file", (req, res) => {
  try {
    const { filepath } = req.body;

    if (!filepath) {
      return res
        .status(400)
        .json({ success: false, error: "Filepath is required" });
    }

    // Security check to prevent directory traversal
    const safePath = path.resolve(__dirname, filepath);
    if (!safePath.startsWith(projectPath)) {
      return res.status(403).json({ success: false, error: "Access denied" });
    }

    if (!fs.existsSync(safePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }

    const content = fs.readFileSync(safePath, "utf8");
    res.json({ success: true, content });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. Save file endpoint
app.post("/save-file", (req, res) => {
  try {
    const { filepath, content } = req.body;

    if (!filepath || content === undefined) {
      return res
        .status(400)
        .json({ success: false, error: "Filepath and content are required" });
    }

    const safePath = path.resolve(__dirname, filepath);
    if (!safePath.startsWith(projectPath)) {
      return res.status(403).json({ success: false, error: "Access denied" });
    }

    // Create directory if it doesn't exist
    const dir = path.dirname(safePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(safePath, content, "utf8");
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 4. Project health endpoint
app.get("/project-health", (req, res) => {
  try {
    // Simulate health metrics
    const health = {
      codeQuality: Math.floor(Math.random() * 30) + 60,
      performance: Math.floor(Math.random() * 40) + 50,
      bestPractices: Math.floor(Math.random() * 35) + 55,
    };

    res.json(health);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Project analysis endpoint
app.post("/analyze-project", async (req, res) => {
  try {
    // Get project files content
    const filesContent = await getFilesContent(projectPath);

    // Prepare prompt with project context
    const prompt = `Analyze these project files and suggest specific improvements:
${filesContent}

Provide concrete suggestions focusing on:
1. Code quality improvements
2. Potential bugs
3. Performance optimizations
4. Missing best practices`;

    // Query Ollama
    const ollamaResponse = await fetch(OLLAMA_CHAT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are Megan AI, a focused code assistant. Provide specific, actionable suggestions.",
          },
          { role: "user", content: prompt },
        ],
        stream: false,
      }),
    });

    if (!ollamaResponse.ok) {
      const errorText = await ollamaResponse.text();
      console.error("Ollama API error details:", errorText);
      throw new Error(
        `Ollama API error: ${ollamaResponse.status} - ${ollamaResponse.statusText}`
      );
    }

    const data = await ollamaResponse.json();
    res.json({
      success: true,
      suggestions: data.message.content
        .split("\n")
        .filter((line) => line.trim()),
    });
  } catch (error) {
    console.error("Analysis error:", error);
    // Fallback suggestions
    res.json({
      success: true,
      suggestions: [
        "Add error handling to API endpoints",
        "Implement input validation for file operations",
        "Add logging for debugging purposes",
        "Consider adding unit tests for critical functions",
        "Optimize database queries if applicable",
      ],
    });
  }
});

// Ollama proxy endpoint
app.post("/ask-megan", async (req, res) => {
  if (!req.body || !req.body.message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const { message, context = [] } = req.body;

  try {
    const projectStructure = scanDirectory(projectPath);

    const systemMessage = {
      role: "system",
      content: `You are Megan AI, a code assistant focused on this project.`,
    };

    const ollamaResponse = await fetch(OLLAMA_CHAT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: [
          systemMessage,
          ...context.slice(-4),
          { role: "user", content: message },
        ],
        stream: false,
      }),
      timeout: 300000, // Increased timeout for better reliability
    });

    if (!ollamaResponse.ok) {
      const errorText = await ollamaResponse.text();
      console.error("Ollama API error details:", errorText);
      throw new Error(
        `Ollama API error: ${ollamaResponse.status} - ${ollamaResponse.statusText}`
      );
    }

    const data = await ollamaResponse.json();
    res.json({
      response: data.message.content,
      context: [
        ...context,
        { role: "assistant", content: data.message.content },
      ],
    });
  } catch (error) {
    console.error("Ask Megan error:", error);
    res.json({
      response:
        "I'm currently unable to connect to the AI backend. Please check if Ollama is running and the 'megancoder' model is available.",
      context: context,
    });
  }
});

// Helper function to get files content
async function getFilesContent(dir) {
  let content = "";
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      content += await getFilesContent(fullPath);
    } else if (file.match(/\.(js|html|css|json|py|java|php)$/i)) {
      try {
        const fileContent = fs.readFileSync(fullPath, "utf8");
        content += `\n\n=== FILE: ${file} ===\n${fileContent}`;
      } catch (e) {
        console.error(`Error reading ${file}:`, e);
      }
    }
  }

  return content;
}

// Function to check Ollama status and show only the model we're using
async function checkOllamaStatus() {
  try {
    const statusResponse = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
      method: "GET",
      timeout: 5000,
    });

    if (statusResponse.ok) {
      const data = await statusResponse.json();
      
      // Check if our preferred model is available
      const preferredModel = data.models.find(model => model.name === OLLAMA_MODEL);
      
      if (preferredModel) {
        console.log("Using model:", preferredModel.name);
      } else if (data.models.length > 0) {
        // If our preferred model isn't available, use the first one
        console.log("Preferred model not found. Using:", data.models[0].name);
      } else {
        console.log("No models available in Ollama");
      }
      
      return true;
    } else {
      console.log("Ollama responded but with error:", statusResponse.status);
      return false;
    }
  } catch (error) {
    console.log("Cannot connect to Ollama:", error.message);
    return false;
  }
}

// Serve Megan.html as default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Megan.html"));
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ success: false, error: "Internal server error" });
});

// 404 handler for API endpoints
app.use("/api/*", (req, res) => {
  res.status(404).json({ success: false, error: "API endpoint not found" });
});

// Serve static files for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Megan.html"));
});

app.listen(PORT, async () => {
  console.log(`Megan AI server running on http://localhost:${PORT}`);
  console.log("Project directory:", projectPath);

  // Check Ollama status
  const ollamaStatus = await checkOllamaStatus();
  if (!ollamaStatus) {
    console.log(
      "WARNING: Ollama is not reachable. Some features will not work."
    );
    console.log("Make sure Ollama is installed and running on port 11434");
  }
});