import { AudioSettings, GameplaySettings, GraphicSettings } from "../models";

export class SettingsManager {
  private static instance: SettingsManager;
  public audio: AudioSettings;
  public graphic: GraphicSettings;
  public gameplay: GameplaySettings;

  constructor() {
    this.audio = new AudioSettings();
    this.graphic = new GraphicSettings();
    this.gameplay = new GameplaySettings();
  }
  resetAllSettings(): void {
    this.graphic.resetSettings();
    this.audio.resetSettings();
    this.gameplay.resetSettings();
  }
  public static getInstance(): SettingsManager {
    if (!SettingsManager.instance) {
      SettingsManager.instance = new SettingsManager();
    }
    return SettingsManager.instance;
  }
}
