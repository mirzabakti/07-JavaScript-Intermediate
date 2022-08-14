//NO 1
// const obj = {
//     fun1: function() {
//       console.log("fun1", this);
//     },
//     fun2: () => {
//       console.log("fun2", this);
//     }
//   };
  
//   obj.fun1();
//   obj.fun2();

// ANALISA:
/* Yang terjadi saat dijalankan adalah adalah pemanggilan object.fun1() akan menghasilkan output  fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }, sedangkan pemanggilan object.fun2() akan menghasilkan fun2 {} alias this tidak dapat memanggil sehingga isinya kosong, hal ini tentu saja membuat fun1 dan fun2 hasilnya berbeda, dan mengapa bisa berbeda hasilnya adalah dikarenakan fun2 menggunakan arrow function yang tidak bisa digunakan sebagai sebuah method dan this juga tidak support dengan arrow functions, sedangkan traditional function seperti pada fun1 dapat digunakan sebagai method dan this juga support untuk digunakan pada function ini
*/

//NO 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/*Ecapsulation yaitu merupakan sebuah proses pengelompokan property & method serta memberikan hak akses kepada property & method yang menyebabkan property hanya dapat diakses melalui method accessor dan tidak dapat di rubah tanpa melalui prosedur yang seharusnya yang diatur pada method mutator.
Di dalam OOP encapsulation berbentuk “class” yang terdiri dari property & method yang mempunyai hak akses tertentu terhadap environment / lingkungannya, yang biasa disebut Acces Modifier.
Acces modifier terdiri dari tiga jenis yaitu private, protected, & public*/
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/*Dimana kita membuat sebuah ringkasan dari kesuluruhan kode, yang berisi atau hanya menyajikan informasi penting dan menyembunyikan detailnya, yang dimaksud menyembunyikan detail di sini adalah menyembunyikan latar belakang, implementasi atau mekanisme kerja dari informasi yang disajikan.
Mirip seperti encapsulation tapi berbeda dalam tujuannya, dimana encapsulation lebih berfokus kepada pembungkusan kode sedangkan abstraction berfokus pada penyajian kode.*/
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/*Inheritance atau pewarisan dalam OOP merupakan hubungan dua buah kelas atau lebih. Dalam kasus ini ada kelas yang mempunyai atribut dan metode yang sama dengan kelas yang lain serta metode & atribut tambahan yang merupakan sifat khusus kelas yang menjadi turunanya. Keuntungan kita dari memakai metode pewarisan adalah kita tidak perlu lagi  untuk mengutak atik kode kelas yang memerlukan tambahan metode atau atribut nya saja, dikarenakan kita hanya tinggal membuat kelas turunanya saja tanpa harus mengubah kode kelas dasarnya. */
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*Polymorphism, suatu aksi yang memungkinkan pemrogram menyampaikan pesan tertentu keluar dari hirarki obyeknya, dimana obyek yang berbeda memberikan tanggapan/respon terhadap pesan yang sama sesuai dengan sifat masing-masing obyek.
Atau Polymorphic dapat berarti banyak bentuk, maksudnya yaitu kita dapat menimpa (override), suatu method, yang berasal dari parent class (super class) dimana object tersebut diturunkan, sehingga memiliki kelakuan yang berbeda.
Polymorphism dapat memungkinkan sejumlah kelas memilki metode yang sama. Hal ini adalah perkara yang umum, perkara dimana derive class mempunyai metode yang sama dengan base class.Masalah di atas harus diselesaikan dengan metode virtual serta menggunakan perujukan yang memakai pointer. Dimana perujukan tersebut dapat kita lakukan menggunakan dua buah cara yaitu:
a. menggunakan nama atau early binding atau static binding
b. menggunakan pointer atau late binding atau dynamic binding*/

//NO 3 DONE
class Phone { 
  constructor(brand, storage, ram){
      this.brand = brand;
      this.storage = storage;
      this.ram = ram;
  }

  getBrandName(){
      return this.brand
  }

  setBrandName(lala){
      this.brand = lala
      return this.lala
  }

  printSpecification(){
      return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
  }

  setSpecification(storage, ram){
      this.storage = storage
      this.ram = ram;
      return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

console.log(phone.printSpecification());
phone.setSpecification(32, 2);
console.log(phone.printSpecification());

//NO 4
class Student {
constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
}

getCourseIndex(course) {
    let index = -1;
    for(let i = 0; i < this.courseOfferings.length; i++){
        if (this.courseOfferings[i].course.getSubject() === course.getSubject()){
            index = i;
            break;
        }
    }
    return index;
}

takeNewCourse(course) {
    this.courseOfferings.push(new CourseOffering(course));
    course.decreaseQuota();
}

takeATest(course){
    const index = this.getCourseIndex(course);
    if (this.courseOfferings[index].attendance >= course.getAttendance()) {
        this.courseOfferings[index].grade = Math.floor(Math.random() * 100);
    } else {
        console.log("please fill your absent");
    }
}

courseAttendance(course) {
    const index = this.getCourseIndex(course);
    this.courseOfferings[index].attendance++;
}
}

class CourseOffering {
constructor(course) {
    this.course = course;
    this.attendance = 0;
    this.grade = 0;
}
}

class Course {
constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
}
getSubject() {
    return this.subject;
}
getAttendance() {
    return this.attendance;
}
decreaseQuota() {
    this.quota--;
}
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);


