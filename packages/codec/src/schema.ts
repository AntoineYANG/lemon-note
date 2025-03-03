const JSONSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "LemonNote/NoteDocument",
  "type": "object",
  "properties": {
    "version": { "type": "string" },
    "id": { "type": "string" },
    "metadata": { "$ref": "#/definitions/metadata" },
    "pages": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "width": { "type": "number" },
          "height": { "type": "number" },
          "elements": {
            "type": "array",
            "items": {
              "oneOf": [
                { "$ref": "#/definitions/handwritingElement" },
                { "$ref": "#/definitions/elementGroup" },
              ]
            }
          }
        },
        "required": ["id", "width", "height", "elements"],
      }
    }
  },
  "definitions": {
    "metadata": {
      "type": "object",
      "properties": {
        "title": { "type": "string" },
        "createdAt": { "type": "string", "format": "date-time" },
        "updatedAt": { "type": "string", "format": "date-time" },
        "tags": { "type": "array", "items": { "type": "string" } },
      },
      "required": ["title", "createdAt", "updatedAt"],
    },
    "point": {
      "type": "object",
      "properties": {
        "x": { "type": "number" },
        "y": { "type": "number" },
      },
      "required": ["x", "y"],
    },
    "stroke": {
      "type": "object",
      "properties": {
        "points": {
          "type": "array",
          "items": { "$ref": "#/definitions/point" }
        },
        "color": { "type": "number" },
        "thickness": { "type": "number" },
      },
      "required": ["points"],
    },
    "baseElement": {
      "type": "object",
      "properties": {
        "id": { "type": "string" },
        "type": { "type": "string" },
        "title": { "type": "string" },
        "x": { "type": "number" },
        "y": { "type": "number" },
        "rotation": { "type": "number" },
        "scale": { "type": "number" },
      },
      "required": ["id", "type", "x", "y"],
    },
    "handwritingElement": {
      "allOf": [
        { "$ref": "#/definitions/baseElement" },
        {
          "properties": {
            "type": { "const": "handwriting" },
            "textContent": { "type": "string" },
            "strokes": {
              "type": "array",
              "items": { "$ref": "#/definitions/stroke" }
            },
          },
          "required": ["strokes"],
        }
      ]
    },
    "groupElement": {
      "allOf": [
        { "$ref": "#/definitions/elementGroup" },
        {
          "properties": {
            "type": { "const": "group" },
            "elements": { "type": "array", "items": { "$ref": "#/properties/pages/items/properties/elements/items" } }
          }
        }
      ]
    }
  },
  "required": ["version", "id", "metadata", "pages"]
} as const;


export default JSONSchema;
