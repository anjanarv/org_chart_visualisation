const peopleInGivenCodingChallenge = require("../../data/peopleInGivenCodingChallenge.json");
const peopleWithNoId = require("../../data/peopleWithNoId.json");
const { validateJSON } = require("./orgHierarchy.utils");

test("validating json having valid data", () => {
  let { validPersons, invalidPersons } = validateJSON(
    peopleInGivenCodingChallenge
  );
  expect(validPersons).toMatchSnapshot();
  expect(invalidPersons).toMatchSnapshot();
});

test("validating json having invalid data", () => {
  let { validPersons, invalidPersons } = validateJSON(peopleWithNoId);

  expect(validPersons).toMatchSnapshot();
  expect(invalidPersons).toMatchSnapshot();
});

test("validating json having empty data", () => {
  let { validPersons, invalidPersons } = validateJSON([]);

  expect(validPersons).toStrictEqual([]);
  expect(invalidPersons).toStrictEqual([]);
});
