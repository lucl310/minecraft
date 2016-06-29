var Ore = ["Diamond", "gold", "gold", "iron", "iron", "iron", "cobblestone", 
"cobblestone","cobblestone","cobblestone","cobblestone"];

function pickOre(){
var oreFound = Math.floor(Math.random()*Ore.length);
document.getElementById('Pick').innerHTML = "<h1>" +"You just found "Ore[oreFound]+"</h1>";
console.log(Ore[oreFound]);
console.log(oreFound);
}