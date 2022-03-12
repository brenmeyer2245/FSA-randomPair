 
 
 function main(){
    const {roster, existingPairs} = APP.render.extractInputs();
    const classRoster = JSON.parse(roster);
    const pairTracker = JSON.parse(existingPairs);

    const pairs = APP.createPairs(classRoster, pairTracker)

    APP.render.addPairsToDOM(pairs)
    const newExisting = APP.getNewExistingPairs(pairs, JSON.parse(existingPairs))
    
    //Print out updated Existing Pairs
    console.log("New Existing Pairs", newExisting);
}






