let angkaSekarang = "";
let operatorSaatIni = "";
let hasil = 0;

function tambahAngka(angka) {
  angkaSekarang += angka;
  document.getElementById("hasil").innerText = angkaSekarang;
}

function tambahOperator(operator) {
  if (angkaSekarang !== "") {
    if (operatorSaatIni !== "") {
      hitung();
    }
    operatorSaatIni = operator;
    hasil = Number(angkaSekarang);
    angkaSekarang = "";
  }
}

function hitung() {
  if (angkaSekarang !== "") {
    let angka = Number(angkaSekarang);
    switch (operatorSaatIni) {
      case "+":
        hasil += angka;
        break;
      case "-":
        hasil -= angka;
        break;
      case "*":
        hasil *= angka;
        break;
      case "/":
        hasil /= angka;
        break;
    }
    angkaSekarang = "";
    operatorSaatIni = "";
    document.getElementById("hasil").innerText = hasil;
  }
}

function resetKalkulator() {
  angkaSekarang = "";
  operatorSaatIni = "";
  hasil = 0;
  document.getElementById("hasil").innerText = "";
}
