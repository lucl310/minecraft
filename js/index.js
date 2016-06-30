var Ore = ["Diamond", "Gold", "Gold", "Iron", "Iron", "Iron", "Cobble", 
"Cobble","Cobble","Cobble","Cobble"];

var diamondCount = 0;
var goldCount = 0;
var ironCount = 0;
var cobbleCount = 0;

var press = function(){
	var oreFound = Math.floor(Math.random()*Ore.length);
	console.log(Ore[oreFound]);

	if (Ore[oreFound] === "Diamond") {
		diamondCount++;
		console.log(diamondCount);
		document.getElementById('diamondDisplay').innerHTML =diamondCount;
	};
	if (Ore[oreFound] === "Gold") {
		goldCount++;
		console.log(goldCount);
		document.getElementById('goldDisplay').innerHTML =goldCount;
	};
	if (Ore[oreFound] === "Iron") {
		ironCount++;
		console.log(ironCount);
		document.getElementById('ironDisplay').innerHTML =ironCount;
	};
		if (Ore[oreFound] === "Cobble") {
		cobbleCount++;
		console.log(cobbleCount);
		document.getElementById('cobbleDisplay').innerHTML =cobbleCount;
	};
	document.getElementById('Pick').innerHTML = "<h1>You just found "+Ore[oreFound]+"</h1>";
	
	console.log(oreFound);
}