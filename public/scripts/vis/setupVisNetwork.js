const vis = require("vis-network");

module.exports = {
  // create valid data and invalid data network with the given data and edges in the visjs format
  createNetwork(dataList, edgesList, invalidPersons) {
    let validPersonsOptions = {
      height: "100%",
      width: "100%",
      physics: true,
      layout: {
        hierarchical: {
          direction: "UD",
          sortMethod: "directed"
        }
      },
      interaction: { hover: true },
      edges: {
        arrows: {
          to: { enabled: true, type: "arrow" },
          middle: { enabled: false, type: "arrow" },
          from: { enabled: false, type: "arrow" }
        },
        width: 2
      },
      nodes: {
        color: {
          background: "white",
          hover: {
            border: "black",
            background: "yellow"
          }
        },
        scaling: {
          min: 10,
          max: 30,
          label: {
            enabled: false,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
          },
          customScalingFunction: function(min, max, total, value) {
            if (max === min) {
              return 4;
            } else {
              var scale = 1 / (max - min);
              return Math.max(0, (value - min) * scale);
            }
          },
          label: {
            enabled: true,
            min: 20
          }
        },

        shadow: {
          enabled: true,
          color: "grey",
          size: 20
        },
        shape: {
          size: 100
        },
        font: { color: "black", size: 20, strokeWidth: 1 },
        shape: "box"
      }
    };

    let invalidPersonsOptions = {
      height: "100%",
      width: "100%",
      physics: true,

      interaction: { hover: true },
      nodes: {
        color: {
          background: "red",
          hover: {
            border: "black",
            background: "yellow"
          }
        },

        shadow: {
          enabled: true,
          color: "grey",
          size: 20
        },
        shape: {
          size: 100
        },
        font: { color: "black", size: 20, strokeWidth: 1 },
        shape: "box"
      }
    };

    let validContainer = document.getElementById(
      "validHierarchyRepresentation"
    );
    let invalidContainer = document.getElementById(
      "invalidHierarchyRepresentation"
    );

    let validData = {
      nodes: dataList,
      edges: edgesList
    };

    let invalidData = {
      nodes: invalidPersons
    };

    new vis.Network(validContainer, validData, validPersonsOptions);
    new vis.Network(invalidContainer, invalidData, invalidPersonsOptions);
  }
};
