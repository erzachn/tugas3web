const kotak = document.getElementById("kotak");
setTimeout(() => {
  kotak.style.top = "0";
  kotak.style.right = "0";
}, 5000);

setTimeout(() => {
  kotak.style.top = "inherit";
  kotak.style.right = "0";
  kotak.style.bottom = "0";
}, 10000);

setTimeout(() => {
  kotak.style.opacity = "0";
}, 15000);

setTimeout(() => {
  kotak.style.opacity = "1";
}, 20000);
