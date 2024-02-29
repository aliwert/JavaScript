document.addEventListener("DOMContentLoaded", function () {
  let ssnInput = document.getElementById("ssnInput");
  let validateButton = document.getElementById("validateButton");
  let resultMessage = document.getElementById("resultMessage");

  validateButton.addEventListener("click", function () {
    let ssn = ssnInput.value.trim();

    if (isValidSSN(ssn)) {
      resultMessage.textContent = "Valid SSN";
      resultMessage.style.color = "green";
    } else {
      resultMessage.textContent = "Not a valid SSN";
      resultMessage.style.color = "red";
    }
  });

  function isValidSSN(ssn) {
    let ssnRegex = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
    return ssnRegex.test(ssn);
  }
});
//! ENTER ILE GİRİS AKTIF
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.querySelector("#validateButton").click();
  }
});
