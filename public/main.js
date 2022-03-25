 
 
 function main(){
    const {ROSTER, EXISTING_PAIRS} = APP
    const classRoster = Object.create(ROSTER)
    const pairTracker = Object.create(EXISTING_PAIRS)

    const pairs = APP.createPairs(classRoster, pairTracker, 2)

    APP.render.addPairsToDOM(pairs)
    const newExisting = APP.getNewExistingPairs(pairs, JSON.parse(existingPairs))
    
    //Print out updated Existing Pairs
    console.log("New Existing Pairs", JSON.stringify(newExisting));
}






