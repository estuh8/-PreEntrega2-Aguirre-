const carrusel = document.querySelector (".carrusel")

let isDragStart = false;

const dragStart = () => {
    let isDragStart = true;
}

const dragging = (e) => {
    if(!isDragSart) return;
    carrusel.scrollLeft = e.pageX;
} 
carrusel.addEventListener("mousedown" , dragStar)
carrusel.addEventListener("mousemove" , dragging)
