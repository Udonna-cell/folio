let loaderScreen = document.querySelector("section#load")
document.body.style.overflow = "hidden"
setTimeout(() => {
  loaderScreen.style.display = "none"
  document.body.style.overflow = "scroll"
}, 5000);