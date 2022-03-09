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