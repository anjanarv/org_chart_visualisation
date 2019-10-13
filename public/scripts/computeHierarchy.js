const peopleTestData = require("../data/peopleInGivenCodingChallenge.json");
const personDataWithNoManager = require("../data/peopleWithNoManager.json");
const peopleWithMultipleManagers = require("../data/peopleWithMultipleManagers.json");
const additionalPeople = require("../data/additionalPeople.json");
const schema = require("../data/peopleHierarchy.schema.json");

const cytoscapeTraversals = require("./cytoscapeTraversals");
const setupVisNetwork = require("./setupVisNetwork");
const Ajv = require("ajv");

module.exports = () => {
  convertToVisFormat = (taskGraph, invalidPersons) => {
    let dataList = [],
      edgesList = [],
      invalidDataList = [];
    taskGraph.nodes().forEach(node => {
      node.data() && node.data().id
        ? dataList.push({
            id: node.data().id,
            label: node.data().name
          })
        : invalidDataList.push({
            label: node.data().name
          });
    });
    taskGraph.edges().forEach(edge => {
      edgesList.push({
        from: edge.data().source,
        to: edge.data().target
      });
    });
    invalidPersons.length > 0 &&
      invalidPersons.forEach(invalid => {
        invalidDataList.push({
          label: invalid.name
        });
      });

    return {
      dataList,
      edgesList,
      invalidDataList
    };
  };

  validateJSON = peopleData => {
    let invalidPersons = [],
      validPersons = [];
    const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
    const validate = ajv.compile(schema);
    peopleData.forEach(testData => {
      if (validate(testData)) {
        validPersons.push(testData);
      } else {
        invalidPersons.push(testData);
      }
    });
    return {
      invalidPersons,
      validPersons
    };
  };

  showTestData = () => {
    let { invalidPersons, validPersons } = validateJSON(peopleTestData);

    let taskGraph = cytoscapeTraversals.getNodesWithEdges(validPersons);

    let { dataList, edgesList, invalidDataList } = convertToVisFormat(
      taskGraph,
      invalidPersons
    );
    setupVisNetwork(dataList, edgesList, invalidDataList);
  };

  showPersonDataWithNoManager = () => {
    let { invalidPersons, validPersons } = validateJSON(
      personDataWithNoManager
    );

    let taskGraph = cytoscapeTraversals.getNodesWithEdges(validPersons);

    let { dataList, edgesList, invalidDataList } = convertToVisFormat(
      taskGraph,
      invalidPersons
    );

    setupVisNetwork(dataList, edgesList, invalidDataList);
  };

  showPersonDataWithMultipleManagers = () => {
    let { invalidPersons, validPersons } = validateJSON(
      peopleWithMultipleManagers
    );

    let taskGraph = cytoscapeTraversals.getNodesWithEdges(validPersons);
    let { dataList, edgesList, invalidDataList } = convertToVisFormat(
      taskGraph,
      invalidPersons
    );

    setupVisNetwork(dataList, edgesList, invalidDataList);
  };

  showAdditionalPersons = () => {
    let { invalidPersons, validPersons } = validateJSON(additionalPeople);

    let taskGraph = cytoscapeTraversals.getNodesWithEdges(validPersons);

    let { dataList, edgesList, invalidDataList } = convertToVisFormat(
      taskGraph,
      invalidPersons
    );

    setupVisNetwork(dataList, edgesList, invalidDataList);
  };
};
