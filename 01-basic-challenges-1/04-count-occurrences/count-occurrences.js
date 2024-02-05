function countOccurrences(str, letter) {
  return str.split("").filter((l) => l === letter).length;
}

module.exports = countOccurrences;
