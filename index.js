const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
const count = document.getElementById("count")
let counter = 0

inc.addEventListener("click",()=>{
        count.innerHTML = counter++
})
dec.addEventListener("click",()=>{
        count.innerHTML = counter --
})