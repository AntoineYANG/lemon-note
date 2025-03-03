import Ajv from "ajv";
import addFormats from "ajv-formats";
import schema from "./schema";

import type { NoteDocument } from "./type";


const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);


export function parseNoteDocument(json: unknown): NoteDocument {
  if (!validate(json)) {
    throw new Error("Invalid NoteDocument: " + JSON.stringify(validate.errors));
  }
  return json as NoteDocument;
}
