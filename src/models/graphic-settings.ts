import { SettingsInterface } from "../interfaces/settings-interface";

export class GraphicSettings implements SettingsInterface {
  private settings = { resolution: "1920x1080", Graphics: "high" };

  setResolution(resolution: string): void {
    this.settings.resolution = resolution;
  }

  setGraphics(graphic: string): void {
    this.settings.resolution = graphic;
  }

  getResolution(): string {
    return this.settings.resolution;
  }

  getGraphics(): string {
    return this.settings.Graphics;
  }
  resetSettings(): void {
    this.settings = { resolution: "1920x1080", Graphics: "high" };
  }
}
