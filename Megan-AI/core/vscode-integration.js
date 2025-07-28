// vscode-integration.js
const vscode = require("vscode");
const MeganAI = require("./megan-ai");

function activate(context) {
    // Create and register output channel
    const outputChannel = vscode.window.createOutputChannel('Megan AI');
    context.subscriptions.push(outputChannel);

    const meganAI = new MeganAI();
    
    // Initialize with progress indicator
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Starting Megan AI",
        cancellable: false
    }, async (progress) => {
        progress.report({ message: "Connecting to Ollama..." });
        try {
            await meganAI.initialize(outputChannel);
            vscode.window.showInformationMessage("Megan AI Ready!");
        } catch (error) {
            vscode.window.showErrorMessage(`Megan AI failed to start: ${error.message}`);
        }
    });

    // Register commands
    context.subscriptions.push(
        vscode.commands.registerCommand("meganai.explainCode", async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage("No active editor found");
                return;
            }

            const code = editor.document.getText(editor.selection);
            if (!code.trim()) {
                vscode.window.showWarningMessage("No code selected");
                return;
            }

            try {
                outputChannel.show();
                const explanation = await meganAI.explain(code);
                
                // Show quick explanation in notification
                const shortExplanation = explanation.split('\n')[0];
                vscode.window.showInformationMessage(shortExplanation);
                
                // Optionally show full explanation in webview
                // createExplanationWebview(context, explanation);
            } catch (error) {
                vscode.window.showErrorMessage("Failed to generate explanation");
            }
        })
    );

    // Status bar item
    const statusBar = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100
    );
    statusBar.text = "$(circuit-board) Megan AI";
    statusBar.tooltip = "Click to activate";
    statusBar.command = "meganai.explainCode";
    statusBar.show();
    context.subscriptions.push(statusBar);
}

function deactivate() {
    // Cleanup if needed
}
context.subscriptions.push(
  vscode.workspace.onDidChangeTextDocument(async (event) => {
    if (event.contentChanges.length > 0) {
      const activeEditor = vscode.window.activeTextEditor;
      const line = activeEditor.document.lineAt(activeEditor.selection.active.line);
      const analysis = await megan.analyzeCode(line.text);
      
      // Show inline decoration
      const decoration = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(100, 200, 100, 0.3)',
        overviewRulerColor: 'green'
      });
      activeEditor.setDecorations(decoration, [line.range]);
    }
  })
);

module.exports = {
    activate,
    deactivate
};