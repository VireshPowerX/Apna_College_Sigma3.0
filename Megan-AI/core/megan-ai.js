// megan-ai.js
const { Ollama } = require('ollama');

class MeganAI {
  constructor() {
    this.ollama = new Ollama({ host: 'http://localhost:11434' });
    this.activeModel = 'deepseek-coder:6.7b-instruct-q4_K_M';
    this.outputChannel = null;
  }

  initialize(outputChannel) {
    this.outputChannel = outputChannel;
    this.outputChannel.clear();
    this.outputChannel.appendLine('⚡ Megan AI Initializing...');
    
    return this.verifySetup()
      .then(() => this.ensureModel())
      .then(() => {
        this.outputChannel.appendLine(`✅ Ready! Using model: ${this.activeModel}`);
        return true;
      })
      .catch(err => {
        this.outputChannel.appendLine(`❌ Initialization failed: ${err.message}`);
        throw err;
      });
  }

  async verifySetup() {
    try {
      await this.ollama.list();
    } catch (err) {
      throw new Error('Ollama connection failed. Make sure Ollama is running (ollama serve)');
    }
  }

  async ensureModel() {
    const models = await this.ollama.list();
    if (!models.models.some(m => m.name === this.activeModel)) {
      this.outputChannel.appendLine(`⏳ Downloading model ${this.activeModel}...`);
      await this.ollama.pull(this.activeModel);
    }
  }

  async explain(code) {
    if (!this.outputChannel) {
      throw new Error('Output channel not initialized');
    }

    this.outputChannel.appendLine('\n🔎 Analyzing selected code...');
    
    try {
      const response = await this.ollama.generate({
        model: this.activeModel,
        prompt: `Explain this code in detail:\n\n${code}\n\nExplanation:`,
        options: {
          temperature: 0.7,
          num_ctx: 2048
        }
      });
      
      const explanation = response.response.trim();
      this.outputChannel.appendLine('💡 Explanation generated');
      this.outputChannel.appendLine('---\n' + explanation + '\n---');
      
      return explanation;
    } catch (error) {
      this.outputChannel.appendLine(`🔥 Error: ${error.message}`);
      throw error;
    }
  }
}

module.exports = MeganAI;