import { SettingsInterface } from "../interfaces/settings-interface";

export class GameplaySettings implements SettingsInterface {
  private settings = { difficulty: "normal", autoSave: true };

  setDifficulty(difficulty: string) {
    this.settings.difficulty = difficulty;
  }

  setAutoSave(autoSave: boolean) {
    this.settings.autoSave = autoSave;
  }

  getDifficulty(): string {
    return this.settings.difficulty;
  }
  getAutosave(): boolean {
    return this.settings.autoSave;
  }

  resetSettings(): void {
    this.settings = { difficulty: "normal", autoSave: false };
  }
}
