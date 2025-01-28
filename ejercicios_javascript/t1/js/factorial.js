let num,
  error = "";

do {
  num = prompt(error + "Introduce un número para mostrar su factorial");
  num = num.replace(/\s/g, "");
  error = "ERRORUM. ";
} while (!Number(num >= 0) || num == "");
alert(num);

let result = 1;
for (let i = 1; i <= num; i++) {
  console.log((result = result * i));
}

let r = num;
for (let i = num - 1; i > 1; i--) {
  console.log((r = r * i));
}
let r2 = num;
let j = num - 1;
while (j > 1) {
  console.log((r2 = r2 * j));
  j--;
}
