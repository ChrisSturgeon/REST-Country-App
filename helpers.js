import { localData } from './data';

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

// Returns array of objects with cca3 codes and corresponding common country names
function findCommonNamesByCountryCodes(codes) {
  const commonNames = [];

  codes.forEach((code) => {
    const matchingCountry = localData.find((country) => {
      return country.cca3 === code;
    });

    commonNames.push({
      code: code,
      name: matchingCountry.name.common,
    });
  });

  return commonNames;
}

export {
  commaSeparateNumbers,
  formatCurrencies,
  formatLanguages,
  findCommonNamesByCountryCodes,
};
