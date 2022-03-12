const HTML_Keys = {
  pairs_container_id: "pair-output",
  existing_pairs_input: "existing-input",
  roster_input: "roster-input",
};

function addPairsToDOM(pairs) {
  const pairsContainer = document.getElementById(HTML_Keys.pairs_container_id);
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

function extractInputs() {
  const roster = document.getElementById(HTML_Keys.roster_input).value;
  const existingPairs = document.getElementById(
    HTML_Keys.existing_pairs_input
  ).value;
  return {
    roster,
    existingPairs,
  };
}

function setupPage() {
  document.getElementById(HTML_Keys.roster_input).value = JSON.stringify({
    kix: {
      roster: [
        { id: 1, name: "Alejandro Martinez" },
        { id: 2, name: "David Stein" },
        { id: 3, name: "Jack Young" },
        { id: 4, name: "Caden Holland" },
        { id: 5, name: "Kindra Williams" },
        { id: 6, name: "Kona Mazariegos" },
        { id: 7, name: "Miles Clark" },
      ],
    },
  });
  
  document.getElementById(HTML_Keys.existing_pairs_input).value = JSON.stringify({
    kix: {
      135: true,
      246: true,
    },
  });
}

setupPage()

APP.render = {
  extractInputs,
  addPairsToDOM,
};
