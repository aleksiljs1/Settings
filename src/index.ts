import { SettingsManager } from "./core/settings-manager";

const settings = SettingsManager.getInstance();

settings.audio.setVolume(70);
settings.audio.getVolume();
console.log(`the volume currently is ${settings.audio.getVolume()}`);

settings.gameplay.setDifficulty("hard");
console.log(`${settings.gameplay.getDifficulty()}`);
