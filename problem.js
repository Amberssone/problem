const strings = [
  "sfibjs",
  "nsnsdnfjsdn",
  "sj",
  "sdn",
  "uadamdsk",
  "nadiasjdijasn",
  "dsj",
];

const filterStrings = (strings) => {
  const filteredStrings = [];

  for (let stringIndex = 0; stringIndex < strings.length; stringIndex++) {
    if (strings[stringIndex].length <= 3) {
      filteredStrings.push(strings[stringIndex]);
    }
  }

  return filteredStrings;
};

console.log(filterStrings(strings));
