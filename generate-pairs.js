function createPairs(classObject, pairsTracker, pairSize = 3) {
  let pairs = {};
  // Iterate through each team
  for (let teamName in classObject) {
    pairs[teamName] = [];
    //while the team roster has more students than pairSize
    while (classObject[teamName].roster.length > pairSize) {
      //Add Pairs to the pairs object
      pairs[teamName].push(selectPair(teamName, classObject[teamName], pairsTracker));
    }
    //When there's only students left for 1 pair
    //if there's only one student left
    if (classObject[teamName].roster.length === 1) {
      //add to the first pair
      pairs[teamName][0].push(...classObject[teamName].roster);
      //else, create a new pair
    } else pairs[teamName].push([...classObject[teamName].roster]);
  }
  return pairs;
}

function selectPair(teamName, learningTeam, pairsTracker) {
  //Brute Force
  //create pair, check if has been created
  let pairCombo = generatePairIdCombo(extractStudentIds(learningTeam.roster));
  let retryCount = 0;

  while (retryCount < 10 && !checkPairComboAvailability(pairCombo.join(""), pairsTracker)) {
    // TODO : Prevent reusing the same combos in generation Fn
    pairCombo = generatePairIdCombo(
      generatePairIdCombo(extractStudentIds(learningTeam.roster))
    );
    retryCount++;
  }
  //Still Failing after 10?
  if (retryCount >= 10) {
    console.log("Failure");
    //TODO: Pass along a string "To be created Manually"
    return [{ name: "To Be Created Manually" }];
  } else {

    let pair = learningTeam.roster.filter((s) => pairCombo.includes(s.id));

    updatePairTracker(pairCombo.join(""), pairsTracker, teamName)

    learningTeam.roster = learningTeam.roster.filter(
      (s) => !pairCombo.includes(s.id)
    );
    return pair;
  }
}

function generatePairIdCombo(availableIds) {
  // Take a hash of available ids
  let ids = [];
  while(ids.length < 3 && availableIds.length){
    // TODO: handle tracker with no ids 
    let randomId = availableIds.splice(randomNumber(0, availableIds.length), 1)[0];
    ids.push(randomId);
  }
  return ids.sort();
}

function checkPairComboAvailability(pairCombo, pairsTracker) {
  return !pairsTracker[pairCombo];
}

function updatePairTracker(pairCombo, pairTracker, teamName){
  pairTracker[teamName][pairCombo] = true;
}


function extractStudentIds(students){
  return students.map((s) => s.id)
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

module.exports = { createPairs };
