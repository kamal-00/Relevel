function isPalindrome(str,i,j){
    if(i==j || i>j){
        return true;
    }
    if(str[i]!=str[j]){
        return false;
    }
    return isPalindrome(str,i+1,j-1);
}
//const str="radar";
const str="kumar";
//const str="daad";
console.log(isPalindrome(str,0,str.length-1));