function convertToRoman(num) {
 if (num == 0) return '';
 else if(num % 1000 != num) return 'M'.repeat(Math.floor(num/1000)) + convertToRoman(num % 1000);
  else if(num % 900 != num) return 'CM'.repeat(Math.floor(num/900)) + convertToRoman(num % 900);
  else if(num % 500 != num) return 'D'.repeat(Math.floor(num/500)) + convertToRoman(num % 500);
  else if(num % 400 != num) return 'CD'.repeat(Math.floor(num/400)) + convertToRoman(num % 400);
  else if(num % 100 != num) return 'C'.repeat(Math.floor(num/100)) + convertToRoman(num % 100);
  else if(num % 90 != num) return 'XC'.repeat(Math.floor(num/90)) + convertToRoman(num % 90);
  else if(num % 50 != num) return 'L'.repeat(Math.floor(num/50)) + convertToRoman(num % 50);
  else if(num % 40 != num) return 'XL'.repeat(Math.floor(num/40)) + convertToRoman(num % 40);
  else if(num % 10 != num) return 'X'.repeat(Math.floor(num/10)) + convertToRoman(num % 10);
  else if(num % 9 != num) return 'IX'.repeat(Math.floor(num/9)) + convertToRoman(num % 9);
  else if(num % 5 != num) return 'V'.repeat(Math.floor(num/5)) + convertToRoman(num % 5);
  else if(num % 4 != num) return 'IV'.repeat(Math.floor(num/4)) + convertToRoman(num % 4);
  else if(num % 1 != num) return 'I'.repeat(Math.floor(num/1)) + convertToRoman(num % 1);
}
convertToRoman(36);

//Poor solution!!! 
//I made it this ugly in order to check whether I could use recursion properly.
//Once it worked, I developed a cleaner (yet slightly harder to read) solution on the next attempt.