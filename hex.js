const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D"];

const button = document.getElementById("btn");
const span = document.querySelector(".color");

button.addEventListener("click",function () {

    let hexColor = "#"

    for(i = 0; i < 6 ; i++){


    hexColor += Math.floor(Math.random()*hex.length);
    
    document.body.style.backgroundColor = hexColor
    span.textContent = hexColor
}

})
