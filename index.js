function anagram(a, b) {
    if (a.length !== b.length) return false;

    let str1 = a.split("").sort().join("");
    let str2 = b.split("").sort().join("");

    if (str1 === str2){
        return true;
    } else {
        return false
    }
}

console.log(anagram("people", "leepop"));