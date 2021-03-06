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
    pairs[team].forEach((p, i) => {

      pairNode.append("------------------------")
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
  document.getElementById(HTML_Keys.roster_input).value = JSON.stringify(
   APP.ROSTER
  );
  document.getElementById(HTML_Keys.existing_pairs_input).value =
    JSON.stringify(APP.EXISTING_PAIRS);
}

setupPage();

APP.render = {
  extractInputs,
  addPairsToDOM,
};

