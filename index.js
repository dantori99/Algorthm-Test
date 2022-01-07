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
let str1 = []
let str2 = []
function anagram(a, b) {
    for (let i = 0; i < a.length; i++) {
        str1.push(a[i]);
    }

    for (let i = 0; i < b.length; i++) {
        str2.push(b[i]);
    }
}

bubbleSort(str1);
bubbleSort(str2);
let final1 = "";
let final2 = "";

function final(str1, str2) {
    final1 += str1;
    final2 += str2;
    if (final1 === final2) {
        return console.log(true)
    } else {
        return false
    }
}

console.log(anagram("abc", "cba"))
