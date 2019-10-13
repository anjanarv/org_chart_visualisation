const vis = require("vis-network");

module.exports = (dataList, edgesList, invalidPersons) => {
  let validPersonsOptions = {
    height: "100%",
    width: "100%",
    physics: false,
    color: {
      hover: {
        background: "#6E6EFD"
      }
    },
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: "directed"
      }
    },
    smooth: {
      type: "cubicBezier",
      roundness: 0.4
    },
    interaction: { hover: true },
    font: {
      size: 100
    },
    edges: {
      arrows: {
        to: { enabled: true, type: "arrow" },
        middle: { enabled: false, type: "arrow" },
        from: { enabled: false, type: "arrow" }
      },
      width: 2
    },
    nodes: {
      size: 15,

      color: {
        background: "white",
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
      shapeProperties: {
        size: 10
      },

      font: { color: "black", size: 20, strokeWidth: 1 },
      shape: "box"
    }
  };

  let invalidPersonsOptions = {
    height: "100%",
    width: "100%",
    physics: false,
    color: {
      hover: {
        background: "#6E6EFD"
      }
    },

    interaction: { hover: true },
    font: {
      size: 100
    },

    nodes: {
      size: 15,

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
      shapeProperties: {
        size: 10
      },

      font: { color: "black", size: 20, strokeWidth: 1 },
      shape: "box"
    }
  };

  let validContainer = document.getElementById("validHierarchyRepresentation");
  let invalidContainer = document.getElementById(
    "invalidHierarchyRepresentation"
  );

  let data = {
    nodes: dataList,
    edges: edgesList
  };

  let invalidData = {
    nodes: invalidPersons
  };

  let network = new vis.Network(validContainer, data, validPersonsOptions);
  new vis.Network(invalidContainer, invalidData, invalidPersonsOptions);
};
