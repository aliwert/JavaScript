let num1 = Number(prompt("Enter first number"));
let islem = prompt("( +, -, *, / ):");
let num2 = Number(prompt("Enter second number"));
if (islem === "+") {
  sonuc = (num1 + num2);
} else if (islem === "-") {
  sonuc = (num1 - num2);
} else if (islem === "*") {
  sonuc = (num1 * num2);
} else if (islem === "/") {
  sonuc = (num1 / num2);
}
else{
  sonuc = alert("Faulty input ");
}

console.log(alert("Sonuc:"+ sonuc));



