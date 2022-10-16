
// write the function to determine if the given string is palindrome.

    // const string = "racecar"

    // function palindrome(str){
    //       var str = str.toLowerCase().replace()
    //     for (let i =0; i<str.length; i++){
    //       if (str[i] !== str[str.length -1 -i ]){
    //     return false
    //       }
          
    //     }return true
    // }
    //     console.log(palindrome(string))

// Another option

function palindrome(str) {
  var reg =/[\w_]/g;
 var smallstr = str.toLowerCase().replace(reg, "")
  var reversed = smallstr.split(" ").reverse().join(" ")
  if (reversed === smallstr)
    return true;

    return false;

}
 console.log(palindrome("eye"));






