const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const reset = document.querySelector(".reset");

const inc1 = document.querySelector(".inc1");

const inc2 = document.querySelector(".inc2");

const winner = document.getElementById("winner");


reset.addEventListener("click", () => {
    inc1.textContent = 0;
    inc2.textContent = 0;
    winner.value = "";
    player1.disabled = false;
    player2.disabled = false;
    let score = localStorage.getItem("score");
    winner.value = score;
  });

player1.addEventListener("click", () => {
  if (inc1.textContent < winner.value) {
    inc1.textContent++;
  }
  if (inc1.textContent == winner.value) {
    // inc1.style.color = "greenyellow";
    document.querySelector("body");
    inc2.style.color = "red";
    winner.value = "";
    player1.disabled = true;
    player2.disabled = true;
  }
});

player2.addEventListener("click", () => {
  if (inc2.textContent < winner.value) {
    inc2.textContent++;
  }
  if (inc2.textContent == winner.value) {
    winner.value = "";
    player1.disabled = true;
    player2.disabled = true;
  }
});

winner.addEventListener("change", () => {
  localStorage.setItem("score", winner.value);
});


