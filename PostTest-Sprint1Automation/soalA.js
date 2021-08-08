// Program untuk mengelola rak perpustakaan
/* 
1. membuat menu untuk menambah, meminjam, mengembalikan, dan mengganti buku
2. membuat rak dengan muatan 5 buku, dan buat function untuk menambah 5 buku dengan judul bebas
3. buat function jika buku dipinjam, maka slot tersebut akan kosong (undefined)
4. buat function untuk mengembalikan buku sesuai slotnya (yang kosong)
5. buat function untuk mengganti buku yang ada
*/

// menampilkan alert sapaan awal
alert('Selamat datang di Aplikasi Kelola Buku Perpustakaan')

// array untuk menyimpan data buku
let buku=[];

// membuat function untuk menambah 5 buku dengan judul bebas di rak
function tambahBuku(){
    for(noBuku=1;noBuku<=5;noBuku++){
        let tambah=prompt('Masukkan nama buku ke-' + noBuku + ':')
        buku.push(tambah);  // menambah data inputan ke array "buku"
    }
    // let jmlSlotRakBuku=5;
    // let noBuku=1
    // while(noBuku<=5){   // 5 >> jumlah slot rak buku
    //     let tambah=prompt('Masukkan nama buku ke-' + noBuku + ':')
    //     buku.push(tambah);  // menambah data inputan ke array "buku"
    //     noBuku++;
    // }
}

// memanggil function utk menambah data buku ke array buku
tambahBuku()

// menyalin data array "buku" ke "bukuTemp"
let bukuTemp = buku.map(function(i){
    return i
});

// menampilkan data buku yang sudah diinput
buku.forEach(function(e,i){ // e=elemen,i=indeks
    document.write((i+1) + '. Buku ' + '"' + e + '" sudah ditambahkan ke rak buku' + '<br>')   // i+1 biar angka dimulai dari angka 1
});

// notes:
// 1. setelah data tampil, diputuskan utk menggunakan button
// 2. tadinya mau menggunakan confirm, tp confirm lgsg muncul dan data dari array jd ga tampil
// 3. utk mentrigger fungsi pinjam, pakai button

// menampilkan prompt untuk memasukkan no urutan buku
function pinjamBuku(){
    let pinjam=parseInt(prompt('Masukkan buku ke berapa yang ingin anda pinjam:'))
    if(pinjam>0 && pinjam<=5){
        delete bukuTemp[pinjam-1]   // untuk menghapus nomor urutan buku sesuai yg diinput, -1 untuk menyamakan dgn indeks
        // untuk memeriksa nilai boolean
        // alert("Buku tersedia untuk dipinjam")
    }else{
        alert("Maaf, nomor urutan buku yang anda input tidak tersedia")
    }
}

function kembaliBuku(){
    let kembali=parseInt(prompt('Masukkan buku ke berapa yang ingin anda kembalikan :'))
    if(kembali>0 && kembali<=5){
        delete bukuTemp[pinjam-1]   // untuk menghapus nomor urutan buku sesuai yg diinput, -1 untuk menyamakan dgn indeks
        // untuk memeriksa nilai boolean
        // alert("Buku tersedia untuk dipinjam")
    }else{
        alert("Maaf, nomor urutan buku yang anda input tidak tersedia")
    }
}