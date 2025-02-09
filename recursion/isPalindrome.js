
const isPalindrome = (index, str) => {
    if(index >= str.length/2) return true;
    if(str.charAt(index) !== str.charAt(str.length - index - 1)) return false;
    return isPalindrome(index + 1, str)
}

console.log("is palindrome?" , isPalindrome(0, "madam"))