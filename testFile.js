const fs = require("fs");
let roster = {
  kix: JSON.parse(fs.readFileSync("roster.json"))["kix"],
};
let pairsTracker = JSON.parse(fs.readFileSync("existing-pairs.json"));
const { createPairs } = require("./generate-pairs");

const pairs = createPairs(roster, pairsTracker);

const pairIds = Object.keys(pairs).reduce((tracker, key) => {
  tracker[key] = pairs[key].reduce((t, p) => {
    let pairCombo = p
      .map((s) => s.id)
      .sort()
      .join("");
    t[pairCombo] = true;
    return t;
  }, {});
  return tracker;
}, {});

console.log("Pairs:", pairs['kix']);

let existingPairs = JSON.parse(fs.readFileSync("existing-pairs.json"));
for (let teamName in existingPairs) {
  existingPairs[teamName] = {
    ...existingPairs[teamName],
    ...pairIds[teamName],
  };
}

console.log("Existing:", existingPairs);
