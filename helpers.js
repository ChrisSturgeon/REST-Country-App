function commonSeparateNumber(num) {
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

export { commonSeparateNumber };
