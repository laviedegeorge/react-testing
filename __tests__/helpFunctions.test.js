import { removeEmptyStringValues } from "../helperFunctions";

test("Removes all empty string from an object", () => {
  const arrWithEmptyString = removeEmptyStringValues({
    first: "kelechi",
    age: "",
    last: "Apugo",
  });
  expect(arrWithEmptyString).toMatchInlineSnapshot(`
    Object {
      "first": "kelechi",
      "last": "Apugo",
    }
  `);
});

test("Removes all empty string from an object", () => {
  expect(
    removeEmptyStringValues({
      first: "kelechi",
      age: "",
      last: "Apugo",
    })
  ).toEqual({
    first: "kelechi",
    last: "Apugo",
  });
});
