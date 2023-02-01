import { describe, expect, it } from "vitest";
import type { Person } from "./person";
import { isValidPerson } from "./person";

describe("Breed", () => {
  const person: Person = {
    country: "United States",
    married: false,
    name: "John",
  };

  const invalidPerson: Person = {
    name: "Carla",
    country: "Netherlands",
    // @ts-ignore
    married: null,
  };

  it("validates correctly", () => {
    const ok = isValidPerson(person);

    expect(ok).toBeTruthy();
  });

  it("invalidates correctly", () => {
    const ok = isValidPerson(invalidPerson);

    expect(ok).toBeFalsy();
  });
});
