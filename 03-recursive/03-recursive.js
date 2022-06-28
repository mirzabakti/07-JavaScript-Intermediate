// Soal - 01
// Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// 1. fungsi harus ditulis menggunakan recursive
// 2. memiliki 1 parameter:
//     -) arr [Array] => array of number yang nanti kita akan cari jumlahnya
// 3. return value [Number] => nilai kembalian berupa sebuah Number

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(array) {
    return (array.length === 0) ? 0 : array[0] + sumOfArray(array.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Ekspektation output : 15, 36




// Soal - 02
// Pada soal sebelumnya kamu diminta untuk membuat sebuah fungsi untuk mencari total sebuah "array of number", pada soal kali ini kamu diminta untuk membuat sebuah fungsi yang mana akan memberikan jumlah angka yang nilainya melebihi nilai rata-rata. Berikut merupakan langkah-langkah yang dapat kalian gunakan untuk menyelesaikan masalah tersebut:

// 1. pastikan bahwa array yang kalian gunakan pada soal-01 dan soal-02 itu identik atau sama
// 2. cari nilai rata-rata menggunakan fungsi yang sudah kalian buat pada soal-01
// 3. buat sebuah funsi yang mana memiliki 2 parameter
//     - arr [Array] => array of number
//     - avg [Number] => nilai rata-rata
// 4. fungsi pada soal-2 akan melakukan checking terhadap tiap-tiap nilai apakah ia melebihi nilai rata-rata atau tidak
// 5. langkah terakhir adalah mengembalikan jumlah dari nilai yang melebihi nilai rata-rata

const avg1 = sumOfArray(arr1)/arr1.length
const avg2 = sumOfArray(arr2)/arr2.length
function countAboveAvg( array, avg) {
    let count = 0;
    if(array.length === 0){
        return 0
    }
    if(array[0] >= avg){
        count = 1
    }
    return count + countAboveAvg(array.slice(1), avg)
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Ekspektation output :    2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 4 dan 5
//                          2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 10 dan 22




// Soal - 03
// Kalian diminta untuk membuat fungsi yang mana akan mencari sebuah nilai didalam array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// 1. fungsi harus ditulis menggunakan recursive
// 2. memiliki 2 parameter:
//     - arr [Array] => array of number yang nanti akan kita cari value-nya
//     - num [Number] => angka yang hendak kita cari
// 3. return value:
//     - apabila kita tidak menemukan angka tersebut maka kita akan mengembalikan "angka tidak ditemukan"
//     - apabila kita menemukan angka tersebut maka kita akan mengembalikan "angka ditemukan pada index: $INDEX"


const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    if (arr[arr.length - 1] === num) {
        return "Angka ditemukan pada index: "+(arr.length - 1);
    }
    if (arr.length === 1) {
        return "Angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// Ekspektation output :
// "angka tidak ditemukan"
// "angka ditemukan pada index: 0"
// "angka tidak ditemukan"

// Soal - 04
// Kalian diminta untuk membuat fungsi yang mana nantinya akan mencetak sebuah piramida alfabet, fungsi tersebut memiliki spesifikasi sebagai berikut:

// fungsi harus ditulis menggunakan recursive

// ia memiliki 2 parameter:
// tipe data yang dimiliki keduanya adalah Number
// nilai dari 2 parameter tersebut dianjurkan sama

// bentuk segitiga dapat kalian cetak menggunakan console.log didalam fungsi trianglePattern

// kalian hanya diperbolehkan untuk membuat "1 BUAH TRADITIONAL LOOP", hal ini untuk mempermudah kalian dalam proses penyelesaian tugas.

// akan tetapi kalian juga diperbolehkan untuk menyelesaikan soal ini tanpa menggunakan traditional loop
function trianglePattern(num1, num2) {
    if (num1 === 0) {
        return "";
    }
    let space = "";
    for (let i = 0; i < num2; i++) {
        if (i < num1 - 1) {
            space = space +  " "
        } else {
            space += String.fromCharCode(64 + (num2 - num1 + (i - num1) + 2));
        }
    }
    console.log(space);
    trianglePattern(num1 - 1, num2);
}

const first = 5;
const second = 3;
const third = 2;

trianglePattern(first, first);
trianglePattern(second, second);
trianglePattern(third, third);

// Ekspektation output :
// // FIRST
// "    A"
// "   BC"
// "  CDE"
// " DEFG"
// "EFGHI"
// // SECOND
// "  A"
// " BC"
// "CDE"
// // THRID
// "   A"
// "  BC"
// " CDE"
// "DEFG"