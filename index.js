// write the function to determine if the given string is palindrome.

// Option 1
const string = "racecar"
function isPalindrome(str) {
str = str.replace(/\W/g,"").toLowerCase();
return (str == str.split("").reverse().join(""));
}
 console.log(isPalindrome(string));



// Option 2
function palindrome(str){
        var str = str.toLowerCase().replace()
        for (let i =0; i<str.length; i++){
          if (str[i] !== str[str.length -1 -i ]){
        return false
          }
          
        }return true
}
        console.log(palindrome(string))







