/**
  functional requirements 
 * Phase I
 * 1 source of record should not be in the app. Easily consumable and through some HTML input
 * 2 Create a list pairs within each learning team 
 * 3 There should be no groups of 1. Prefer adding solo students to groups 
 * 4 Display the pairings by Learning Team and Team Lead. 
 * 
 * Phase II
 * 5. Consider past pairings and preferences
 * 6. Assign Zoom room numbers to each pair 
 * 7. Control the Pair Size 
 */
/**
  Non Functional requirements 
 - Should be lightweight, easily deployed, maintained and passed around to the team
 - Only Front end 
 - Easy to screen shot or move output to slack
 */

const fs = require("fs");
let roster = fs.readFileSync("roster.json");
//Randomize Class

/*
Phase I
take in and parse json [read from input]
  learningTeam: {
    name, 
    lead, 
    roster: [
      ....,{student}
    ]
  } 
    create pairings
    1. create pairs obj by learningTeam 
    2. create pairs
      - while pairs.length < 3
      - randomly select and place, remove from roster
      - do this pairSize times
      - take final three and place in pairs 
**/

/**
 * Phase II
 * Storing past pairs
 * - In class object, store past pairs
 * - Create a Key lookup for most recent pairs
 * - Filter out options based on key
 * - Store only last 2 classes
 *
 * Storing Preferences
 * - Store Preferences in Student
 * - Create Key for Shared Preferences
 */

function processJSON(json) {
  return JSON.parse(json);
}

function createPairs(classObject, pairSize = 3) {
  let pairs = {};
  // Iterate through each team 
  for (let teamName in classObject) {
    pairs[teamName] = [];
    //while the team roster has more students than pairSize 
    while (classObject[teamName].roster.length > pairSize) {
      let currentPair = [];
      //select pairSize # of students, add to pair
      for (let i = 1; i <= pairSize; i++) {
        currentPair.push(selectStudent(classObject));
      }

      //Add Pairs to the pairs object
      pairs[teamName].push(currentPair);
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

function selectStudent(classObject) {
  //Brute Force
  //create pair, check if has been created
  
    //yes => retry, up to 10 times, then add string => must be done manually
    //no, create the pair


  const randomIndex =
    Math.floor(Math.random() * classObject[teamName].roster.length - 1) + 0;
  const student = classObject[teamName].roster.splice(randomIndex, 1).pop();
  return student;
}

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
