import type { UUID } from "./utils";
import type { HandwritingElement } from "./elements/handwriting";
import type { ElementGroup } from "./elements/element-group";


/** Independent note object */
export interface NoteDocument {
  version: string;
  id: UUID;
  authorId: UUID;
  metadata: Metadata;
  pages: NotePage[];
}

export interface Metadata {
  title: string;
  /** Create time (ISO 8601) */
  createdAt: string;
  /** Update time (ISO 8601) */
  updatedAt: string;
  /** Tags defined by user */
  tags?: string[];
}

/** Note page object */
export interface NotePage {
  id: UUID;
  /** Width of page (px) */
  width: number;
  /** Height of page (px) */
  height: number;
  content: PageElement[];
}

export type PageElement = (
  | HandwritingElement
  | ElementGroup
);
