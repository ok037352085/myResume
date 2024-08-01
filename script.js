const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        navigation.classList.remove("active");
        menuBtn.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const cardBody = document.querySelectorAll(".card-body");
cardBody.forEach((card) => {
  const p = card.querySelector("p");
  p.classList.add("projectdetail");
});
