const str = process.argv[2];
let newStr = str.replace(/ /g, "_");
newStr = newStr.replace(/:/g, "_");
newStr = newStr.replace(/\(/g, "_");
newStr = newStr.replace(/\)/g, "_");
newStr = newStr.replace(/\//g, "_");
newStr = newStr.replace(/\'/g, "_");
console.log(newStr);
