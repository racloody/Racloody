let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid-item");
  let clickedImageName = gridItemClicked.id.replace(/\\/g, '/'); // Ensure compatibility with folder structure
  popupBg.classList.add("active");
  popupImg.src = `images/${clickedImageName}.webp`; // Corrected path
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);

// Close popup with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popupBg.classList.contains("active")) {
    closePopup();
  }
});