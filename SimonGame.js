let gameArr=[];
let userArr=[];
let start=false;
let level=0;
let p=document.querySelector("p");
let btn=["red","yellow","green","purple"]

document.addEventListener("keypress",function(){
  if(start==false){
    console.log("Started game");
    start=true;
  }
  levelUp();
});

function gameFlash(btnS){
  btnS.classList.add("flash");
  setTimeout(function(){
    btnS.classList.remove("flash");
  },200)
};

function userFlash(btnS){
  btnS.classList.add("userFlash");
  setTimeout(function(){
    btnS.classList.remove("userFlash");
  },200)
};

 function levelUp(){
  userArr=[];
    level++;
    p.innerText=`level ${level}`;

    let randIndex=Math.floor(Math.random()*4);
    let randColor=btn[randIndex];
    let randbtns=document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIndex);
    // console.log(randbtns);
    gameArr.push(randColor);
    console.log(gameArr);
    gameFlash(randbtns);
 }

 function checkAns(index){
  if(gameArr[index]===userArr[index]){
      if(gameArr.length==userArr.length){
        setTimeout(levelUp,1000);
      }
  }
  else{
    p.innerText=`Game is over press any key ! Level is ${level}`;
    reset();
  }
 }

 function BtnPress(){
  console.log("button was pressed");
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userArr.push(userColor);
  console.log(userArr);
  checkAns(userArr.length-1);
 }

 function keypress(){
  let Allbtn=document.querySelectorAll(".box");
 for(btns of Allbtn){
  btns.addEventListener("click",BtnPress);
 }
 };
 addEventListener("keydown",keypress);

 function reset(){
    level=0;
    gameArr=stop;
    keypress();
    start=false;
 }
 

 
 

