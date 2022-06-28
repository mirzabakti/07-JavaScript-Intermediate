// Soal - 01
// Kamu diminta untuk membuat sebuah fungsi reverse yang mana akan membalik sebuah array, fungsi reverse memiliki sepsifikasi sebagai berikut:

// memiliki 1 parameter yaitu:
// arr [Array] => array yang akan kita manipulasi nilainya
// return value [Number] berupa sebuah array baru yang sudah terbalik




const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

// function reverse(Array) {
//   const number = Array.slice().reverse()
//   return number
// }

function reverse(array) {
    let result = new Array;
    for(let i = array.length-1; i >= 0; i--) {
        result.push(array[i])
    }
    return result;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// Ekspektation output : [1, 2, 3], [3, 2, 1]
//                       [8, 1, 5, 7], [7, 5, 1, 8]





// Soal - 02
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 1 parameter:
// arr [Array of Number] => array 1 dimensi dengan nilai Number
// return value [Number] total angka yang melebihi nilai rata-rata




const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3]; 

function getAverage( array) {
    let total = 0;
    let count = 0;
    
    for(let j =0 ; j < array.length ;j++){
        total += array[j];
    }

    let avg = total / array.length;

    for(let j =0 ; j < array.length ;j++){
        if(array[j] > avg){
            count++;
        }
    }
    return count;
}

console.log(getAverage(arr3))
console.log(getAverage(arr4))

// Ekspektation output : 2 // Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8
//                       3 // Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8





// Soal - 03
// Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 2 parameter:
// arr [Array] => array multi dimensi yang akan kita proses
// num [Number] => angka yang ingin kita cari
// return value [Number]
// fungsi akan mengembalikan null apabila angka yang dicari tidak ditemukan
// fungsi akan mengembalikan index dari angka yang dicari

// Langkah-langkah pengerjaan:
// karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
// setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
// apabila kita tidak menemukan nilai tersebut maka kembalikan null
// dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)



const arr5 = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) {
    let tempArr = []
    for(let k = 0; k < arr.length; k++) {
      let number = arr[k];
      for(let l = 0; l < number.length; l++) {
        // console.log(num[l]);
        tempArr.push(number[l]);
      }
    }

    for(let m = 0; m < tempArr.length; m++) {
      // console.log(tempArr[m]);
      if(tempArr[m] === num) {
        var found = true;
        var index = m;
      }
    }

    if (found) {
      return index;
    } else {
      return "null";
    }
    
  }

  // searchInArray(arr)
  console.log(searchInArray(arr5, 3));
  console.log(searchInArray(arr5, 2));
  console.log(searchInArray(arr5, 4));
  console.log(searchInArray(arr5, 8));

// Ekspektation output : null, 4, null, 5