"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_manager_1 = require("./core/settings-manager");
const settings = settings_manager_1.SettingsManager.getInstance();
settings.audio.setVolume(70);
settings.audio.getVolume();
console.log(`the volume currently is ${settings.audio.getVolume()}`);
settings.gameplay.setDifficulty("hard");
console.log(`${settings.gameplay.getDifficulty()}`);
