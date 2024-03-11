// Membuat Variabel
document.writeln("Membuat variabel: <br>")
var fullName = "Hilmi Mughid";
document.write(fullName);

// Mengubah Nilai Variabel
document.writeln("<br><br> Mengubah nila variabel Hilmi Mughid ke Charles Babbage: <br>")
var fullName2 = "Hilmi Mughid";
fullName2 = "Charles Babbage";
document.write(fullName2);

// Variabel let
document.writeln("<br><br> Menggunakan variabel let: <br>")
let fullName3 = "Hilmi Mughid";
fullName3 = "Charles Babbage";
document.write(fullName3);

// Variabel const
document.writeln("<br><br> Menggunakan variabel const: <br>")
const fullName4 = "Hilmi Mughind";
document.write(fullName4);

// Contoh Masalah Menggunakan Variabel var
document.writeln("<br><br> Contoh Masalah Menggunakan Variabel var: <br>")
var x = 10;
if (true) {
    var x = 20;
    document.writeln("Nilai x di dalam blok: ", x, "<br>"); // Output: 20
}
document.writeln("Nilai x di luar blok:", x); // Output: 20

// Solusi Masalah Dengan Variabel let
document.writeln("<br><br> Solusi Masalah Dengan Variabel let: <br>")
let y = 10;
if (true) {
    let y = 20;
    document.writeln("Nilai y di dalam blok:", y, "<br>"); // Output: 20
}
document.writeln("Nilai y di luar blok:", y); // Output: 10

// Tipe Data number
document.writeln("<br><br> Tipe Data number: <br>")
let bulat = 25;
let desimal = 25.2;
document.writeln("Bilangan bulat: ", bulat, "<br>");
document.writeln("Bilangan desimal: ", desimal, "<br>");
document.writeln("Hasil Penjumlahan bulat + desimal = ", bulat + desimal);

// Contoh Kasus Infinity dan Nan
document.writeln("<br><br> Contoh Kasus Infinity dan NaN: <br>")
let bulat2 = 25;
let string = "a";
document.writeln("25/a = ", bulat2/0, '<br>'); // Output Infinity
document.writeln("a/5", string/5) // Output NaN

// Tipe Data Bigint
document.writeln("<br><br> Tipe Data Bigint: <br>")
let bulat3 = 123456789987654321n
document.writeln(bulat3)

// Tipe Data String
document.writeln("<br><br> Tipe Data String: <br>")
let text = "Arkatama";
document.writeln(text);

// Tipe Data Boolean
document.writeln("<br><br> Tipe Data Boolean: <br>")
let perbandingan = 15 > 9;
document.writeln("15 > 9 = ", perbandingan);

// Tipe Data undefined
document.writeln("<br><br> Tipe Data undefined: <br>")
let undefineds;
document.writeln(undefineds);

// // Tipe Data null
document.writeln("<br><br> Tipe Data null: <br>")
let nulls;
document.writeln(nulls);

// Tipe Data symbol
console.log("Tipe Data symbol:");
let nama = Symbol("Hilmi");
console.log(nama);
console.log(nama.description);

// Tipe Data object
document.writeln("<br><br> Tipe Data object: <br>")
let employee = {
    name: "Hilmi",
    age: 20,
    job: "Fullstack Web Developer",
    isMarried: false
}
document.write('My name is ' + employee.name+ ' and he is ' + employee.age + ' years old');

// Konversi Tipe Data String
let value = false;
let strings = String(value);
alert(typeof value);

// Konversi Tipe Data numeric
let strings2 = "123";
let number2 = Number("123");
alert(typeof nbr);

// Konversi Tipe Data Boolean
alert(Boolean(0));
alert(Boolean(1));

// Operator Aritmatika
document.writeln("<br><br> Operator Aritmatika: <br>")
let a = 3;
let b = 5;
document.writeln("3 + 5 = ", a + b, "<br>");
document.writeln("3 - 5 = ", a - b, "<br>");
document.writeln("3 * 5 = ", a * b, "<br>");
document.writeln("3 ** 5 = ", a ** b, "<br>");
document.writeln("3 / 5 = ", a / b, "<br>");
document.writeln("3 % 5 = ", a % b, "<br>");

// Operator Perbandingan
document.writeln("<br><br> Operator Perbandingan: <br>")
let c = 3;
let d = 5;
document.writeln("3 == 5 = ", c == d, "<br>");
document.writeln("3 < 5 = ", c < d, "<br>");
document.writeln("3 > 5 = ", c > d, "<br>");
document.writeln("3 != 5 = ", c != d, "<br>");

// Operator Logika
document.writeln("<br><br> Operator Logika: <br>")
let e = 3;
let f = 5;
document.writeln("3 && 5 = ", e && f, "<br>");
document.writeln("3 || 5 = ", e || f, "<br>");
document.writeln("!3 = ", !e, "<br>");

// Operator Bitwise
document.writeln("<br><br> Operator Bitwise: <br>")
let g = 3;
let h = 5;
document.writeln("3 & 5 = ", g & h, "<br>");
document.writeln("3 | 5 = ", g | h, "<br>");
document.writeln("3 ^ 5 = ", g ^ h, "<br>");
document.writeln("3 ~ 5 = ", ~g, "<br>");

// Operator Ternary
document.writeln("<br><br> Operator Ternary: <br>")
let i = 3;
let j = 5;
document.writeln(i == j ? 'sama' : 'tidak sama');

// Pop up Alert
alert("Halo Saya Hilmi");

// Pop up Prompt
let prompts = prompt("Apakah 1 > 3?");
alert("Jawaban Anda" + prompts);

// Pop up Confirm
let confirms = confirm("Apakah 1 > 3?");
confirms ? alert("Benar") : alert('Salah');

// Percabangan if
let strings3 = confirm("Apakah 1 > 3?");
if (strings3) {
    alert("Benar")
};

// Percabangan if else
let strings4 = confirm("Apakah 1 > 3?");
if (strings4) {
    alert("Benar")
}else {
    alert("Salah")
};

// Percabangan else if
let strings5 = prompt("1 + 1 ?");
if (strings5 = 2) {
    alert("Benar")
}else if (strings5 > 2) {
    alert("Jawaban Anda Kelebihan")
} else if (strings5 < 2) {
    alert("Jawaban Anda Kurang")
} else {
    alert("Jawaban Anda Salah")
}

// Percabangan Switch
let warna = "biru";
switch (warna) {
    case "merah":
        alert("Aku suka merah")
        break;
    case "biru":
        alert("Aku suka biru")
        break;
    default:
        alert("Aku tidak tahu")
        break;
}

// Perulangan for
document.writeln("<br><br> Perulangan for 4 kali: <br>")
for (let i=1; i<5; i++) {
    document.writeln(i);
    document.writeln("<br>");
}

// Perulangan while
document.writeln("<br><br> Perulangan while 4 kali: <br>")
let k = 1;
while (k<5) {
    document.writeln(k);
    document.writeln("<br>");
    k++
}

// Perulangan do while
document.writeln("<br><br> Perulangan do while 4 kali: <br>")
let m = 1;
do {
    document.writeln(m);
    document.writeln("<br>");
    m++;
} while (m<5)

// Loop Control break
document.writeln("<br><br> Loop Control break pada perulangan 4 kali: <br>")
for (let i=1; i<5; i++) {
    if (i == 3) {
        break
    }
    document.writeln(i);
    document.writeln("<br>");
}

// Loop Control continue
document.writeln("<br><br> Loop Control continue pada perulangan 4 kali: <br>")
for (let i=1; i<5; i++) {
    if (i == 3) {
        continue
    }
    document.writeln(i);
    document.writeln("<br>");
}