import type { ValidateFunction } from "ajv";
import Ajv from "ajv";

export const ajv = new Ajv();

/**
 *
 * @param thing Object to be tested against the validator
 * @param validator The validator function for T
 * @returns thing is T
 */
export function isValidThing<T>(
  thing: unknown,
  validator: ValidateFunction<T>
): thing is T {
  const ok: boolean = validator(thing);

  if (!ok) {
    // TODO: Log to Sentry with `validateDeviation.errors`
    console.error(validator.errors);
  }

  return ok;
}
