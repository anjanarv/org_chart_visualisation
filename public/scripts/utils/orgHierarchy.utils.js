const Ajv = require("ajv");
const schema = require("../../data/peopleHierarchy.schema.json");

//converting the cytoscape graph to vis-network nodes/edges format to draw the hierarchy
const convertToVisFormat = (taskGraph, invalidPersons) => {
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

  //draw separate set of nodes for invalid person data in json
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

// validate the json using the pre defined schema in data folder to retrive the list of valid and invalid persons
const validateJSON = peopleData => {
  let invalidPersons = [],
    validPersons = [];
  const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
  const validate = ajv.compile(schema);
  peopleData &&
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

module.exports = {
  validateJSON,
  convertToVisFormat
};
