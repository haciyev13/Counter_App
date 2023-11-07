let count = 0;
const descrase = document.querySelector(".descrase")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")
const number = document.querySelector(".number")

descrase.addEventListener("click", () => {
    count = count + 1
    number.innerHTML = count
    console.log(count)
    number.style = 'color:green'
})
reset.addEventListener("click", () => {
    count = 0
    number.innerHTML = count
    number.style = 'color:yellow'
})
increase.addEventListener("click", () => {
    count = count - 1
    console.log(count)
    number.innerHTML = count
    number.style = 'color: red'
})
console.log(count)