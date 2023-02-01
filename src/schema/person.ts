import type { JSONSchemaType, ValidateFunction } from "ajv";
import { ajv, isValidThing } from "../utils/ajv";

export interface Person {
  name: string;
  country: string;
  married: boolean;
  numberOfGuests: number | null;
}

export interface PersonJson {
  name: string;
  country: string;
  married: boolean;
  numberOfGuests?: number;
}

export const PersonSchema: JSONSchemaType<Person> = {
  type: "object",

  properties: {
    name: {
      type: "string",
    },
    country: {
      type: "string",
    },
    married: {
      type: "boolean",
    },
    numberOfGuests: {
      type: "number",
      nullable: true,
    },
  },

  required: ["name", "country", "married"],
};

const validatePerson: ValidateFunction<Person> = ajv.compile(PersonSchema);

export const isValidPerson = (person: unknown): person is Person =>
  isValidThing<Person>(person, validatePerson);

export function createPersonFromJson(json: PersonJson): Person {
  return {
    name: json.name,
    country: json.country,
    married: json.married,
    numberOfGuests: json.numberOfGuests ?? null,
  };
}
