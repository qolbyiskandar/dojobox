//cek tipe data
/*
 var namaVariable=true;
 document.write(typeof(namaVariable)+'<br>'); //tipe data boolean
*/

//nilai default
/*
var namaPengunjung=prompt('Silakan masukkan nama kamu', 'Pengunjung');
document.write('Hai ' + namaPengunjung + ', selamat datang); //tipe data:boolean
*/

//menampilkan popup confirm
/* 
var konfirmasi=confirm('apakah anda ingin mengakhiri kelas ini?');
var hasil=(konfirmasi==true)? 'iya dong' : 'ga deh';
document.write(hasil)
*/

//penggunaan if
/*
var angka=parseInt(prompt('masukkan angka: '));
if(angka>10){
    document.write("bilangan yang dimasukkan lebih dari 10")    
}
*/

//penggunaan if else
/*
var nama=prompt('masukkan nama: ', nama pengunjung);
if(nama=='qolby'){
    document.write("seorang murid");
} else {
    document.write("nama yang diinput bukan qolby")
}
*/

//penggunaan nested if
/*
var angka=parseInt(prompt('masukkan angka: '));
if(nilai%2==0){
    document.write(nilai + " merupakan bil genap")    
}else if(nilai%2==1){
    document.write(nilai + " merupakan bil ganjil")    
}else
    document.write(nilai + " bukan bilangan")    
*/

//penggunaan switch case
/* 
var nilaiKepuasaan = parseInt(prompt("masukkan nilai kepuasaan kamu", "masukkan 0-5"));
switch(nilaiKepuasaan){
    case 0:
        document.write('saya sangat kecewa')
        break
    case 1:
        document.write('saya kecewa')
        break
    case 2:
        document.write('saya tidak puas')
        break
    case 3:
        document.write('saya agak puas')
        break
    case 4:
        document.write('saya cukup puas')
        break
    case 5:
        document.write('saya terkesan')
        break
    default:
        document.write('tolong masukan angka sesuai range')
} */

//penggunaan switch case (case menampilkan grade)
var grade = parseInt(prompt("masukkan nilai kamu", "0-100"));
switch(true){
    case (grade >= 90):
        document.write('Peringkat kamu adalah A')
        break
    case (grade >= 80):
        document.write('Peringkat kamu adalah B')
        break
    case (grade >= 70):
        document.write('Peringkat kamu adalah C')
        break
    case (grade >= 60):
        document.write('Peringkat kamu adalah D')
        break
    default:
        document.write('Peringkat kamu adalah E')
}
