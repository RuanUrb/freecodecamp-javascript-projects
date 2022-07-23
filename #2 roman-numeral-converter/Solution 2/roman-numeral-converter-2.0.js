  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function convertToRoman(num) {
  if(num == 0) return '';
  for(let i = 0; i < arabic.length; i++)
  {
    if(num % arabic[i] != num) return (roman[i].repeat(Math.floor(num/arabic[i])) + convertToRoman(num % arabic[i]));
  }
}
convertToRoman(36);