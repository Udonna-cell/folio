let burger = document.querySelector(".burger");
let body = document.body;
let isNavOpen = false;

burger?.addEventListener("click", () => {
    let icon = burger!.querySelector("img");
    let nav = document.querySelector("nav");

    if (!isNavOpen) {
        body.style.overflow = "hidden";
        nav?.classList.add("open");
        nav?.classList.remove("close")
        icon!.src = "./assets/images/Frame 60 (1).svg";
    } else {
        body.style.overflow = "scroll";
        nav?.classList.add("close")
        nav?.classList.remove("open");
        icon!.src = "./assets/images/Frame 60.svg";
    }

    isNavOpen = !isNavOpen; // Toggle the state 
});
