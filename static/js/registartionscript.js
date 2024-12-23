let menuBtn = document.querySelector('.menubtn');
let navbar = document.querySelector('.body .header  .links');

menuBtn.onclick =() =>{
  menuBtn.classList.toggle('uil-times');
  navbar.classList.toggle('active');

}

const plus1=document.querySelector(".plus-1");
const minus1=document.querySelector(".minus-1");
const num1=document.querySelector(".num-1");

let a=0;


plus1.addEventListener("click",()=>{
    a++;
    num1.innerHTML=a;
    });
minus1.addEventListener("click",()=>{
    a--;
    a=(a<0)?0:a;
    num1.innerHTML=a;
    
});
const plus2=document.querySelector(".plus-2");
const minus2=document.querySelector(".minus-2");
const num2=document.querySelector(".num-2");

let b=0;
plus2.addEventListener("click",()=>{
    b++;
    num2.innerHTML=b;
    });
minus2.addEventListener("click",()=>{
    b--;
    b=(b<0)?0:b;
    num2.innerHTML=b;
    
});


const plus3=document.querySelector(".plus-3");
const minus3=document.querySelector(".minus-3");
const num3=document.querySelector(".num-3");

let c=0;
plus3.addEventListener("click",()=>{
    c++;
    num3.innerHTML=c;
    });
minus3.addEventListener("click",()=>{
    c--;
    c=(c<0)?0:c;
    num3.innerHTML=c;
});


const plus4=document.querySelector(".plus-4");
const minus4=document.querySelector(".minus-4");
const num4=document.querySelector(".num-4");


let d=0;

plus4.addEventListener("click",()=>{
    d++;
    num4.innerHTML=d;
    });
minus4.addEventListener("click",()=>{
    d--;
    d=(d<0)?0:d;
    num4.innerHTML=d;
    
});


let member = 0;
function addMember() {
    member++;


    const detailsContainer = document.querySelector('.teamdetails');

    const memberDiv = document.createElement('div');
    
    memberDiv.innerHTML = `
        <h3 class="subheading">Member-${member}</h3>
        <div class="details">
            <div>
                <h4 class="subsubheading">Full Name</h4>
                <input type="text" placeholder="Enter Full Name...">
            </div>
            <div>
                <h4 class="subsubheading">Gender</h4>
                <select class="gender-dropdown">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <h4 class="subsubheading">Contact Number</h4>
                <input type="text" placeholder="Enter Phone Number...">
            </div>
            <div>
                <h4 class="subsubheading">Email Id</h4>
                <input type="text" placeholder="Enter Email Id...">
            </div>
            <div class="removemember">
                <button class="remove-btn">Remove Member</button>
            </div>
        </div>
    `;

    detailsContainer.appendChild(memberDiv);


    const removeBtn = memberDiv.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
        memberDiv.remove();
    });
}


function validateForm() {
    const errors = [];
    const teamName = document.querySelector('input[placeholder="Enter Team Name..."]');
    const city = document.querySelector('input[placeholder="Enter City Name..."]');
    const phoneNumber = document.getElementById("phone-number");
    const emailInput = document.querySelector('input[placeholder="Enter Email Id..."]');

    if (!teamName || !teamName.value.trim()) {
        errors.push("Team Name is required.");
    }
    if (!city || !city.value.trim()) {
        errors.push("City is required.");
    }
    if (phoneNumber && !/^\d{10}$/.test(phoneNumber.value.trim())) {
        errors.push("Phone number must be 10 digits.");
    }
    if (emailInput && !/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        errors.push("Enter a valid email address.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}

document.querySelector("form").addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

document.querySelector("form").addEventListener("submit", function (event) {
    const phoneNumber = document.getElementById("phone-number").value;
    if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
        event.preventDefault();
        alert("Phone number must be 10 digits.");
    }
});

