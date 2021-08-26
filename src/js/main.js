document.addEventListener("DOMContentLoaded", () => {
  const sliderIMG = new Swiper(".slider-img", {
    // Optional parameters
    //   autoplay: {
    //     delay: 10000,
    //   },
    loop: false,
    speed: 3400,
    parallax: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: ".slider-pagination-count .total",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return `0${total}`;
      },
    },
  });
  const sliderText = new Swiper(".slider-text", {
    loop: false,
    speed: 3400,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });

  sliderIMG.controller.control = sliderText;
  sliderText.controller.control = sliderIMG;

  const gear = document.querySelector(".slider-gear");

  sliderText.on("slideNextTransitionStart", function () {
    gsap.to(gear, 2.8, {
      rotation: "+=30",
    });
  });
  sliderText.on("slidePrevTransitionStart", function () {
    gsap.to(gear, 2.8, {
      rotation: "-=30",
    });
  });

  // slide Change

  const curnum = document.querySelector(".slider-pagination-count .current");
  const pagcur = document.querySelector(".slider-pagination-current");
  sliderText.on("slideChange", function () {
    let index = sliderText.realIndex + 1;
    gsap.to(curnum, 0.2, {
      force3D: true,
      y: -10,
      opacity: 0,
      //onComplete: function()
    });
    gsap.to(curnum, 0.2, {
      force3D: true,
      y: 0,
      opacity: 1,
      delay: 0.3,
    });
  });
});

let unlock = true;

//=================
//Menu
const wrapperMenu = document.querySelector(".header-menu__wrapper");

let iconMenu = document.querySelector(".header-menu__icon");
//let menuBody = document.querySelector(".nav");
let body = document.querySelector("body");

if (wrapperMenu != null) {
  let delay = 500;
  wrapperMenu.addEventListener("click", function (e) {
    if (unlock) {
      body.classList.add("_lock");
      iconMenu.classList.toggle("_active");
      // menuBody.classList.toggle("_active");
    }
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll(".nav__link");

// navLink.forEach((n) =>
//   n.addEventListener("click", () => {
//     body.classList.remove("_lock");
//     menuBody.classList.remove("_active");
//     iconMenu.classList.remove("_active");
//   })
// );

// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
  // Создаем элемент canvas
  let elem = document.createElement("canvas");
  // Приводим элемент к булеву типу
  if (!!(elem.getContext && elem.getContext("2d"))) {
    // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  }
  // Иначе Webp не используем
  return false;
}

if (canUseWebp) {
  body.classList.add("webp");
} else {
  body.classList.add("no-swebp");
}
