export type UUID = string;

export interface Point {
  x: number;
  y: number;
}

export interface Stroke {
  points: Point[];
  color?: string;
  thickness?: number;
}

export interface BaseElement {
  id: UUID;
  type: string;
  title?: string;
  x: number;
  y: number;
  rotation?: number;
  scale?: number;
  style?: Record<string, any>;
}
