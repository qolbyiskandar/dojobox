// alert ('test)
// menampilkan tipe data
var namaVariable=true;
document.write(typeof(namaVariable)+'<br>'); //tipe data boolean

// jenis variable
var namaVariable; 
let namaVariable; //let, direkomendasikan utk deklarasi variable
const phi=3.14; //const untuk nilai yang tetap, tidak disarankan dengan prompt krn bisa diassign

// menampilkan nilai default
var namaPengunjung=prompt('Silakan masukkan nama kamu', 'Pengunjung');
document.write('Hai ' + namaPengunjung + ', selamat datang'); //tipe data:boolean

// menampilkan popup confirm
var konfirmasi=confirm('apakah anda ingin mengakhiri kelas ini?');
var hasil=(konfirmasi==true)? 'iya dong' : 'ga deh';
document.write(hasil + '<br>')

// contoh penggunaan if saja
var angka=parseInt(prompt('masukkan angka: '));
if(angka>10){
    document.write("bilangan yang dimasukkan lebih dari 10")    
}

// contoh penggunaan if else
var nama=prompt('masukkan nama: ', 'Nama pengunjung');
if(nama=='qolby'){
    document.write("seorang murid");
} else {
    document.write("nama yang diinput bukan qolby")
}

// contoh penggunaan nested if
var angka=parseInt(prompt('masukkan angka: '));
if(nilai%2==0){
    document.write(nilai + " merupakan bilangan genap")    
}else if(nilai%2==1){
    document.write(nilai + " merupakan bilangan ganjil")    
}else
    document.write(nilai + " bukan bilangan")

// contoh penggunaan switch case
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
}

// contoh penggunaan looping

// contoh sederhana for
for(var i=1;i<=10;i++){
    document.write('haii'+'<br>')
}

// contoh sederhana while
var i=0;
while(i<=10){
    document.write('halo '+ i + '<br>');
    i +=1; // bebas penempatannya
}
// untuk hasil endless tanpa var i=0
// var ulang = confirm('ulang lagi?')

// keterangan:
/*
1. for untuk perulangan yg sdh diketahui sampai berapa perulangannya
2. while lebih cocok utk looping yg tdk tau loopingnya bakal smpe brp
contoh: buat perulangan dmn perulangan akan berhenti jika hasil penjumlahan adalah 100
kalo masih diluar 100, perulangan ttp jalan, smpe kondisinya true
3. do while utk perulangan yg ngelakuin suatu hal dulu sebelum memeriksa kondisi tsb
contoh: bila noBuku <= 5, do while akan ttp menampilkan meskipun noBukunya 9, tp setelahnya ketika mengulang lg harusnya <= 5
maka do while akan berhenti dan melakukan perulangan hanya 1x
*/

//aplikasi info data siswa dengan TA
//while
var no=1;
while(no<=5){
    document.write("Nomor induk 1-" + no + " TA-nya adalah Vista" + "<br>")
    no+=1;
}
//for
for(var i=6;i<=10;i++){
    document.write("Nomor induk 2-" + i + " TA-nya adalah Intan" + "<br>")
}

// contoh aplikasi info data siswa dengan nama TA (versi mas andika)
var jmlSiswa=10;
var noSiswa=1;
var memberTeam=5;

while(noSiswa<=memberTeam){
    document.write("siswa dengan nomor induk 1-" + noSiswa + " adalah member TA Vista" + '<br>');
    noSiswa++;
}

for(var noSiswa=6; noSiswa<=jmlSiswa; noSiswa++){
    document.write("siswa dengan nomor induk 2-" + noSiswa + " adalah member TA Intan" + '<br>');
}

// contoh penggunaan array
var buah=[];
buah=['apel','belimbing','pisang']

document.write('<br>')
document.write(typeof(buah)+'<br>') //tipe data buah
document.write(buah) //nampilin array buah
document.write('<br>')
document.write(buah.length) //nampilin panjang data array buah
document.write('<br>')
document.write(buah[1]) //nampilin indeks 1 dari array buah
document.write('<br>')

// define fungsi untuk myArr
var iniFungsi=function(){
    alert('Hai!')
}

var myArr=['teks',123,true,iniFungsi,[1,2,3,4]]
document.write('<br>')
document.write(myArr[4][1]) //akses indeks 1 di indeks ke-4 myArr
document.write('<br>')

var myArr2=[]
myArr[0]='senin';
myArr[1]='selasa';
//myArr[2]=empty;   terdefinisi empty
myArr[3]='kamis';

myArr[3]=undefined; //menghapus indeks/menjadikannya undefined
myArr[2]='rabu';   //mengupdate indeks

// method array

var buah=[];
buah=['apel','belimbing','pisang']
document.write(buah)
// join untuk menggabungkan isi array menjadi string dgn separator
document.write(buah.join('-'))
document.write('<br>'+'<br>')
// push = menambah elemen diakhir array
buah.push('durian')
document.write(buah.join('<br>'))
// pop = menghapus elemen diakhir array
document.write('<br>'+'<br>')
buah.pop()
document.write(buah.join('<br>'))
// unshift = menambah elemen diawal array
document.write('<br>'+'<br>')
buah.unshift('durian')
document.write(buah.join('<br>'))
// shift = menghapus elemen diawal array
document.write('<br>'+'<br>')
buah.shift()
document.write(buah.join('<br>'))
// splice = menyisipkan elemen array (indeks awal yg ingin disisipkan, jmlh hapus, elemen baru)
document.write('<br>'+'<br>')
buah.splice(2,0,'melon','anggur')   //0 jumlah hapus, melon dan anggur itu elemen yang disisipkan
document.write(buah.join('<br>'))
// slice = mengambil elemen array (indeks yg ingin diambil, indeks akhir yg tdk diikutkan)
document.write('<br>'+'<br>')
var newBuah=buah.slice(1,3)
document.write(newBuah.join('<br>')) //panggil var newBuah

document.write('<br>'+'<br>')

// contoh penggunaan forEach (untuk tidak mengembalikan array)
buah.forEach(function(e,i){ //e=elemen,i=indeks
    document.write((i+1) + '. ' + e + '<br>')   
    //i+1 biar angka dimulai dari angka 1
});

// contoh penggunaan map (mengembalikan array)
var buahBaru=buah.map(function(e,i){
    return e + ' enak dimakan'    
});

document.write('<br>')
document.write('<br>')

document.write(buahBaru.join('<br>'))

// tambahan:
/*
1. filter    = kalo gaada nilai yg cocok, ga munculin apa2 atau namaArray=[]
2. find      = munculin undefined kalo nilainya ga cocok
*/