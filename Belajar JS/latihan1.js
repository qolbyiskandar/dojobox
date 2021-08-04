alert('selamat datang di kelas ini');

//untuk memasukkan nama
var nama=prompt('masukan nama kamu= ');
document.write('Selamat datang kak ' + nama + '<br>'); //nampilin di document dari nama yang diinput
document.write('Silakan belajar dengan penuh semangat!' + '<br>');

/* 
untuk menginput angka dengan mengubah string ke int pake parseInt
var bil1 = parseInt(prompt('masukkan bilangan ke pertama'));
var bil2 = parseInt(prompt('masukkan bilangan kedua')); 
*/

//document.write(5+5 + '<br>');

//deklarasi bilangan
var bil1 = 10;
var bil2 = 20;
var bil3 = bil1+bil2;

//document.write('Hasil penjumlahan kedua bilangan adalah: ' +  + '<br>');

//nampilin di dokumen index.html, bilangan tadi yang udh dideklar
document.write('Bilangan pertama adalah ' + bil1 + '<br>');
document.write('Bilangan kedua adalah ' + bil2 + '<br>');

//cek boolean
document.write((bil1>bil2) + '<br>'); //false
document.write((bil1<bil2) + '<br>'); //true

//cek logika boolean
document.write((bil1<bil2 || bil1>bil2) + '<br>'); //or:true
document.write((bil1<bil2 && bil1>bil2) + '<br>'); //and:false
document.write(!(bil1<bil2) + '<br>'); //negasi:false

//if kondisional
var nilai=60;
var lulus = (nilai>70)? 'lulus':'ulang';
document.write(lulus);

//confirm
var konfirmasi=confirm('apakah anda ingin mengakhiri kelas ini?');
document.write(konfirmasi + '<br>')

/* 
cara menampilkan alert/pop up:
alert >> menampilkan 1 modal
prompt >> bisa memasukkan nilai dari variabel dan nilai defaultnya string hasilnya
confirm >> hasilnya boolean
 */