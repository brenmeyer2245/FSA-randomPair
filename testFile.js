const fs = require("fs");
let roster = {
  appleJacks: JSON.parse(fs.readFileSync("roster.json"))["kix"],
};
let existingPairs = JSON.parse(fs.readFileSync("existing-pairs.json"));
const { createPairs } = require("./generate-pairs");

const pairs = createPairs(roster, existingPairs);
const pairIds = Object.keys(pairs).reduce((tracker, key) => {
  tracker[key] = pairs[key].map((p) => {
    return p
      .map((s) => s.id)
      .sort()
      .join("");
  });
  return tracker;
}, {});
console.dir("Pairs:", pairs);
console.log("Pair Ids:", pairIds);
console.log("Existing:", existingPairs);



// NOTES