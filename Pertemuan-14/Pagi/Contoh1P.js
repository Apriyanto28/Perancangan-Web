var btn = document.getElementById("tombol");
var nama = document.getElementById("nama").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

        function validasi(){
            if(nama == ""){
                console.log("Isi bagian a = ", nama);
                console.log("Nama tidak boleh kosong!");
            }
            if(email == ""){
                console.log("Isi bagian b = ", email);
                console.log("Email tidak boleh kosong!");
            }
            if(password == ""){
                console.log("Isi bagian c = ", password);
                console.log("Password tidak boleh kosong!");
            }
        }
        btn.addEventListener("click", validasi());