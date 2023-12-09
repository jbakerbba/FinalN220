function calculateBox() {
    let width = parseInt(document.getElementById('width').value);
    let height = parseInt(document.getElementById('height').value);

    let widthPixels = width * 10;
    let heightPixels = height *10;

    document.getElementById('inputs').innerHTML = 'Input: The box is ' + (width) + ' width and ' + (height) + ' height';

    document.getElementById('result').innerHTML = 'Result: The box is ' + (width * height) + ' square feet.';


    let boxElement = document.getElementById('box');
    boxElement.style.width = widthPixels + 'px';
    boxElement.style.height = heightPixels + 'px';
    boxElement.style.display = 'block';
}

