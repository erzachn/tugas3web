let namaMhs = document.getElementById("namaMhs");
let nimMhs = document.getElementById("nimMhs");
let nilaiMhs = document.getElementById("nilaiMhs");

console.log(nilaiMhs.value);
const form = document.querySelector("form");
let keterangan = "lulus";
let label = "";

function hitungNilai() {
  //   console.log(nilaiMhs.value);

  if (nilaiMhs.value >= 50) {
    keterangan = "lulus";
  } else {
    keterangan = "tidak lulus";
  }

  if (nilaiMhs.value >= 90) {
    label = "A";
  } else if (nilaiMhs.value >= 70) {
    label = "B";
  } else if (nilaiMhs.value >= 50) {
    label = "C";
  } else if (nilaiMhs.value >= 30) {
    label = "D";
  } else {
    label = "E";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("output").innerHTML = `
    <h4>nama: ${namaMhs.value}</h4>
    <h4>nim: ${nimMhs.value}</h4>
    <h4>nilai: ${nilaiMhs.value}</h4>
    <h4>label: ${label}</h4>
    <h4>keterangan: ${keterangan}</h4>
    `;
    document.getElementById("output").style.display = "initial";
  });

  form.addEventListener("reset", (e) => {
    document.getElementById("output").style.display = "none";
  });
}
