/**
 * Normalizes different boolean formats to actual booleans.
 * Supports strings like "True", "False", " true ", etc.
 */
export const parseBool = (
  val: string | boolean | number | null | undefined
): boolean => {
  if (typeof val === "string") {
    return val.trim().toLowerCase() === "true";
  }
  return Boolean(val);
};
