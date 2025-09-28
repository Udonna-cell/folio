const loaderScreen = document.querySelector<HTMLElement>("section#load");

if (loaderScreen) {
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    loaderScreen.style.display = "none";
    document.body.style.overflow = "auto";
  }, 5000);
}