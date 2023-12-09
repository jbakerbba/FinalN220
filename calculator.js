function calculate() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
  const operation = document.getElementById("operation").value;

  let result;

  switch (operation) {
    case "addition":
      result = firstNumber + secondNumber;
      document.getElementById(
        "result"
      ).innerHTML = `Result: ${firstNumber} + ${secondNumber} = ${result}`;
      document.getElementById("input").innerHTML = `Input: ${firstNumber}, ${secondNumber} and +`
      break;
    case "subtraction":
      result = firstNumber - secondNumber;
      document.getElementById(
        "result"
      ).innerHTML = `Result: ${firstNumber} - ${secondNumber} = ${result}`;
      document.getElementById("input").innerHTML = `Input: ${firstNumber}, ${secondNumber} and -`
      break;
    case "multiplication":
      result = firstNumber * secondNumber;
      document.getElementById(
        "result"
      ).innerHTML = `Result: ${firstNumber} * ${secondNumber} = ${result}`;
      document.getElementById("input").innerHTML = `Input: ${firstNumber}, ${secondNumber} and *`
      break;
    case "division":
      result = firstNumber / secondNumber;
      document.getElementById(
        "result"
      ).innerHTML = `Result: ${firstNumber} / ${secondNumber} = ${result}`;
      document.getElementById("input").innerHTML = `Input: ${firstNumber}, ${secondNumber} and /`
      break;
  }
}
