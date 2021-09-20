/* var volA=parseInt(prompt('masukkan sisi a:'))
var volB=parseInt(prompt('masukkan sisi b:'))

document.write('sisi a adalah ' + volA);
document.write('sisi b adalah ' + volB);


// di function, parameter dengan pas di return bisa berbeda 
function volume(a,b){
    var volA;
    volA=a*a*a;
    var volB;
    volB=b*b*b;

    var total=volA+volB
    return total;
    
} */

//expression function
// var penjumlahan=function(angka1,angka2){
//     var hasil=angka1+angka2
//     //hasil=angka1+angka2
//     return hasil
// }
// document.write(penjumlahan(1,2))

/* function cetak (a,b){
    document.write('Tagihan pertama= Rp ' +a+'<br>')
    document.write('Tagihan kedua= Rp ' +b+'<br>')
}
cetak('3.000.000','4.000.0000') */

//object
var academia={
    //property
    nama:"Qolby",
    kelas:12,
    jurusan:"ips",

    //method
    getName: function(){
        document.write('Nama saya adalah '+this.nama)
    },
    getKelas: function(){
        document.write('Kelas saya di kelas '+this.kelas)
    },
};
//academia.getKelas;

function academia(nama,kelas){
    this.nama=nama;
    this.kelas=kelas;
}
var academia=new academia('qolby',12)