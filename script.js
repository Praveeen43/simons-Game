let h2=document.querySelector("h2");
let gameSeq =[];
let userSeq=[];
let HighestScore = 0;

let btns=["red","yellow","purple","green"];

let gameStart= false;
 let level = 0;

 document.addEventListener("keypress" , function(){
    if(gameStart == false)
    {
        console.log("game started");

        levelUp();
        gameStart = true;
    }
 });

 function levelUp(){
   userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomClr = btns[randomIdx];
    let randBtm = document.querySelector(`.${randomClr}`);

    gameSeq.push(randomClr);
    btnFlash(randBtm);
 }

 function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
   }    
 
    function userBtnFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);

 }

 let allBtns = document.querySelectorAll(".box");
 for(x of allBtns)
 {
   x.addEventListener("click", btnPress);

 }

 
 function btnPress() {
   let btn = this;            /* this is the same button which is pressed at that time*/
   userBtnFlash(btn);
   
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

function checkAns(idx){
   if(userSeq[idx]==gameSeq[idx]){
      if(userSeq.length== gameSeq.length){
         setTimeout(levelUp,1000);
      }
   }else{

      if(HighestScore<level){
         HighestScore=level;
      }
      h2.innerHTML=`Game over..!  your Score was <b> ${level} and HighScore is ${HighestScore}</b> <br>Press any key to Start.`

      document.querySelector("body").style.backgroundColor="red";

      setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
   },150);
      resetGame();
   }

}

function resetGame(){
   gameStart=false;
   level=0;
   gameSeq=[];
   userSeq=[];
}