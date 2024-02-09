let btn_1 = document.getElementById("btn-1")
let btn_2 = document.getElementById("btn-2")
let img = document.getElementById("img_mac")
let color_text = document.getElementById("color")
let price = document.getElementById("price")

btn_1.addEventListener("click", ()=>{
        btn_1.classList.add("active_btn")
        btn_2.classList.remove("active_btn")
        img.setAttribute("src", "./img/white.png")
        color_text.innerHTML = "White"
        price.innerHTML = "1999"
})

btn_2.addEventListener("click", ()=>{
        btn_2.classList.add("active_btn")
        btn_1.classList.remove("active_btn")
        img.setAttribute("src", "./img/grey.png")
        color_text.innerHTML = "Grey"
        price.innerHTML = "2599"
})