function commaSeparateNumbers(num) {
  const arr = num.toString().split('');
  if (arr.length >= 5) {
    const numOfCommas = Math.floor(arr.length / 3);
    let insertAt = arr.length - 3;

    for (let i = 0; i < numOfCommas; i++) {
      if (insertAt !== 0) {
        arr.splice(insertAt, 0, ',');
      }
      insertAt -= 3;
    }
  }

  return arr.join('');
}

function grammarFormatList(list) {
  let str = '';

  if (list.length === 0) {
    return undefined;
  }

  if (list.length === 1) {
    return list[0];
  }

  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      str += list[i];
    }
    if (i === list.length - 1) {
      str += ` and ${list[i]}`;
    }
    if (i !== list.length - 1 && i !== 0) {
      str += `, ${list[i]}`;
    }
  }

  return str;
}

function formatCurrencies(currencies) {
  const names = [];
  for (const currency in currencies) {
    names.push(currencies[currency].name);
  }

  return grammarFormatList(names);
}

function formatLanguages(languages) {
  const names = [];
  for (const language in languages) {
    names.push(languages[language]);
  }
  return grammarFormatList(names);
}

export { commaSeparateNumbers, formatCurrencies, formatLanguages };
