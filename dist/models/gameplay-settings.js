"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameplaySettings = void 0;
class GameplaySettings {
  constructor() {
    this.settings = { difficulty: "normal", autoSave: true };
  }
  setDifficulty(difficulty) {
    this.settings.difficulty = difficulty;
  }
  setAutoSave(autoSave) {
    this.settings.autoSave = autoSave;
  }
  getDifficulty() {
    return this.settings.difficulty;
  }
  getAutosave() {
    return this.settings.autoSave;
  }
  resetSettings() {
    this.settings = { difficulty: "normal", autoSave: false };
  }
}
exports.GameplaySettings = GameplaySettings;
