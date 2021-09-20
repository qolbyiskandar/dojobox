// Qolby Azizah
// Case Study 1
var x = 5;
var y = 8.5;

function jumlah(x,y){
    return x+y;
}
function kurang(x,y){
    return x-y;
}
function kali(x,y){
    return x*y;
}
function bagi(x,y){
    return x/y;
}

function tampil(){
    document.write("Hasil penjumlahan kedua bilangan tsb. adalah= " + jumlah(x,y) + '<br>')
    document.write("Hasil pengurangan kedua bilangan tsb. adalah= " + kurang(x,y) + '<br>')
    document.write("Hasil perkalian kedua bilangan tsb. adalah= " + kali(x,y) + '<br>')
    document.write("Hasil pembagian kedua bilangan tsb. adalah= " + bagi(x,y) + '<br>')
}
tampil()

//**************************************************
// Case Study 2
function nilaiPeserta (nilai) {
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
*/

(nilaiPeserta(5) + '<br>')
(nilaiPeserta(60.5) + '<br>')
(nilaiPeserta(39.5) + '<br>')
(nilaiPeserta(50) + '<br>')
(nilaiPeserta(101) + '<br>')