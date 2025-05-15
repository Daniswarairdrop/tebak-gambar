const dataGambar = [
  { src: "img/gambar1.jpg", jawaban: "kucing" },
  { src: "img/gambar2.jpg", jawaban: "bola" },
  { src: "img/gambar3.jpg", jawaban: "gunung" }
];

let indexGambar = 0;

function tampilkanGambar() {
  const gambar = document.getElementById("gambar");
  gambar.src = dataGambar[indexGambar].src;
  document.getElementById("jawaban").value = "";
  document.getElementById("hasil").textContent = "";
}

function cekJawaban() {
  const input = document.getElementById("jawaban").value.toLowerCase();
  const jawabanBenar = dataGambar[indexGambar].jawaban;

  if (input === jawabanBenar) {
    document.getElementById("hasil").textContent = "Benar!";
    indexGambar++;
    if (indexGambar < dataGambar.length) {
      setTimeout(tampilkanGambar, 1000);
    } else {
      document.getElementById("hasil").textContent = "Kamu sudah menebak semua gambar!";
    }
  } else {
    document.getElementById("hasil").textContent = "Salah, coba lagi!";
  }
}

window.onload = tampilkanGambar;
