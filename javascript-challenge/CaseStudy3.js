function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */
       switch(true){
        case (nilai >= 80 && nilai <= 100):
            document.write('Selamat kamu mendapat nilai A!')
            break
        case (nilai >= 60 && nilai <= 80):
            document.write('Tingkatkan ya! nilai kamu adalah B')
            break
        case (nilai >= 40 && nilai <= 60):
            document.write('Wah, teruskan semangat belajarmu, kamu mendapat nilai C')
            break
        case (nilai >= 20 && nilai <= 40):
            document.write('Jangan sedih karena kamu mendapat nilai D, semangat!')
            break
        case (nilai >= 0 && nilai <= 20):
            document.write('Sayang sekali nilaimu adalah E, belajar terus ya!')
            break
        default:
            document.write('Mohon maaf data yang kamu input salah atau tidak sesuai dengan range')
}
}

// array dataSiswa
var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(nilai)],
    ["Andika", 70.1, nilaiPeserta(nilai)],
    ["Alif", 19, nilaiPeserta(nilai)],
    ["Vista", 102, nilaiPeserta(nilai)]
];

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.
// dataSiswa.forEach(function(i){ // e=elemen,i=indeks
//     document.write((i+1) + '.' + dataSiswa. + ', ' + '<br>')   // i+1 biar angka dimulai dari angka 1
// });
dataSiswa