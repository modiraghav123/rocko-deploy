document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const video = hero.querySelector("video");
  const text = document.querySelector(".hero-heading");

  const controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: hero,
    triggerHook: 0,
  })
    .setPin(hero)
    .addTo(controller);

  let scrub = 0.1;
  let scrollPos = 0;
  let delay = 0;

  scene.on("update", (e) => {
    scrollPos = e.scrollPos / 1000;
  });

  setInterval(() => {
    delay += (scrollPos - delay) * scrub;
    text.style.opacity = 1 - delay*0.15;
    video.currentTime = delay;
  }, 33.3);
});
let menuBtn = document.querySelector('.menubtn');
let navbar = document.querySelector('.body .header  .links');

menuBtn.onclick =() =>{
  menuBtn.classList.toggle('uil-times');
  navbar.classList.toggle('active');

}












  