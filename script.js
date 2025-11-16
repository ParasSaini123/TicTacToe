let btns =document.querySelectorAll('.box');
let win = document.querySelector('.winner');
let newGameBtn = document.querySelector('.new-btn');
let msgWin =  document.querySelector('.msg-win');
let winContainer = document.querySelector('.winner');
let num =1;
let sound = new Audio("move.mp3");
let winPtrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//Place The Elements
for(let btn of btns){
    btn.addEventListener('click',()=>{
sound.play();
if(num%2==0){
    btn.classList.add('userColor');
 btn.innerText = 'O';
}
else{
    btn.classList.remove('userColor');
    btn.innerText = 'X';
}
num++; 
btn.disabled = true;
checkWinner();
})
}
//Reset Btn

function resetBtn(){
for(let btn  of btns){

    btn.innerText = "";
    btn.disabled = false;
     winContainer.classList.add('hide');
}
}
//Reset Button Working
let Rbtn = document.querySelector('.reset-btn');
Rbtn.addEventListener('click', resetBtn);
newGameBtn.addEventListener('click', resetBtn);
function enableBtn(){


    for(let btn of btns){

      btn.disabled = true;
    }
}
//Print Winner
function Printwin(winner){

    msgWin.innerText = `Winner Is :${winner}`;
     winContainer.classList.remove('hide');
}  

//Choose Winner or tie -->
function checkWinner(){
    for(let ptrn of winPtrn){

        let pos1 = btns[ptrn[0]].innerText;
        let pos2 =  btns[ptrn[1]].innerText;
        let pos3 =  btns[ptrn[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos2 != "" ){


            if(pos1 === pos2 && pos2 === pos3){

                console.log("Winner",pos1);
                Printwin(pos1);
                enableBtn();
                
            }
        }
    }

}


