const myBtn = document.getElementById('my-btn');
const welcome = document.getElementById('welcome');

myBtn.addEventListener('click',

    function () {
        
        const gridContainer = document.getElementById('grid-container');
            
        gridContainer.style.display = 'flex';
        
        welcome.style.display = 'none';

        const totalCells = 100;
        const totalBombs = 16;
        const bombs = [];
        
        for (let i = 0; i < totalBombs; i++) {
            const addBombs = createAnotherRandomNumber(1, totalCells, bombs);
            bombs.push(addBombs);
        }

        gridContainer.innerHTML = '';

        for (let i = 1; i <= totalCells; i++) {

            const newCell = createNewCell(i);
            
            newCell.addEventListener('click',

                
                function () {

                    if( document.querySelectorAll('.cell.clicked').length < totalCells - totalBombs && document.querySelectorAll('.cell.bomb').length == 0 ) {
                        
                        const cellNumber = parseInt(this.innerText);
                        
                        
                        if (bombs.includes(cellNumber)) {

                            this.classList.add('bomb');

                            const points = document.querySelectorAll('.cell.clicked').length;

                            setTimeout (GameOver, 500);
                            function GameOver() {
                            alert('Hai colpito una bomba! Sei arrivato a: ' + points + ' punti');
                            }
                        }
                        
                        else {
                            this.classList.add('clicked');
                            
                            const points = document.querySelectorAll('.cell.clicked').length;
                            
                            if(points == totalCells - totalBombs){
                                alert('Complimenti, hai vinto! Hai raggiunto il massimo dei punti con la bellezza di: ' + points + ' punti totali!');
                            }
                        }
        
                    }
                }
            );

            gridContainer.append(newCell);
        
        }
    }
);



