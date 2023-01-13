function createNewCell(content) {

    const cell = document.createElement('div')
    cell.classList.add('cell');

    cell.innerHTML = content;

    return cell;

}

function createRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) +min;
    
}

function createAnotherRandomNumber(min, max, arr) {

    let randomNumber = createRandomNumber(min, max);

    while(arr.includes(randomNumber)){

        randomNumber = createRandomNumber(min, max);

    }

    arr.push(randomNumber);

    return randomNumber;
}
   
