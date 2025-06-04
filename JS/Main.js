// TABS in MAIN:

const paginationTab = document.querySelectorAll(".pagination__item");
const posts = document.querySelectorAll(".posts__container");
const prevBtn = document.querySelector(".pagination__btn-prev");
const nextBtn = document.querySelector(".pagination__btn-next");
let currentTabIndex = 0;

function switchTab(index) {
  paginationTab.forEach((btn) => btn.classList.remove("active"));
  posts.forEach((item) => item.classList.remove("active"));

  paginationTab[index].classList.add("active");
  posts[index].classList.add("active");
  currentTabIndex = index;
}

paginationTab.forEach((item, index) => {
  item.addEventListener("click", () => switchTab(index));
});

prevBtn.addEventListener("click", () => {
  const newIndex =
    (currentTabIndex - 1 + paginationTab.length) % paginationTab.length;
  switchTab(newIndex);
});

nextBtn.addEventListener("click", () => {
  const newIndex = (currentTabIndex + 1) % paginationTab.length;
  switchTab(newIndex);
});

switchTab(0);

// MENU BURGER:

const btnBurger = document.querySelector(".header__burger");
const navList = document.querySelector(".header__list");

btnBurger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navList.classList.remove("active");
  }
});

// HEADER SCROLL

const headerScroll = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    headerScroll.classList.add("scroll");
  } else {
    headerScroll.classList.remove("scroll");
  }
});

// INSTAGRAM SLIDER

let instagramImg = document.querySelectorAll(".instagram__img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let currentIndex = 0;

instagramImg[currentIndex].classList.add("instagram__img-active");

btnPrev.addEventListener("click", () => {
  for (let i = 0; i < instagramImg.length; i++) {
    instagramImg[i].classList.remove("instagram__img-active");
  }
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = instagramImg.length-1;
  }
  instagramImg[currentIndex].classList.add("instagram__img-active");
});

btnNext.addEventListener("click", () => {
  for (let i = 0; i < instagramImg.length; i++) {
    instagramImg[i].classList.remove("instagram__img-active");
  }
  currentIndex++;
  if (currentIndex > instagramImg.length-1) {
    currentIndex = 0;
  }
  instagramImg[currentIndex].classList.add("instagram__img-active");
});
