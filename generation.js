function findGeneration() {
  const age = document.getElementById("age").value;
  const year = new Date().getFullYear() - age;

  let result;

  switch (true) {
    case year >= 1946 && year <= 1964:
      result = "You are a member of the baby boomer generation!";
      break;
    case year >= 1965 && year <= 1980:
      result = "You are part of generation X!";
      break;
    case year >= 1981 && year <= 1996:
      result = "You belong in the Y generation!";
      break;
    case year >= 1997 && year <= 2012:
      result = "Generation Z is your generation!";
      break;
    case year >= 2013 && year <= 2025:
      result = "You are part of generation alpha!";
      break;
    default:
        result = "Sorry, your generation is not listed."
  }
  document.getElementById('input').innerHTML = "Input: " + age;
  document.getElementById('result').innerHTML = "Result: " + result;
}
