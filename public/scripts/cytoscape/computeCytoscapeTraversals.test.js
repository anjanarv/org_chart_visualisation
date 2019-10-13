const cytoscapeTraversals = require("./computeCytoscapeTraversals");
const peopleGivenInCodingChallenge = require("../../data/peopleInGivenCodingChallenge.json");
const peopleWithNoId = require("../../data/peopleWithNoId.json");
const { validateJSON } = require("../utils/orgHierarchy.utils");

test("creating graph with given valid data", () => {
  let { validPersons, invalidPersons } = validateJSON(
    peopleGivenInCodingChallenge
  );

  let taskGraph = cytoscapeTraversals.getNodesWithEdges(validPersons);
  expect(taskGraph.nodes().length).toBe(4);
  expect(taskGraph.edges().length).toBe(3);
});

test("creating graph with given invalid data having people with no Id", () => {
  let { validPersons, invalidPersons } = validateJSON(peopleWithNoId);

  let taskGraph = cytoscapeTraversals.getNodesWithEdges(validPersons);
  expect(taskGraph.nodes().length).toBe(0);
  expect(taskGraph.edges().length).toBe(0);
});
