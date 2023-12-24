const imgs = document.querySelectorAll(".gallery .card > img");
const fullPage = document.querySelector("#fullPage");

document
  .querySelector("#contactBtn")
  .addEventListener("click", scrollToContact);

function scrollToContact() {
  document
    .querySelector("#contact")
    .scrollIntoView({ behavior: "smooth", block: "center" });
}

// check for clicks on images and display full screen
imgs.forEach((img) => {
  img.addEventListener("click", function () {
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
  });
});

// check for click on full screen and exit full screen img
document.querySelector("#fullPage").addEventListener("click", function () {
  fullPage.style.display = "none";
});
