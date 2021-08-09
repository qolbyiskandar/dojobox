//Program beli barang elektronik
/* 
1. buat array untuk menyimpan data brg elektronik, isi dgn 5 jenis barnag
2. terdiri dari: nama, jumlah, harga barang, dan discount
3. bila nama barang yang diinput tidak ada dalam array akan muncul pesan
4. discount berubah sesuai inputan
*/

var barang=[{}];
// barang=[
//     {
//         namaBarang:"komputer"
//         jumlah:2
//         harga:1000000
//         discount: 8000000
//         Total:
//     }
//     ]
function tambahBarang(){
    for(noBarang=1;noBarang<=5;noBarang++){
        let nama=prompt('Masukkan nama barang ke-' + noBarang + ':')
        let jumlah=parseInt(prompt('Masukkan jumlah ' + nama + ':'))
        let harga=parseInt(prompt('Masukkan harga satuan ' + nama + ':'))
        let discount=prompt('Masukkan diskon yang ingin diterapkan :')
        barang.push(tambah);  // menambah data inputan ke array "buku"
    }
