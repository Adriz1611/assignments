// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Function: getLength");
  console.log("Length:", str.length);
  console.log("\n");
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Function: findIndexOf");
  console.log("Index:", str.indexOf(target));
  console.log("\n");
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Function: findLastIndexOf");
  console.log("Index:", str.lastIndexOf(target));
  console.log("\n");
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("Function: getSlice");
  console.log("After slice:", str.slice(start, end));
  console.log("\n");
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("Function: getSubstring");
  console.log("After substring:", str.substring(start, end));
  console.log("\n");
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("Function: replaceString");
  console.log("After replace:", str.replace(target, replacement));
  console.log("\n");
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("Function: splitString");
  console.log("After split:", str.split(separator));
  console.log("\n");
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("Function: trimString");
  console.log("After trim:", str.trim());
  console.log("\n");
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("Function: toUpper");
  console.log("After toUpperCase:", str.toUpperCase());
  console.log("\n");
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("Function: toLower");
  console.log("After toLowerCase:", str.toLowerCase());
  console.log("\n");
}
toLower("Hello World");
