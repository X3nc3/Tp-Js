let analyserPhrase = (str) => {
  let strArrays = str.split(" ");

  let nbWords = strArrays.length;

  let maxLongWord = "";
  strArrays.map((i) => {
    if (i.length > maxLongWord.length) {
      maxLongWord = i;
    }
  });

  let occurrences = {};
  strArrays.forEach((word) => {
    occurrences[word] = (occurrences[word] || 0) + 1;
  });

  let phraseObj = {
    nb: nbWords,
    wordLonger: maxLongWord,
    occurence: occurrences,
  };
  console.log(phraseObj);

  return phraseObj;
};

analyserPhrase("bonjour je suis developpeur javascript");
