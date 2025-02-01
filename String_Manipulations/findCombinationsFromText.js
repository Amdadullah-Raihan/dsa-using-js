function findCombinationsFromText(inputString) {
  const separatorRegex = /[\s,-]+/;
  const tags = inputString
    .split(separatorRegex)
    .filter((tag) => tag.length > 0);
  const validPrefixes = [
    "Group",
    "Category",
    "Subcategory",
    "Make",
    "Model",
    "Diagram",
  ];
  const result = [];

  function isValidTag(tag) {
    const regex = new RegExp(`^(${validPrefixes.join("|")})_[a-zA-Z0-9-]+$`);
    return regex.test(tag);
  }

  function generateCombinations(index, currentCombination) {
    if (index === tags.length) {
      result.push(currentCombination.slice()); // Add a copy of the current combination
      return;
    }

    const currentTag = tags[index];

    if (isValidTag(currentTag)) {
      currentCombination.push(currentTag);

      // Recursively generate combinations
      generateCombinations(index + 1, currentCombination);

      // Backtrack to explore other possibilities
      currentCombination.pop();
    }

    // Continue without including the current tag
    generateCombinations(index + 1, currentCombination);
  }

  generateCombinations(0, []);

  return result;
}

// Test cases
const test1 =
  "Group_Electric-Pallet-Jack-Parts, Category_Switches, Subcategory_Ignition-Switch";
const test2 =
  "--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!! Subcategory_Ignition-Switch)) @!%";
const test3 =
  "Category_Switches-Group Electric-Pallet-Jack-Parts-Subcategory_Ignition-Switch";
const test4 = "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas";
const test5 = "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-Group Test";
const test6 =
  "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test";
const test7 = "Group_Tools-Hardware-Category_Roll-Pin-Make_U-Line-Model H-1193";
const test8 = "Group_Tools-Hardware-Category_Roll-Pin-Make_Multiton-Model_J";
const test9 = "Make_Atlas-Model_Zenith-Type9-Diagram_Frame";

console.log(findCombinationsFromText(test1));
console.log(findCombinationsFromText(test2));
console.log(findCombinationsFromText(test3));
console.log(findCombinationsFromText(test4));
console.log(findCombinationsFromText(test5));
console.log(findCombinationsFromText(test6));
console.log(findCombinationsFromText(test7));
console.log(findCombinationsFromText(test8));
console.log(findCombinationsFromText(test9));
