// write the function to determine if the given string is palindrome.

// Option 1
// const string = "acecar";
// //const len = string.length;
// function isPalindrome(str) {
// str = str.replace(/\W/g,"").toLowerCase();
// return (str == str.split("").reverse().join(""));
// }
//  console.log(isPalindrome(string));



// // Option 2
// function palindrome(str){
//         var str = str.toLowerCase().replace()
//         for (let i =0; i< string.length; i++){
//           if (str[i] !== str[string.length -1 -i ]){
//         return false
//           }
          
//         }return true
// }
//         console.log(palindrome(string))


// Option 3
function checkPalindrome(string){
    string = string.replace(/\W/g,"").toLowerCase();
    const len =string.length;
    for (let i=0; i < len; i++){
        if(string[i]!== string[len-1-i]){
            return "not palindrome";
        }
    } return "palindrome"
}
const string = prompt("Enter");
const value = checkPalindrome(string);

console.log(value);

//Array Object determination 

var colors = ["blue", "black", "red"];

var cars = colors.map(color => color.toUpperCase().slice(0));
console.log(cars)






