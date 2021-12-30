const colors = ["green","red","#f15025","#eee"];

const button = document.getElementById("btn");
const span = document.querySelector(".color");

button.addEventListener("click",function () {
    
    const randomNumber = Math.floor(Math.random()*colors.length);

    document.body.style.backgroundColor = colors[randomNumber]
    span.textContent = colors[randomNumber]
})
