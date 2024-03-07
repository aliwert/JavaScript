let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

let message = document.querySelector(".msg");

let score = 10;

let topScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    message.textContent = "Please enter a number...";
  } else if (guess == randomNumber) {
    message.textContent = "Congrats...You find👏";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumber;

    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = score;
    }
  } else {
    //? score 1'den büyük olduğu sürece hakkım var

    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;

      guess < randomNumber
        ? (message.textContent = "Enhance👆")
        : (message.textContent = "Decrease👇");
    } else {
      message.textContent = "You lost game🥺";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";

  randomNumber = Math.ceil(Math.random() * 20);

  score = 10;

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  message.textContent = "The game begins for the new player... ";
};
document.addEventListener("keydown", function (e) {
  // console.log(e)

  if (e.key === "Enter") {
    document.querySelector(".check").click();
  }
});
