let Heads = 0;
let Tails = 0;
let flip = 0;
let result;

function flipCoin() {
    result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    console.log('Result:', result);
    changeImage(result);
    changeRatio();
    changeResults(result);
}

function changeImage(result) {
    const coinImage = document.getElementById('coinImage');
    coinImage.src = result === 'Heads' ? './images/heads.png' : './images/tails.jpeg';
}

function changeRatio() {
    Heads += result === 'Heads' ? 1 : 0;
    Tails += result === 'Tails' ? 1 : 0;

    const ratioParagraph = document.getElementById('ratio');
    ratioParagraph.innerHTML = `Heads : Tails = ${Heads} : ${Tails}`;
}

function changeResults(result) {
    const resultsBody = document.getElementById('resultsBody');
    const newRow = resultsBody.insertRow(0);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    flip++;
    cell1.innerHTML = flip;
    cell2.innerHTML = result;
}