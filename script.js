const ball=document.querySelector(".ball");
window.requestAnimationFrame(dropGame);
let left_direction=0;
let top_direction=0;
ball.style.left=Math.floor(Math.random() * window.innerWidth) + "px";


let xd=1;
let yd=1;

left_direction=ball.getBoundingClientRect().left;
top_direction=ball.getBoundingClientRect().top;

function dropGame(){
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    
    if ( left_direction >= window.innerWidth-20 || left_direction < 0){
        xd=xd*-1;
        ball.style.backgroundColor="rgb("+ r +","+ g + "," + b + ")";

    }
    if ( top_direction >= window.innerHeight-20 || top_direction < 0){
        yd=yd*-1;
        ball.style.backgroundColor="rgb("+ r +","+ g + "," + b + ")";

    }
    left_direction+=xd;
    top_direction+=yd;
    ball.style.top=top_direction + "px";
    ball.style.left=left_direction + "px"
    window.requestAnimationFrame(dropGame);
}
