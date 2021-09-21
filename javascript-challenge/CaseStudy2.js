function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */
    // var nilai = parseInt(prompt("Masukkan nilai kamu : ", "0-100"));
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

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/

nilaiPeserta(5) + '<br>'
nilaiPeserta(60.5) + '<br>'
nilaiPeserta(39.5) + '<br>'
nilaiPeserta(50) + '<br>'
nilaiPeserta(101) + '<br>'