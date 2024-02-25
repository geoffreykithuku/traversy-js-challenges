function titleCase(str) {
  let words = str.split(" ");
  let capitalised = words.map((word) =>
    word.toLowerCase().replace(word[0], word[0].toUpperCase())
  );

  capitalised = capitalised.join(" ");

  return capitalised;
}

module.exports = titleCase;
