let grid = ["","","","","","","","",""];



//THIS IS THE WINNING CONDITION
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


 const firstPlayer = 'X';

 const secondPlayer = '0';
 

 const shouldPlayNext = firstPlayer

 newGame = true;


const handleCellPlayed = (clickedCell, clickedCellIndex)=>{
     console.log(clickedCellIndex)
     getCurrVal = clickedCell.innerHTML;
     


    if(newGame){
        clickedCell.innerHTML = firstPlayer
        newGame = false
        grid[clickedCellIndex]= firstPlayer;
        shouldPlayNext = player
        return
    }

    if(getCurrVal == 'X'){
        clickedCell.innerHTML ='O'
        return
     }
    clickedCell.innerHTML = 'X'


}



const clickHandler = (clickedCellEvent)=>{
   const clickedCell = clickedCellEvent.target;
   const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))


   handleCellPlayed(clickedCell, clickedCellIndex)

}

document.querySelectorAll('.square').forEach(cell=>cell.addEventListener('click',  clickHandler ))