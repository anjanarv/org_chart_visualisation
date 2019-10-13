const peopleInGivenCodingChallenge = require("../data/peopleInGivenCodingChallenge.json");
const personDataWithNoManager = require("../data/peopleWithNoManager.json");
const peopleWithMultipleManagers = require("../data/peopleWithMultipleManagers.json");
const additionalPeople = require("../data/additionalPeople.json");
const peopleWithNoId = require("../data/peopleWithNoId.json");
const computeCytoscapeTraversals = require("./cytoscape/computeCytoscapeTraversals");
const setupVisNetwork = require("./vis/setupVisNetwork");

const {
  validateJSON,
  convertToVisFormat
} = require("./utils/orgHierarchy.utils");

// display the given valid test data on the page
showTestData = () => {
  let { invalidPersons, validPersons } = validateJSON(
    peopleInGivenCodingChallenge
  );
  let taskGraph = computeCytoscapeTraversals.getNodesWithEdges(validPersons);
  let { dataList, edgesList, invalidDataList } = convertToVisFormat(
    taskGraph,
    invalidPersons
  );
  setupVisNetwork.createNetwork(dataList, edgesList, invalidDataList);
};

// display people having no manager Id in the test data
showPersonDataWithNoManager = () => {
  let { invalidPersons, validPersons } = validateJSON(personDataWithNoManager);
  let taskGraph = computeCytoscapeTraversals.getNodesWithEdges(validPersons);
  let { dataList, edgesList, invalidDataList } = convertToVisFormat(
    taskGraph,
    invalidPersons
  );

  setupVisNetwork.createNetwork(dataList, edgesList, invalidDataList);
};

// display people having multiple managers attached to one person
showPersonDataWithMultipleManagers = () => {
  let { invalidPersons, validPersons } = validateJSON(
    peopleWithMultipleManagers
  );
  let taskGraph = computeCytoscapeTraversals.getNodesWithEdges(validPersons);
  let { dataList, edgesList, invalidDataList } = convertToVisFormat(
    taskGraph,
    invalidPersons
  );

  setupVisNetwork.createNetwork(dataList, edgesList, invalidDataList);
};

// display more people with more test data
showAdditionalPersons = () => {
  let { invalidPersons, validPersons } = validateJSON(additionalPeople);
  let taskGraph = computeCytoscapeTraversals.getNodesWithEdges(validPersons);
  let { dataList, edgesList, invalidDataList } = convertToVisFormat(
    taskGraph,
    invalidPersons
  );
  setupVisNetwork.createNetwork(dataList, edgesList, invalidDataList);
};

// display people with no Id in them which is invalid data as per the json schema
showPeopleWithNoId = () => {
  let { invalidPersons, validPersons } = validateJSON(peopleWithNoId);
  let taskGraph = computeCytoscapeTraversals.getNodesWithEdges(validPersons);
  let { dataList, edgesList, invalidDataList } = convertToVisFormat(
    taskGraph,
    invalidPersons
  );

  setupVisNetwork.createNetwork(dataList, edgesList, invalidDataList);
};
