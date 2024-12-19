document.querySelector(".share").addEventListener("click", () => {
  const share = document.querySelector(".share__Box");
  if (share.style.display === "none" || share.display === "") {
    share.style.display = "block";
  } else {
    share.style.display = "none";
  }
});
