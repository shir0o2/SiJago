// login.js
function masuk() {
    const nama = document.getElementById("nama").value;

    if (nama.trim() === "") {
        alert("Nama harus diisi!");
        return;
    }

    // simpan ke localStorage
    localStorage.setItem("namaUser", nama);

    // pindah ke dashboard
    window.location.href = "dashboard.html";
}

// tampilkan nama di dashboard
function tampilkanNama() {
    const nama = localStorage.getItem("namaUser");

    if (nama) {
        document.getElementById("user").innerText = nama;
    } else {
        window.location.href = "index.html";
    }
}