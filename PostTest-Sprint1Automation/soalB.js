//Program beli barang elektronik
/* 
1. buat array untuk menyimpan data brg elektronik, isi dgn 5 jenis barnag
2. terdiri dari: nama, jumlah, harga barang, dan discount
3. bila nama barang yang diinput tidak ada dalam array akan muncul pesan
4. discount berubah sesuai inputan
*/

var barang=[];
barang=[
    {
        namaBarang:"komputer"
        jumlah:2
        harga:1000000
        discount: 8000000
        Total:
    }
    ]
function tambahBuku(){
    var jmlSlotRakBuku=5;
    var noBuku=1
    while(noBuku<=jmlSlotRakBuku){
        var tambah=prompt('Masukkan nama buku ke-' + noBuku + ':')
        buku.push(tambah);  //menambah data inputan ke array "buku"
        noBuku++;
    }
}
var dataBarang=[];
document.write(dataBarang);
document.write('<br>');