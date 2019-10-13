const cytoscape = require("cytoscape");

module.exports = {
  getNodesWithEdges(items) {
    let tasksGraph = cytoscape();
    items.forEach(item => {
      tasksGraph.add({
        group: "nodes",
        data: item
      });
    });

    for (let i = 0; i < items.length; i++) {
      let dependsIds = items[i].managerId
        ? Array.from(items[i].managerId.split(","))
        : [];
      for (let k = 0; k < dependsIds.length; k++) {
        let finder = items.find(item => item.id === dependsIds[k]);
        if (finder) {
          tasksGraph.add({
            group: "edges",
            data: {
              target: items[i].id,
              source: dependsIds[k]
            }
          });
        }
      }
    }
    return tasksGraph;
  }
};
