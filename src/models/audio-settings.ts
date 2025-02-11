import { SettingsInterface } from "../interfaces/settings-interface";

export class AudioSettings implements SettingsInterface {
  private settings = { volume: 100, mute: false };
  constructor() {}

  setVolume(value: number): void {
    this.settings.volume = value;
  }

  setMute(value: boolean): void {
    this.settings.mute = value;
  }

  getVolume(): number {
    return this.settings.volume;
  }
  getMute(): boolean {
    return this.settings.mute;
  }
  resetSettings(): void {
    this.settings = { volume: 100, mute: false };
  }
}
