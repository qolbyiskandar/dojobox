// var bilangan1= parseInt(prompt('Masukkan bilangan kesatu: '));
// var bilangan2= parseInt(prompt('Masukkan bilangan kesatu: '));
// var hasil= parseInt(bilangan1+bilangan2);
// document.write('Hasil dari penjumlahan kedua bilangan tersebut adalah ' + hasil);

// function sayHello(){
//     alert("Hello!");
// }

// function pinjamBuku(){
//     var konfirmasiPinjam=confirm('Apakah anda ingin meminjam buku?');
//     var hasil=(konfirmasiPinjam==true)? 'iya dong' : 'ga deh';
//     document.write(hasil + '<br>')
// }

//buat menu
// var menu=prompt('silahkan pilih menu yang tersedia', '1=luas, 2=keliling')
// if(menu==1){
//     //mengoperasikan menu luas
//     //bikin sub menu bangun datar untuk menu luas
//     alert('Anda telah memilih menu luas')
//     var menuLuas=prompt('Masukkan bangun datar yang akan dihitung luasnya: ', '1=persegi, 2=persegi panjang, 3=segitiga, 4=lingkaran')
//     if(menuLuas==1){
//         //luas persegi
//         hitungLuasPersegi()
//     }else if(menuLuas==2){
//         //luas persegi panjang
//         hitungLuasPersegiPanjang()
//     }else if(menuLuas==3){
//         //luas segitiga
//         hitungLuasSegitiga()
//     }else if(menuLuas==4){
//         //luas lingkaran
//         hitungLingkaran()
//     }else{
//         alert("Maaf angkaan salah")
//     }
// }else if(menu==2){
//     //mengoperasikan menu keliling
//     //bikin sub menu bangun datar untuk menu keliling
//     alert('Anda telah memilih menu keliling')
//     var menuKeliling=prompt('Masukkan bangun datar yang akan dihitung kelilingnya: ', '1=persegi, 2=persegi panjang, 3=segitiga, 4=lingkaran')
//     if(menuKeliling==1){
//         //keliling persegi
//         hitungKelilingPersegi()
//     }else if(menuKeliling==2){
//         //keliling persegi panjang
//         hitungKelilingPersegiPanjang()
//     }else if(menuKeliling==3){
//         //keliling segitiga
//         hitungKelilingSegitiga()
//     }else if(menuKeliling==4){
//         //keliling lingkaran
//         hitungKelilingLingkaran()
//     }else{
//         alert("Maaf angkaan salah")
//     }
// }else{
//     document.write('maaf menu yang anda pilih tidak sesuai' + '<br>')
// }



// function luasPersegi(sisi){
//     var luas=sisi*sisi
//     //document.write('Luas segi empat = ' + luas)
//     return luas
// }

// function luasPersegiPanjang(p,l){
//     var luas=p*l
//     //document.write('Luas persegi panjang = ' + luas)
//     return luas
// }

// function luasSegitiga(alas,tinggi){
//     var luas=0.5*alas*tinggi
//     return luas;
// }

// function luasLingkaran(r){
//     var luas=2*3.14*r;
//     return luas;
// }

// var kelilingPersegi=function(sisi){
//     //return sisi+sisi+sisi;
//     return sisi*4;
// }

// var kelilingPersegiPanjang=function(p,l){
//     return 2*(p+l)
// }

// var kelilingSegitiga=function(alas, tinggi, sisimiring){
//     return alas+tinggi+sisimiring
// }

// var kelilingLingkaran=function(r){
//     return 2*3.14*r
// }


// //angka-output

// //luas
// //persegi (1 variable)
// function hitungLuasPersegi(){
//     var persegi=parseInt(prompt('Masukkan sisi persegi: '))
//     var luas=luasPersegi(persegi)

//     document.write('Luas Persegi adalah ' + luas)
// }
// //persegi panjang (2 variable)
// function hitungLuasPersegiPanjang(){
//     var panjang=parseInt(prompt('Masukkan panjang dari persegi panjang: '))
//     var lebar=parseInt(prompt('Masukkan lebar dari persegi panjang: '))
//     var luas=luasPersegiPanjang(panjang,lebar)

//     document.write('Luas Persegi Panjang adalah ' + luas)
// }
// //segitiga (3 variable)
// function hitungLuasSegitiga(){
//     var alas=parseInt(prompt('Masukkan alas segitiga: '))
//     var tinggi=parseInt(prompt('Masukkan tinggi segitiga: '))
//     var luas=luasSegitiga(alas, tinggi)

//     document.write('Luas Segitiga adalah ' + luas)
// }
// //lingkaran (1 variable)
// function hitungLingkaran(){
//     var r=parseInt(prompt('Masukkan jari-jari lingkaran: '))
//     var luas=luasLingkaran(r)

//     document.write('Luas lingkaran adalah ' + luas)
// }

// //keliling
// //persegi
// function hitungKelilingPersegi(){
//     var persegi=parseInt(prompt('Masukkan sisi persegi: '))
//     var keliling=kelilingPersegi(persegi)

//     document.write('Keliling Persegi adalah ' + keliling)
// }
// //persegi panjang
// //segitiga1
// //lingkaran

/*Buatlah sebuah fungsi dengan ketetuan
1. Jika user mengangkakan "mentor" maka mencetak isi array [Akhmad, Alif, Andika, Jojo]
2. Jika user mengangkakan "ta" maka mencetak isi array [Adib, Valen, Vista]
3. Jika user mengangkakan "Admin" maka mencetak isi array [Aura, Cahya]*/

// var dojobox=[
//     [akhmad, alif, andika, jojo],
//     [adib, valen, vista],
//     [aura, cahya],
// ]

// var angka=parseInt(prompt('Masukkan angka dari 1-3 sesuai dengan yang anda ingin tampilkan: ','1=Mentor, 2=TA, 3=Admin'))
// function tampil(){
//     if(angka==1){
//         document.write(dojobox[0])
//     }else if(angka==2){
//         document.write(dojobox[1])
//     }else if(angka==3){
//         document.write(dojobox[2])
//     }else{
//         alert('Maaf data yang anda angka tidak sesuai')
//     }
// }

// tampil()

//Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
// - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 
var menu=parseInt(prompt('Silakan masukkan menu:', '1=luas, 2=volume'))
if(menu==1){
    alert('Anda memilih untuk menghitung luas permukaan')
    var panjang=parseInt(prompt('Masukkan nilai panjang balok:'))
    var lebar=parseInt(prompt('Masukkan nilai lebar balok:'))
    var tinggi=parseInt(prompt('Masukkan nilai tinggi balok:'))
    function luas()
}else if(menu==2){
    alert('Anda memilih untuk menghitung volume balok')
    var panjang=parseInt(prompt('Masukkan nilai panjang balok:'))
    var lebar=parseInt(prompt('Masukkan nilai lebar balok:'))
    var tinggi=parseInt(prompt('Masukkan nilai tinggi balok:'))
}else{
    alert('Maaf data yang anda input salah')
}


//Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" 
// dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!".

var nama=['budi', 'adi', 'gunawan', 'joko', 'bambang'];

function cek(){
    var namaAnda=prompt('Silakan masukkan nama Anda:')
    if(namaAnda==nama[0]){
        alert('Silakan Anda boleh masuk')
    }else if(namaAnda==nama[1]){
        alert('Silakan Anda boleh masuk')
    }else if(namaAnda==nama[2]){
        alert('Silakan Anda boleh masuk')
    }else if(namaAnda==nama[3]){
        alert('Silakan Anda boleh masuk')
    }else if(namaAnda==nama[4]){
        alert('Silakan Anda boleh masuk')
    }else{
        alert('Maaf, Anda tidak boleh masuk')
    }
}
cek()
