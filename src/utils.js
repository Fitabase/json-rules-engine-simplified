import selectn from "./selectn";

export function normRef(ref) {
  return ref.replace(/\$/g, ".");
}

export function selectRef(field, formData) {
  let ref = normRef(field);
  return selectn(ref, formData);
}

export function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

export function isDevelopment() {
  return process.env.NODE_ENV !== "production";
}

export function toArray(event) {
  if (Array.isArray(event)) {
    return event;
  } else {
    return [event];
  }
}

export function toError(message) {
  if (isDevelopment()) {
    throw new ReferenceError(message);
  } else {
    console.error(message);
  }
}

const concat = (x, y) => x.concat(y);
export const flatMap = (xs, f) => xs.map(f).reduce(concat, []);
