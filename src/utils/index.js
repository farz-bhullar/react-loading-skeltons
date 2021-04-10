const truncate = (string, length = 100) =>
  string && string.length > length ? string.substr(0, length) + "..." : string;

const getRandomBanner = (id, width = "400", height = "200") =>
  `https://picsum.photos/id/${id}/${width}/${height}`;

export { truncate, getRandomBanner };
