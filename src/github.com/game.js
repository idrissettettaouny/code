/* this is a bloc comment son 
it ends where i wan it to end 
got it 
? 
*/ const ball = document.getElementById("ball");
document.addEventListener("keydown", handlKeyPress);
let position = 0;
function handlKeyPress(d) {
  if (d.code === "KeyG") {
    position = position - 10;
  }
  if (d.code === "KeyP") {
    position = position + 10;
  }
  if (d.code === "ArrowUp") {
    position = position + 30;
  }
  if (d.code === "ArrowDown") {
    position = position - 30;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.top = position + "px";
}
