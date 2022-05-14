let text = "";

for (x = 1990; x < 40; i++) {
  text += x + "<br>";
  console.log(text);
}
console.log(text);

let rok = 1990;
while (rok <= 2030) {
  if (rok % 100 === 0 ? rok % 400 === 0 : rok % 4 === 0 && rok % 10 == 0) {
    console.log("P " + "O " + rok);
  } else if (rok % 100 === 0 ? rok % 400 === 0 : rok % 4 === 0 && rok == 1992) {
    console.log("N " + "P " + rok);
  } else if (rok % 100 === 0 ? rok % 400 === 0 : rok % 4 === 0) {
    console.log("P " + rok);
  } else if (rok % 10 == 0) {
    console.log("O " + rok);
  } else {
    console.log(rok);
  }

  rok++;
}
