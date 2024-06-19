function validasi(){
    //Fungsi ini digunakan pada JavaScript untuk mencegah terjadinya load page pada saat ditekan tombol submit
    //Page yang dimaksud adalah halaman itu sendiri
    event.preventDefault();

    //Deklarasi 3 buah variabel untuk tempat penyimpanan data pada JavaScript
    //Data didapatkan dari form yang ada
    let data_nama = document.forms["formSaya"]["nama"].value;
    let data_jumlah = document.forms["formSaya"]["jumlah"].value;
    let data_satuan = document.forms["formSaya"]["satuan"].value;

    //Fungsi trim() digunakan untuk menghilangkan spasi sebelum dan sesuai teks yang diinput
    //Melakukan pengecekan apakah isi data_nama adalah kosong?
    if(data_nama.trim() == ""){
        //Jika iya, maka munculkan Message Box (box pemberitahuan) pada website terkait data_nama tidak boleh kosong
        alert("Nama Tidak Boleh Kosong ... !!!");
      
      //Melakukan pengecekan apakah data_jumlah adalah kosong?
    } else if(data_jumlah.trim() == ""){
        //Jika iya, maka munculkan Message Box (box pemberitahuan) pada website terkait data_satuan tidak boleh kosong
        alert("Jumlah tidak boleh kosong ... !!!");

      //Namun, apabila semuanya berisi, tampilkan pesan bahwa Data telah berhasil diinput
    } else{
        //Dilanjutkan pengecekan terhadap satuan yang dibuat

        //Deklarasi sebuah variabel untuk penyimpanan hasil satuan
        let hasil_satuan = "";

        //Mengecekan apakah satuan sama dengan kg
        if(data_satuan == "kg"){
            //Jika iya, maka satuan adalah Kilogram
            hasil_satuan = "Kilogram";

          //Mengecekan apakah satuan sama dengan bh
        } else if(data_satuan == "bh"){
            //Jika iya, maka satuan adalah Buah
            hasil_satuan = "Buah";

          //Namun jika bukan, maka sama dengan bj
          //bj adalah Biji
        } else{
            hasil_satuan = "Biji";
        }

        //Menampilkan pesan berhasil
        alert("Terima kasih, data barang " + data_nama + 
            " telah berhasil diinput sebanyak " + data_jumlah + 
            " " + hasil_satuan + " !");
    }
}
