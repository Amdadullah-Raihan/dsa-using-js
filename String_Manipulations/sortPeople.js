var sortPeople = function (names, heights) {
  let people = {};
  let sortedPeople = [];

  for (let i = 0; i < names.length; i++) {
    people[heights[i]] = names[i];
  }

  //   const sortedH = heights.sort().reverse();
  const sortedH = [...heights].sort((a, b) => b - a);

  for (let i = 0; i < sortedH.length; i++) {
    sortedPeople.push(people[sortedH[i]]);
  }
  return sortedPeople;
};

const names = [
  "IEO",
  "Sgizfdfrims",
  "QTASHKQ",
  "Vk",
  "RPJOFYZUBFSIYp",
  "EPCFFt",
  "VOYGWWNCf",
  "WSpmqvb",
];

const heights = [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224];

console.log(sortPeople(names, heights));
