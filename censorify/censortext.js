var censoredWords = ['sad','bad','mad'];
var customCensoredWords = [];
function censor(instr){
	for (idx in censoredWords){
		instr = instr.replace(censoredWords[idx], "*****");
	}
	for (idx in customCensoredWords){
		instr = instr.replace(customCensoredWords[idx], "*****");
	}
	return instr;
}

function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;