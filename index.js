//ex01
let listaDeCores = ["red", "green", "blue", "orange", "yellow", "purple", "gray", "pink", "black", "white"]
let btn1 = document.querySelector("button:nth-of-type(1)")

//ex02
let form = document.querySelector("#seed-form")
let btn2 = document.querySelector("#btn2")
function unfold(seed, f, stop = () => false){
    if(f(seed) === null) return []

    if(stop(seed)) return []

    let [b, a, ...ignore] = f(seed)
    return [a].concat(unfold(b, f, stop))
}

//ex03
let btn3 = document.querySelector("button:nth-of-type(2)")

//ex04
//https://music.youtube.com/playlist?list=OLAK5uy_lvAjViL7v00TsqSMxvOr8NQlVzCY1ahtY

//ex05
let btn5 = document.querySelector("button:nth-of-type(3)")
let objList = [
    {
        nome : "enzo",
        nota : 7
    },
    {
        nome : "suzana",
        nota : 4
    },
    {
        nome : "paulo",
        nota : 10
    }
]

//ex06
let btn6 = document.querySelector("button:nth-of-type(4)")
let _objList = [
    {
        nome : "lapis",
        preço : 4,
        quantidade : 3
    },
    {
        nome : "borracha",
        preço : 2,
        quantidade : 6
    },
    {
        nome : "estojo",
        preço : 14,
        quantidade : 2
    },
    {
        nome : "caneta",
        preço : 6,
        quantidade : 3
    },
    {
        nome : "errorex",
        preço : 10,
        quantidade : 8
    }
]

//---------------------------------------------------------------------------------

function events(){
    //ex 01
    Array.from(document.querySelectorAll("ul:nth-of-type(1) li")).map((li, i) => {
        btn1.addEventListener("click", () => {
            li.style.backgroundColor = listaDeCores[i]
        })
    })

    //ex 02
        //frufruzinho
        form.addEventListener("submit", e => {
            if(document.querySelector("#form-seed ul"))
                document.querySelector("#form-seed ul").remove()

            e.preventDefault();
            let seed = parseInt(document.querySelector("#seed").value)

            if(isNaN(seed) || seed <= 0){
                alert("Tem que ser um >número< maior que 0!!")
                return
            }

            btn2.insertAdjacentHTML('afterend', `<ul>${unfold(seed, x => [x * 2, x], stop => stop > 1024).map((n) => {return `<li>${n}</li>`}).join('')}</ul>`)
        })
    
    //ex 03
    btn3.addEventListener("click", () => {
        let li = [];

        unfold(1, x => [x + 1, x], (s) => s > 50).filter(n => n % 2 === 0).forEach((n) => {li.push(`<li>${n}</li>`)})

        btn3.insertAdjacentHTML('afterend', `<ul>${li.join('')}</ul>`);
    });

    //ex 04
    Array.from(document.querySelectorAll("div")).reduce((x, y) => x + y.textContent, "")

    //ex05
    btn5.addEventListener("click", () => {
        btn5.insertAdjacentHTML('afterend', `<ul>${objList.filter(obj => obj.nota >= 7).map((obj) => {return `<li>${obj.nome}</li>`}).join('')}</ul>`)
    })

    //ex06
    btn6.addEventListener("click", () => {
        btn6.insertAdjacentHTML('afterend', `<p>${_objList.filter(obj => obj.quantidade > 5).reduce((x, y) => x + (y.preço * y.quantidade), 0)}</p>`)
    })
}

window.onload = events