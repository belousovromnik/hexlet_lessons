const run = text => {
  // BEGIN (write your solution here)
  const takeLast = (text, cnt) =>
    text.length < 4
      ? null
      : text
          .split('')
          .reverse()
          .slice(0, cnt)
          .join('');
  // END

  return takeLast(text, 4);
};

console.log(run('')); // null
console.log(run('cb')); // null
console.log(run('power')); // rewo
console.log(run('hexlet')); // telx
