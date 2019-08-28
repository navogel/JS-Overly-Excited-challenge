console.log("cows eat hey");

// overly excited

// array that contains the words in a sentence
let sentence = [
	"The",
	"walrus",
	"danced",
	"through",
	"the",
	"trees",
	"in",
	"the",
	"light",
	"of",
	"the",
	"moon"
];

// concatenate sentence

function addExcitement(theWordArray) {
	let buildMeUp = "";

	for (let i = 0; i < theWordArray.length; i++) {
		buildMeUp = " " + buildMeUp + " " + theWordArray[i];
		console.log(buildMeUp);
		document.write(`${buildMeUp} <br>`);
	}
}

addExcitement(sentence);
