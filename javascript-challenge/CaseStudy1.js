var x = 5;
var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

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

// function bagi(x,y){
//     return x%y;
// }

function tampil(){
    document.write("Hasil penjumlahan kedua bilangan tsb. adalah= " + jumlah(x,y) + '<br>')
    document.write("Hasil pengurangan kedua bilangan tsb. adalah= " + kurang(x,y) + '<br>')
    document.write("Hasil perkalian kedua bilangan tsb. adalah= " + kali(x,y) + '<br>')
    document.write("Hasil pembagian kedua bilangan tsb. adalah= " + bagi(x,y) + '<br>')
}

tampil()