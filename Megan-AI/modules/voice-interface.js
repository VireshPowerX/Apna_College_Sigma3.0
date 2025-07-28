// In modules/voice-interface.js
const voice = require('@react-native-voice/voice');

class VoiceInterface {
  constructor(megan) {
    this.megan = megan;
    voice.onSpeechResults = this.handleVoiceCommand.bind(this);
  }

  startListening() {
    voice.start('en-US');
    vscode.window.showInformationMessage('🎤 Listening... Say "Hey Megan"');
  }

  handleVoiceCommand(e) {
    if (e.value[0].toLowerCase().includes('hey megan')) {
      const command = e.value[0].replace('hey megan', '').trim();
      this.megan.processVoiceCommand(command);
    }
  }
}