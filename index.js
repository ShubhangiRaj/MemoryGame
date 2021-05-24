// function for making a 4*4 grid of memory cards
let grid = document.getElementById("grid");
let numOfRows = 4;
let numOfCols = 4;
function createGrid(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
        let memoryCard = document.createElement("div");
        memoryCard.classList.add(`box-${i+1}`, `memoryCard`);
        grid.appendChild(memoryCard);
    }
}

// sample input
let inputArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// shuffle inputArr 
function shuffleInputArray(inputArr){
    for(let i = inputArr.length - 1; i >= 0; i--){
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [inputArr[i], inputArr[randomIndex]] = [inputArr[randomIndex], inputArr[i]];
    }
    return inputArr;
}

// build a grid - DONE
// shuffle inputArray - DONE
// assign each inputArr elem to each memory card - DONE

function assignInputToMemoryCards(inputArr){
    let memoryCardsArr = document.getElementsByClassName("memoryCard");
    for(let i = 0; i < memoryCardsArr.length; i++){
        memoryCardsArr[i].innerHTML = inputArr[i];
    }
}

// call methods
createGrid(numOfRows, numOfCols);
shuffleInputArray(inputArr);
assignInputToMemoryCards(inputArr);

// add event listener
document.body.addEventListener("click", e => {
    console.log(e.target.classList);
    if(e.target.classList.contains("memoryCard")){
        e.target.style.backgroundColor = "blue";
    }
})