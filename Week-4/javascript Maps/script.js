function calcWordFrequencies() {
  const input = prompt("Enter a list of words (separated by spaces):");
  const words = input.split(" ");
  const wordFrequencies = new Map();

  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    if (wordFrequencies.has(lowercaseWord)) {
      wordFrequencies.set(
        lowercaseWord,
        wordFrequencies.get(lowercaseWord) + 1
      );
    } else {
      wordFrequencies.set(lowercaseWord, 1);
    }
  }

  for (const [word, frequency] of wordFrequencies) {
    console.log(word, " ", frequency);
  }
}

calcWordFrequencies();
