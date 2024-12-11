const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let sort1 = str1.split("").sort().join("");
  let sort2 = str2.split("").sort().join("");

  return sort1 === sort2;
};

console.log(isAnagram("hello", "world"));
console.log(isAnagram("listen", "silent"));
