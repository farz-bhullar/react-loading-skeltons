const truncate = (string, length = 100) =>
  string && string.length > length ? string.substr(0, length) + "..." : string;

const getCurrentTimestamp = () => Date.now();

export { truncate, getCurrentTimestamp };
