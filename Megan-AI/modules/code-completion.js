// In modules/code-completion.js
vscode.languages.registerCompletionItemProvider('javascript', {
  async provideCompletionItems(document, position) {
    const linePrefix = document.getText(new vscode.Range(
      position.with(undefined, 0),
      position
    ));
    
    const suggestions = await megan.getCodeSuggestions(linePrefix);
    return suggestions.map(sug => {
      const item = new vscode.CompletionItem(sug.label, vscode.CompletionItemKind.Method);
      item.documentation = sug.docs;
      return item;
    });
  }
}, '.');