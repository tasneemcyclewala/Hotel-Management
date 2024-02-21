// let m = 1,
//   x = 5,
//   star = "";
// for (let i = 1; i <= x; i++) {
//   for (let k = 1; k <= x - i; k++) {
//     star += "&nbsp;&nbsp;";
//   }
//   for (let j = 1; j <= m; j++) {
//     star += "*";
//   }
//   star += "<br/>";
//   m = m + 2;
// }
// document.getElementById("display").innerHTML = star;

let i,
  j,
  k,
  l,
  star = "";

for (i = 5; i >= 1; i--) {
  for (k = 1; k <= 5 - i; k++) {
    star += "&nbsp;&nbsp";
  }
  for (j = 1; j <= i; j++) {
    star += "*";
  }
  for (l = 1; l < i; l++) {
    star += "*";
  }
  star += "<br/>";
}
document.getElementById("display").innerHTML = star;
