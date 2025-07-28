// In modules/ui-panel.js
class MeganUIPanel {
  constructor(context) {
    this.panel = vscode.window.createWebviewPanel(
      'meganAI',
      'Megan AI Assistant',
      vscode.ViewColumn.Two,
      { enableScripts: true }
    );
    
    this.setHtml();
  }

  setHtml() {
    this.panel.webview.html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .chat-message { margin: 10px; padding: 8px; border-radius: 4px; }
          .user { background: #f0f0f0; }
          .megan { background: #e3f2fd; }
        </style>
      </head>
      <body>
        <div id="chat"></div>
        <input id="input" placeholder="Ask Megan..."/>
        <button onclick="sendMessage()">Send</button>
        
        <script>
          function sendMessage() {
            const input = document.getElementById('input');
            vscode.postMessage({ command: 'ask', text: input.value });
            input.value = '';
          }
        </script>
      </body>
      </html>`;
  }
}