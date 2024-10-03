let resetbtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const boxes = document.querySelectorAll('.box');
let trunO = true;

const winpattern =  [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    trunO = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

let turnO = true; // Initialize the turn variable

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click me");
        
        // Check if the box is already filled
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                box.style.color = "yellow";
            } else {
                box.innerText = "X";
                box.style.color = "purple";
            }
            // Optionally disable the box if it is a button
            box.disabled = true; // This line is effective if 'box' is a button or similar
            turnO = !turnO; // Toggle the turn
            checkWinner(); // Call function to check for a winner
        }
    });
});

const disableBtn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBtn();
}





const checkWinner = () => {
    for(let pattern of winpattern){
            let value1 = boxes[pattern[0]].innerText;
            let value2 = boxes[pattern[1]].innerText;
            let value3 = boxes[pattern[2]].innerText;

            if(value1 != "" && value2 != "" && value3 != ""){
                if(value1 === value2 && value2 === value3){
                    console.log("winner ",value1)
                    showWinner(value1);
                }
            }
    }
}

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);