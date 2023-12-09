function calculate() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const loanTerms = parseFloat(document.getElementById("loanTerms").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerms)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  }

  const mInterestRate = interestRate / 100 / 12;
  const payments = loanTerms * 12;

  const mPayment =
    (loanAmount + mInterestRate) / (1 - Math.pow(1 + mInterestRate, -payments));

  document.getElementById(
    "result"
  ).innerHTML = `Your monthly payment will be $${mPayment.toFixed(2)}`;

  document.getElementById('result').innerHTML = `Loan Amount: $${loanAmount.toFixed(2)}
  <br/>
  Loan Term: ${loanTerms} years
  <br/>
  Interest Rate: ${interestRate.toFixed(2)}%
  <br/>
  Your monthly payment will be $${mPayment.toFixed(2)}`;
}


