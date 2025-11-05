//ex01
let listaDeCores = ["red", "green", "blue", "orange", "yellow", "purple", "gray", "pink", "black", "white"]
let btn1 = document.querySelector("button:nth-of-type(1)")

//ex02
let btn2 = document.querySelector("button:nth-of-type(2)")
function unfold(seed, f){
    if(f(seed) === NULL)
        return []

    if(seed > 1024) return

    let [b, a, ...ignore] = f(seed)
    return [a].concat(unfold(b, f))
}

function events(){
    //ex 01
    Array.from(document.querySelectorAll("ul:nth-of-type(1) li")).map((li, i) => {
        btn1.addEventListener("click", () => {
            li.style.backgroundColor = listaDeCores[i]
        })
    })

    //ex 02
    btn2.addEventListener("click", () => {
            unfold(1, x => x*2)
    })
}

window.onload = events