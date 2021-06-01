const yn = (input) => {
  const value = input.trim().toLowerCase();

  if (/^(?:n|no|nein|false|0)$/i.test(value)) {
    return false;
  }

  return Boolean(value);
}

module.exports = yn;
