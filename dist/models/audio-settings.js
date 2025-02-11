"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioSettings = void 0;
class AudioSettings {
  constructor() {
    this.settings = { volume: 100, mute: false };
  }
  setVolume(value) {
    this.settings.volume = value;
  }
  setMute(value) {
    this.settings.mute = value;
  }
  getVolume() {
    return this.settings.volume;
  }
  getMute() {
    return this.settings.mute;
  }
  resetSettings() {
    this.settings = { volume: 100, mute: false };
  }
}
exports.AudioSettings = AudioSettings;
