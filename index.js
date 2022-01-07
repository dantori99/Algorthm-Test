// function anagram(a, b) {
//     if (a.length !== b.length) return false;

//     let str1 = a.split("").sort().join("");
//     let str2 = b.split("").sort().join("");

//     if (str1 === str2){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(anagram("people", "leepop"));
function bubbleSort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}
function anagram(a, b) {
    let str1 = [];
    let str2 = [];
    let final1 = "";
    let final2 = "";
    for (let i = 0; i < a.length; i++) {
        str1.push(a[i]);
    }

    for (let k = 0; k < b.length; k++) {
        str2.push(b[k]);
    }
    if (str1.length !== str2.length) return console.log(false);
    bubbleSort(str1);
    bubbleSort(str2);
    for (let o = 0; o < str1.length; o++) {
        final1 += str1[o];
    }
    for (let p = 0; p < str1.length; p++) {
        final2 += str2[p];
    }
    if (final1 === final2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

anagram("abcdefghi", "ihgfedcba")