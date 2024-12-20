// Önce fonksiyonu tanımlayalım
function applyStylesForSmallScreens() {
  const targetDiv = document.querySelector(".right__bottom");
  const elementsToHide = document.querySelectorAll(".author");
  const elementsToHide2 = document.querySelectorAll(".share__Box");
  const elementsToShow = document.querySelectorAll(".mobileMenu");

  if (window.innerWidth <= 480) {
    targetDiv.style.backgroundColor = "hsl(217, 19%, 35%)";
    elementsToHide.forEach((element) => (element.style.display = "none"));
    elementsToHide2.forEach((element) => (element.style.display = "block")); // Değiştirildi
    elementsToShow.forEach((element) => (element.style.display = "flex"));
  } else {
    targetDiv.style.backgroundColor = "";
    elementsToHide.forEach((element) => (element.style.display = "flex"));
    elementsToHide2.forEach((element) => (element.style.display = "none"));
    elementsToShow.forEach((element) => (element.style.display = "none"));
  }
}

// Tek bir click event listener kullanalım
document.querySelector(".share").addEventListener("click", () => {
  const shareBox = document.querySelector(".share__Box");
  const isMobile = window.innerWidth <= 480;

  if (isMobile) {
    const targetDiv = document.querySelector(".right__bottom");
    const author = document.querySelector(".author");
    const mobileMenu = document.querySelector(".mobileMenu");

    if (
      mobileMenu.style.display === "none" ||
      mobileMenu.style.display === ""
    ) {
      targetDiv.style.backgroundColor = "hsl(217, 19%, 35%)";
      author.style.display = "none";
      mobileMenu.style.display = "flex";
    } else {
      targetDiv.style.backgroundColor = "";
      author.style.display = "flex";
      mobileMenu.style.display = "none";
    }
  } else {
    // Desktop davranışı
    shareBox.style.display =
      shareBox.style.display === "none" || shareBox.style.display === ""
        ? "flex"
        : "none";
  }
});

// Sayfa yüklendiğinde ilk kontrol
applyStylesForSmallScreens();

// Ekran boyutu değiştiğinde kontrol
window.addEventListener("resize", applyStylesForSmallScreens);
