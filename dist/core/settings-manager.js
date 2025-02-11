"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsManager = void 0;
const models_1 = require("../models");
class SettingsManager {
  constructor() {
    this.audio = new models_1.AudioSettings();
    this.graphic = new models_1.GraphicSettings();
    this.gameplay = new models_1.GameplaySettings();
  }
  resetAllSettings() {
    this.graphic.resetSettings();
    this.audio.resetSettings();
    this.gameplay.resetSettings();
  }
  static getInstance() {
    if (!SettingsManager.instance) {
      SettingsManager.instance = new SettingsManager();
    }
    return SettingsManager.instance;
  }
}
exports.SettingsManager = SettingsManager;
