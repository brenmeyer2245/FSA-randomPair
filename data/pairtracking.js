// take learning team and names from command line
let learningTeam = process.argv[2]; 
let names = process.argv[3]; 
console.log(names);
let team = require('./roster.json')[learningTeam]

//transform names to string of ids 
let ids = names.split(',').map(n => {
    const student = team.roster.find(s => s.name.toLowerCase().includes(n.toLowerCase()));
    return student.id
})

console.log("Ids", ids.sort().join(""))

//Alex - Cheerios
//Michael Dunkel,Annalise Gaston,Anthony Garza
//Riley Meskill,Andreu Ortiz

/**
 * Frank - CocoPebbles
 * 
 * John Mitchell,Kacey Ellis,Maleiyah Davis

Jordan Steger,Julio Figuroa,Bardell Wilson

Marquis,Tim,Minsung Kim
 */

/**
 * Lucky Charms 
 * Pair #1
Hunter,Jordan,Chris
Pair #2
Austin,Frederick Lawrence,Zachary Power
Pair #3
Antonio Santiago,Ruben Lazaro,Laurie Moss
 */

/**
 * Michell - kix
 * Jack,David Stein,Leonardo Flores
 * Kona Mazariegos,Alex Martinez,Miles Clark
 */

/**
 * Cutler -frostedFlakes
 * Room 6
Cristian Posadas,Jeffrey Hudgins,Noel Moreno

Room 7
TRAE BREUNIG,Austin Kyles
 */