let menuBtn = document.querySelector('.menubtn');
let navbar = document.querySelector('.body .header  .links');

menuBtn.onclick =() =>{
  menuBtn.classList.toggle('uil-times');
  navbar.classList.toggle('active');

}