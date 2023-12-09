function pigName() {
    let fnInput = document.getElementById('fn');
    let lnInput = document.getElementById('ln');

    let fn = cFirst(fnInput.value);
    let ln = cFirst(lnInput.value);

    let pigFn = cFirst(fn.slice(1) + fn.charAt(0) + 'ay');
    let pigln = cFirst(ln.slice(1) + ln.charAt(0) + 'ay');

    let inputs = document.getElementById('inputs');
    inputs.innerHTML = 'Input: ' + fn + " " + ln

    let result = document.getElementById('result');
    result.innerHTML = 'Result: Your pig latin name is: ' + pigFn + ' ' + pigln
}

function cFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}