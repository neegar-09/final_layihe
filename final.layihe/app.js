const back = document.querySelector(".back");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
let counter = 0;
back.addEventListener("click", backFunk)
function backFunk(){
    counter--;
    carousel()
    console.log("salam");
}
next.addEventListener("click", nextFunk)
function nextFunk(){
    counter++;
    carousel()
}

function carousel(){
    if(counter == slide.length){
        counter = 0
    }
    if(counter <0){
        counter = slide.length-1
    }
    slider.style.left = `-${counter * 570}px`
    
}


    
let nums = document.querySelectorAll(".num")
nums.forEach((num) => startCount(num))
function startCount(e){
    let goal = e.dataset.goal;
    let count = setInterval( () =>{
        e.textContent++
        if (e.textContent == goal) {
                clearInterval(count);
              }
    } , 10)
}


// modal
let img1 = document.getElementById("img1")
let pop_up = document.getElementById("pop_up1")
img1.addEventListener("click" , ()=>{
    pop_up.classList.add("pop-up-active")
})
document.getElementById("close1").addEventListener("click" , () =>{
    pop_up.classList.remove("pop-up-active")
})


document.getElementById("img2").addEventListener("click" , () =>{
    document.getElementById("pop_up2").classList.add("pop-up-active")
})
document.getElementById("close2").addEventListener("click", ()=>{
    document.getElementById("pop_up2").classList.remove("pop-up-active")
})

document.getElementById("img3").addEventListener("click" , () =>{
    document.getElementById("pop_up3").classList.add("pop-up-active")
})
document.getElementById("close3").addEventListener("click", ()=>{
    document.getElementById("pop_up3").classList.remove("pop-up-active")
})




