const plus1=document.querySelector(".plus-1");
const minus1=document.querySelector(".minus-1");
const num1=document.querySelector(".num-1");
const num_input1 = document.querySelector(".num_input-1")
let a=0;


plus1.addEventListener("click",()=>{
    a++;
    num1.innerHTML=a;
    num_input1.val=a;
    });
minus1.addEventListener("click",()=>{
    a--;
    a=(a<0)?0:a;
    num1.innerHTML=a;
    num_input1.val = a;
    
});
const plus2=document.querySelector(".plus-2");
const minus2=document.querySelector(".minus-2");
const num2=document.querySelector(".num-2");
const num_input2 = document.querySelector(".num_input-2");
let b=0;
plus2.addEventListener("click",()=>{
    b++;
    num2.innerHTML=b;
    num_input2.val=b;
    });
minus2.addEventListener("click",()=>{
    b--;
    b=(b<0)?0:b;
    num2.innerHTML=b;
    num_input2.val = b;
    
});


const plus3=document.querySelector(".plus-3");
const minus3=document.querySelector(".minus-3");
const num3=document.querySelector(".num-3");
const num_input3 = document.querySelector(".num_input-3");
let c=0;
plus3.addEventListener("click",()=>{
    c++;
    num3.innerHTML=c;
    num_input3.val=c;
    });
minus3.addEventListener("click",()=>{
    c--;
    c=(c<0)?0:c;
    num3.innerHTML=c;
    num_input3.val = c;
});


const plus4=document.querySelector(".plus-4");
const minus4=document.querySelector(".minus-4");
const num4=document.querySelector(".num-4");
const num_input4 = document.querySelector(".num_input-4");

let d=0;

plus4.addEventListener("click",()=>{
    d++;
    num4.innerHTML=d;
    num_input4.val=d;
    });
minus4.addEventListener("click",()=>{
    d--;
    d=(d<0)?0:d;
    num4.innerHTML=d;
    num_input4.val = d;
    
});





document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const colorChangeDivs = document.querySelectorAll('.artist-checkbox');

    checkboxes.forEach(function (checkbox, index) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                colorChangeDivs[index].style.backgroundColor = " #34D67E4D";
            } else {
                colorChangeDivs[index].style.backgroundColor = "initial";
            }
        });
    });
});







document.querySelector("#popup-open-button").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup-close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});


document.querySelector("#popup-open-button-mobile-view").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".register-button-mobile-view").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});