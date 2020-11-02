//https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 600;
canvas.height = 600;

//default
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else { //canvas 픽셀 사이즈 필(pixel modifier)
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    //console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); //click
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting); //mouse goes ouside the canvas
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

//console.log(Array.from(colors));