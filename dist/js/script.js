const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});


const headerb =document.querySelector(".header") ;
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if(window.pageYOffset >=100){
    headerb.classList.add("shadowb")
  }
  else{
    headerb.classList.remove("shadowb")
  }
})

// ----COFFE TAB----//
const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee__tab__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}

// // =====LINKS======//
// const links = document.querySelectorAll(".links__drop__item h4");
// links.forEach((baba) => {
//   baba.addEventListener("click", () => {
//     baba.nextElementSibling.classList.toggle("open");
//     baba.querySelector("i").classList.toggle("open");
//   });
// });

const baba = document.querySelectorAll(".links__item h4")
baba.forEach((baba) => {
    baba.addEventListener("click", () => {
        baba.nextElementSibling.classList.toggle("open");
        baba.querySelector("i").classList.toggle("open");
    })
})