"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicSettings = void 0;
class GraphicSettings {
  constructor() {
    this.settings = { resolution: "1920x1080", Graphics: "high" };
  }
  setResolution(resolution) {
    this.settings.resolution = resolution;
  }
  setGraphics(graphic) {
    this.settings.resolution = graphic;
  }
  getResolution() {
    return this.settings.resolution;
  }
  getGraphics() {
    return this.settings.Graphics;
  }
  resetSettings() {
    this.settings = { resolution: "1920x1080", Graphics: "high" };
  }
}
exports.GraphicSettings = GraphicSettings;
