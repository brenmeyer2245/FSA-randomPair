
function addPairsToDOM(pairs) {
    const pairsContainer = document.getElementById("pairs");
    for (let team in pairs) {
      const pairNode = document.createElement("div");
      const teamTitle = document.createElement("h1");
      teamTitle.innerText = team;
      pairNode.appendChild(teamTitle);
      pairs[team].forEach((p) => {
        const pair = document.createElement("ul");
        p.forEach((s) => {
          const studentItem = document.createElement("li");
          studentItem.innerText = s.name;
          pair.appendChild(studentItem);
        });
        pairNode.appendChild(pair);
      });
  
      pairsContainer.appendChild(pairNode);
    }
  }
  