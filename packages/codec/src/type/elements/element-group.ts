import type { BaseElement } from "../utils";
import type { PageElement } from "..";


export interface ElementGroup extends BaseElement {
  type: "group";
  elements: PageElement[];
}
