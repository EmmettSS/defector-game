const div = document.getElementById("defector")
let count = 0

div.addEventListener("mouseenter", ()=>{
    // console.log("div")
    let rColor = Math.random() * 255
    let gColor = Math.random() * 255
    let bColor = Math.random() * 255
    let xPos = Math.random() * 550
    let yPos = Math.random() * 450
    div.style.left = `${xPos}px`;
    div.style.top = `${yPos}px`;
    div.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
    count++
    if(count == 10){
        window.location = "lose.html";
    }
})

div.addEventListener("click", ()=>{
    window.location = "win.html"
})