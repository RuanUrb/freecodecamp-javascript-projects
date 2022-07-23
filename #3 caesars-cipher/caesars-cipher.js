function rot13(str) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let finalStr = '';
  for(let i = 0; i < str.length; i++)
  {
    if((/^[A-Z]+$/i).test(str[i])) finalStr+= alphabet[(alphabet.indexOf(str[i]) + 13) % 26];
    else finalStr+= str[i];
  }
  return finalStr;
}

console.log(rot13("SERR PBQR PNZC"));
