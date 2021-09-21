// 3 Agustus 2021

// alert('test');
// menampilkan hasil dari penjumlahan bilangan 1 dan 2
var bilangan1= parseInt(prompt('Masukkan bilangan kesatu: '));
var bilangan2= parseInt(prompt('Masukkan bilangan kedua: '));
var hasil= bilangan1+bilangan2;
document.write('Hasil dari penjumlahan kedua bilangan tersebut adalah ' + hasil);

// menampilkan nilai untuk keputusan kelulusan
var nilai=parseInt(prompt('Masukkan nilai anda= '));
var keputusan=(nilai>75)? 'lulus':'ulang';
document.write(keputusan);

// menampilkan macam-macam logika boolean
var a=parseInt(prompt('Masukkan angka kesatu= '));
var b=parseInt(prompt('Masukkan angka kesatu= '));

document.write('Angka kesatu yang anda input adalah ' + a + '<br>');
document.write('Angka kedua yang anda input adalah ' + b + '<br>');

document.write('Pernyataan kesatu: Apakah angka kesatu lebih besar dari angka kedua? ' + (a>b) + '<br>');
document.write('Pernyataan kedua: Apakah angka kesatu lebih kecil dari angka kedua? ' + (a<b) + '<br>');

document.write('Pernyataan kesatu && Pernyataan kedua : ' + ((a>b)&&(a<b)) + '<br>');
document.write('Pernyataan kesatu || Pernyataan kedua : ' + ((a>b)||(a<b)) + '<br>');
document.write('Negasi dari pernyataan kesatu : ' + !(a>b) + '<br>');

// menentukan nilai peringkat dari data yang diinput
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

// ======================================================

// 4 Agustus 2021

// Aplikasi info data siswa dengan nama TA
// while
var no=1;
while(no<=5){
    document.write("Nomor induk 1-" + no + " TA-nya adalah Vista" + '<br>')
    no+=1;
}
// for
for(var i=6;i<=10;i++){
    document.write("Nomor induk 2-" + i + " TA-nya adalah Intan" + '<br>')
}

// menghitung volume kubus
var sisiA=parseInt(prompt('masukkan sisi kubus a:'))
var sisiB=parseInt(prompt('masukkan sisi kubus b:'))

function volumeKubus(sisi){
    var volume=sisi*sisi*sisi
    return volume
}

// di function, parameter dengan pas di return bisa berbeda 
function jumlahVolumeKubus(a,b){
    var volumeKubusA=a*a*a
    var volumeKubusB=b*b*b
    var total=a+b

    return total
}
 
document.write('Sisi kubus A adalah ' + sisiA + '<br>');
document.write('Sisi kubus B adalah ' + sisiB + '<br>');
document.write('Volume kubus A adalah ' + volumeKubus(sisiA)+'<br>');
document.write('Volume kubus B adalah ' + volumeKubus(sisiB)+'<br>');
document.write('Jumlah volume dua kubus: '+jumlahVolumeKubus(volumeKubus(sisiA),volumeKubus(sisiB))+'<br>')

// ======================================================

