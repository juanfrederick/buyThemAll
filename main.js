function buyThemAll(books, budget) {

  let array1 = books.split(",");
  let array2 = [];
  let namaBuku = [];
  let hargaBuku = [];
  let totalHarga = 0;
  let totalBuku = 0;
  let gabungBuku = "";

  // Memisahkan string menjadi sebuah array dan memisahkan sebuah array menjadi 2 array yang isinya nama dan harga
  for(let i = 0; i < array1.length; i++){
    array2[i] = array1[i].split(":");

    // Codingan dibawah dibuat Karena kemungkinan input dari string tidak sesuai, sehingga dapat memunculkan array kosong
    if(array2[i][0] === ""){
      continue;
    } else{
      namaBuku[i] = array2[i][0];
      hargaBuku[i] = Number(array2[i][1]);
    }

  }

  // Mencari total harga & buku yang dapat dibeli
  for(let i = 0; i < namaBuku.length; i++){
    // Mengecek apakah buku dari yang termahal - termurah dapat dibeli atau tidak (jika tidak maka for akan lanjut dan total harga barang adalah 0)
    if(budget < hargaBuku[i]){
      continue;
    } else{
      // Jika dapat dibeli, mengecek apakah budget yang dimiliki dapat membeli buku dari yang termahal - termurah (jika bisa total harga bertambah, totalbuku tambah, dan buku tambah) (jika tidak akan for akan langsung lanjut untuk melihat buku selanjutnya)
      if(budget-totalHarga > hargaBuku[i]){
        totalHarga += hargaBuku[i];
        totalBuku++;
        gabungBuku += namaBuku[i] + ", ";
      } else{
        continue;
      }

    }
  }

  // Ini untuk menghilangkan ", " pada nama buku terakhir
  gabungBuku = gabungBuku.slice(0, -2);

  // Jika harga buku tidak 0 maka ada beli buku
  if(totalHarga != 0){
    return `Afista membeli ${totalBuku} buku yaitu ${gabungBuku}. Total belanja ${totalHarga}, sisa uang Afista adalah ${budget-totalHarga}.`
  } else{
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`
  }


}

// console.log(buyThemAll("Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,", 300000));

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

// console.log(
//   buyThemAll(
//     "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
//     200000
//   )
// ); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
