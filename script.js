// alert("This is JS");
let x=true; 
let y=true;
let ball=document.querySelector(".ball");
let board=document.querySelector(".board");
let boardBounds=board.getBoundingClientRect();
function moveBall(){
    //To get the current left, right, top, bottom of ball
let ballcord=ball.getBoundingClientRect();
let ballTop=ballcord.top;
let ballLeft=ballcord.left;
let ballRight=ballcord.right;
let ballBottom=ballcord.bottom;
//to keep the ball in bound
//handling vertical bound
if(ballTop<=boardBounds.top||ballBottom>=boardBounds.bottom)
{
    //vertically outside
    y=!y;
}
//handling horizontal bound
if(ballLeft<=boardBounds.left||ballRight>=boardBounds.right)
{
    //vertically outside
    x=!x;
}
//Notice how to switch case to make the code one liner in statements such as below
// FOR SPEED, change the numbers below
ball.style.top= y==true?ballTop+4+"px":ballTop-4+"px";
ball.style.left= x==true?ballLeft+4+"px":ballLeft-4+"px";
requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);