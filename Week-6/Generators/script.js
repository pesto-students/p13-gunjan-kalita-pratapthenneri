function* stringToSymbolIterator(strings) {
  for (str of strings) {
    yield Symbol(str);
  }
}

const inputArray = ["hello", "world", "test"];
const symbolIterator = stringToSymbolIterator(inputArray);

for (symbol of symbolIterator) {
  console.log(symbol);
}
