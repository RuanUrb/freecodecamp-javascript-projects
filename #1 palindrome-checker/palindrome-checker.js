function palindrome(str) {
  const filteredString = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversedString = filteredString.split("").reverse().join("");
  if(reversedString === filteredString) return true;
  else return false;
}

