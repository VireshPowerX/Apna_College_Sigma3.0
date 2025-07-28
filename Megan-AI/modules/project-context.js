// In modules/project-context.js
class ProjectContext {
  constructor(outputChannel) {
    this.projectKnowledge = {};
  }

  async buildIndex(projectPath) {
    // Walk through all files and create a knowledge base
    const files = await glob('**/*.{js,ts,jsx,tsx,html,css}', { cwd: projectPath });
    
    files.forEach(async (file) => {
      const content = await fs.promises.readFile(path.join(projectPath, file), 'utf8');
      this.projectKnowledge[file] = {
        summary: await megan.summarizeCode(content),
        dependencies: this.findDependencies(content)
      };
    });
  }
}