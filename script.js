const container = document.querySelector(".container");
const controlsContainer = document.querySelector(".controls");
const range = document.getElementById("range");
const rangeDisplay = document.querySelector(".rangeDisplay");
const clearBtn = document.getElementById("clear");
const colorBtn = document.getElementById("color");
const rainbowBtn = document.getElementById("rainbow");
let pixelColor;
let rainbow = false;
let dimention = range.value;
let pixels;


function cleanContainer() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
}

function createPixels(num) {
    cleanContainer();
    let fragment = new DocumentFragment();
    for (let i = 0; i < num*num; i++) {
        let div = document.createElement("DIV");
        div.classList.add("pixel");
        div.style.flex = `1 1 ${(100/num)}%`;
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
    pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel=>{
        pixel.addEventListener("mouseover",(e)=>{
            if(rainbow) pixelColor = `rgb(${Math.floor(Math.random() * (256 - 1)) + 1},${Math.floor(Math.random() * (256 - 1)) + 1},${Math.floor(Math.random() * (256 - 1)) + 1})`;
            else pixelColor = document.getElementById("colorPicker").value;
            pixel.style.background = pixelColor;
        })
    })
}

range.addEventListener("input",e=>{
    rangeDisplay.textContent = `${range.value}x${range.value}`
})
range.addEventListener("change",e=>{
    dimention = range.value;
    createPixels(dimention);
})
clearBtn.addEventListener("click",()=>{
    createPixels(dimention);
})
colorBtn.addEventListener("click",()=>{
    rainbow = false;
    createPixels(dimention);
})
rainbowBtn.addEventListener("click",()=>{
    rainbow = true;
    createPixels(dimention);
})
createPixels(dimention);
