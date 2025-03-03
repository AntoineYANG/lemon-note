import type { BaseElement, Stroke } from "../utils";


export interface HandwritingElement extends BaseElement {
  type: "handwriting";
  strokes: Stroke[];
  textContent?: string;
}
