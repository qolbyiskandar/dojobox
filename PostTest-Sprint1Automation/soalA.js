//Program untuk mengelola rak perpustakaan
/* 
1. membuat menu untuk menambah, meminjam, mengembalikan, dan mengganti buku
2. membuat rak dengan muatan 5 buku, dan buat function untuk menambah 5 buku dengan judul bebas
3. buat function jika buku dipinjam, maka slot tersebut akan kosong (undefined)
4. buat function untuk mengembalikan buku sesuai slotnya (yang kosong)
5. buat function untuk mengganti buku yang ada
*/

//membuat function untuk menambah 5 buku dengan judul bebas di rak
alert('Selamat datang di Aplikasi Kelola Buku Perpustakaan')

function tambahBuku(){
    var buku=[];
    var jmlSlotRakBuku=5;
    var noBuku=1
    while(noBuku<=jmlSlotRakBuku){
        var tambah=prompt('Masukkan nama buku ke-' +noBuku+ ':')
        document.write(noBuku + ". " + "Buku "+ '"' + tambah + '"' + " sudah ditambahkan ke rak buku"+'<br>')
        buku.push(tambah);
        noBuku++; 
    }
}

tambahBuku()
document.write(buku)

function pinjam(){
     
}
