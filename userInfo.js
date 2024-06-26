function createUserProfiles(originalNames, modifiedNames) {
  return originalNames.map((names, index) => ({
    originalName: names,
    modifiedName: modifiedNames[index],
    id: index++,
  }));
}

/* Test code for createUserProfiles
const originalNames = ["hello", "world", "example", "array"];
const modifiedNames = ["hello", "world", "EXAMPLE", "ARRAY"];
console.log(createUserProfiles(originalNames, modifiedNames)); */
