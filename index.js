// write the function to determine if the given string is palindrome.

// Option 1
const string = "racecar";
function isPalindrome(str) {
str = str.replace(/\W/g,"").toLowerCase();
return (str == str.split("").reverse().join(""));
}
 console.log(isPalindrome(string));



// // Option 2
function palindrome(str){
        var str = str.toLowerCase().replace()
        for (let i =0; i< string.length; i++){
            if (str[i] == str[string.length -1 -i ]){
               return "Palindrome"
         }return "Not Palindrome"
          /*  
          "R" "A" "C" "E" "C" "A" "R"
    i   =  0   1   2   3   4   5    6
    i++ =  1   2   3   4   5   6     7
    
    i   = 0    => R(0) == R(7-1-0)
    i   = 1    => A(1) == A(7-1-1)
    i   = 2    => C(2) == C(7-1-2)
    i   = 3    => E(3) == E(7-1-3)
    i   = 4    => C(4) == C(7-1-4)
    i   = 5    => A(5) == A(7-1-5)
    i   = 6    => R(6) == R(7-1-6)
    i   = 7    => R(7) == R(7-1-7) undifiend (-1 value)
          */          
        }
    }
        console.log(palindrome(string))


// // Option 3
// function checkPalindrome(string){
//     string = string.replace(/\W/g,"").toLowerCase();
//     const len =string.length;
//     for (let i=0; i < len; i++){
//         if(string[i]!== string[len-1-i]){
//             return "not palindrome";
//         }
//     } return "palindrome"
// }
// const string = prompt("Enter");
// const value = checkPalindrome(string);

// console.log(value);

//Array Object determination 

var colors = ["blue", "black", "red"];

var cars = colors.map(color => color.toUpperCase().slice(0));
console.log(cars)






