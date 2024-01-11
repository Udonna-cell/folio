let burger = document.querySelector(".burger")
let body = document.body
let isNavOpen = false
burger?.addEventListener("click", () => {
    let icon = burger.getElementsByTagName("img")
    let nav = document.querySelector("nav")

    if (!isNavOpen) {
        body.style.overflow = "hidden"
        nav?.className = "open"
        icon[0].src = "./assets/images/Frame 60 (1).svg"
        isNavOpen = true
    } else {
        body.style.overflow = "scroll"
        nav?.className = "close"
        icon[0].src = "./assets/images/Frame 60.svg"
        isNavOpen = false
    }
})
