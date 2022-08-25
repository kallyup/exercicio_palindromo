function testaPalindrome(string){
    if (!string){
        return "não é string";
    }
    return string.split("").reverse().join("")===string
}

console.log(testaPalindrome("omo"));