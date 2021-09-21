// contoh expression function (harus ada nilai balik)
var penjumlahan=function(angka1,angka2){
    var hasil=angka1+angka2
    // hasil=angka1+angka2
    return hasil
}
document.write(penjumlahan(1,2))

var penjumlahan=function(bil1,bil2){
    return bil1+bil2
}
document.write(penjumlahan(5,6) + '<br')

// contoh declaration function
function tambah(a,b){
    return a+b;
}
document.write(tambah(1,2) + '<br')
 
function cetak (a,b){
    document.write('Tagihan pertama= Rp ' +a+'<br>')
    document.write('Tagihan kedua= Rp ' +b+'<br>')
}
cetak('3.000.000','4.000.0000')

// contoh object
var academia={
    // property
    nama:"Qolby",
    kelas:12,
    jurusan:"ips",

    // method
    getName: function(){
        document.write('Nama saya adalah '+this.nama)
    },
    getKelas: function(){
        document.write('Kelas saya di kelas '+this.kelas)
    },
};
// academia.getKelas;
// constructor
function academia(nama,kelas){
    this.nama=nama;
    this.kelas=kelas;
}
var academia=new academia('qolby',12)