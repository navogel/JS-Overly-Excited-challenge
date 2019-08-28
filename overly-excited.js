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

// Trying again with exclamation points every 3 words

function addExcitement2(theWordArray) {
	let buildMeUp = "";

	for (let i = 0; i < theWordArray.length; i++) {
		if ((i + 1) % 3 === 0) {
			buildMeUp = " " + buildMeUp + " " + theWordArray[i] + "!";
			document.write(`${buildMeUp} <br>`);
		} else buildMeUp = " " + buildMeUp + " " + theWordArray[i];
		document.write(`${buildMeUp} <br>`);
	}
}

addExcitement2(sentence);

// add a punctuation arguement

function addExcitement3(theWordArray, a) {
	let buildMeUp = "";

	for (let i = 0; i < theWordArray.length; i++) {
		if ((i + 1) % 3 === 0) {
			buildMeUp = " " + buildMeUp + " " + theWordArray[i] + a;
			document.write(`${buildMeUp} <br>`);
		} else buildMeUp = " " + buildMeUp + " " + theWordArray[i];
		document.write(`${buildMeUp} <br>`);
	}
}

addExcitement3(sentence, "#");

// add a punctuation arguement + number of time to use it

// Function to repeat a string x number of times

function repeatStringNumTimes(string, times) {
	if (times > 0) return string.repeat(times);
	else return "";
}

// function to add the punctuation x number of times

function addExcitement4(theWordArray, a, times) {
	let buildMeUp = "";

	for (let i = 0; i < theWordArray.length; i++) {
		if ((i + 1) % 3 === 0) {
			buildMeUp =
				" " +
				buildMeUp +
				" " +
				theWordArray[i] +
				repeatStringNumTimes(a, times);
			document.write(`${buildMeUp} <br>`);
		} else buildMeUp = " " + buildMeUp + " " + theWordArray[i];
		document.write(`${buildMeUp} <br>`);
	}
}

addExcitement4(sentence, "#", 5);

// function to add the punctuation x number of times

const addExcitement5 = (theWordArray, a, times) => {
	let buildMeUp = "";

	for (let i = 0; i < theWordArray.length; i++) {
		if ((i + 1) % 3 === 0) {
			buildMeUp =
				" " +
				buildMeUp +
				" " +
				theWordArray[i] +
				repeatStringNumTimes(a, times);
			document.write(`${buildMeUp} <br>`);
		} else buildMeUp = " " + buildMeUp + " " + theWordArray[i];
		document.write(`${buildMeUp} <br>`);
	}
};

addExcitement5(sentence, "#", 5);
