// 1. Apa itu synchronous?
/* Melakukan satu operasi di satu waktu, sehingga code dieksekusi secara berurutan dari atas ke bawah layaknya sebuah antrian*/

// 2. Apa itu asynchronous?
/* Code akan dieksekusi tanpa menunggu eksekusi code lain selesai sehingga seakan-akan dieksekusi secara bersamaan. */

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
/* Bisa */

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/*
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  6
second log:  6
second log:  6
second log:  6
second log:  6
 */

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
/*terjadinya ketidak samaan hasil output dikarenakan i dideklarasi dengan menggunakan var yang sehingga i menjadi bersifat global dan proses second log berjalan setelah i diubah oleh proses first log*/

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
//   }

for (let i = 1; i <= 5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
