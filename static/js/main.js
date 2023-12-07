/** @format */

// const hamburgerIcon = document.querySelector(".hamburger-icon");
// const hamburgerMenu = document.querySelector(".hamburger-section");
const navBar = document.querySelector(".navbar");
const showPage = document.querySelector(".home-page"); //just add this in js file
// const hamburgerLink = document.querySelectorAll(".hamburger-link-section");
// const closeHamburger = document.querySelector("#close-btn");

//When we click on the hamburger menu the hamburger menu should appear
// hamburgerIcon.addEventListener("click", () => {
//   hamburgerMenu.classList.toggle("hamburger-section-show");
//   showPage.classList.toggle("home-page-hide"); //same here
//   navBar.classList.toggle("hamburger-navbar");
// });

// hamburgerLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     navBar.classList.toggle("hamburger-navbar");
//     hamburgerMenu.classList.toggle("hamburger-section-show");
//     showPage.classList.toggle("home-page-hide"); //same here
//   });
// });

// closeHamburger.addEventListener("click", () => {
//   console.log("clicked!");
//   navBar.classList.toggle("hamburger-navbar");
//   hamburgerMenu.classList.toggle("hamburger-section-show");
//   showPage.classList.toggle("home-page-hide"); //same here
// });

var currentTab = 0; // Current tab is set to be the first tab (0)
var tab = [0];
var numOfMem = 0;
var acceptSubmit = 1;
// var max_Participants = window.maxParticipants;
// var min_Participants = window.minParticipants;
// message(maxParticipants);
// message(minParticipants);

showTab(currentTab); // Display the current tab

function message(s) {
  var msg_container = document.getElementById("messages1");
  msg_container.style.display = "block";
  msg_container.innerHTML = `<li class="msg1">${s}</li>`;
}

function showTab(n) {
  if (tab.indexOf(n) == -1) {
    return false;
  }

  var head_form = document.getElementsByClassName("mem_form")[n - 1];
  var mem_form = document.getElementsByClassName("mem_form")[n];
  var next_mem_form = document.getElementsByClassName("mem_form")[n + 1];

  if (n == 0) {
    document.getElementsByClassName("fake_arr_back")[0].style.display = "flex";
    document.getElementsByClassName("button-deletemember")[0].style.display =
      "none";
    document.getElementsByClassName("member_back")[0].style.display = "none";
    document.getElementsByClassName("member_next")[0].style.display = "none";

    mem_form.style.display = "block";

    if (tab.indexOf(n + 1) != -1) {
      next_mem_form.style.display = "none";
      document.getElementsByClassName("member_next")[0].style.display = "flex";
    }
  } else {
    document.getElementsByClassName("fake_arr_back")[0].style.display = "none";
    document.getElementsByClassName("member_back")[0].style.display = "flex";
    document.getElementsByClassName("button-deletemember")[0].style.display =
      "flex";
    document.getElementsByClassName("member144444_next")[0].style.display = "none";

    head_form.style.display = "none";
    mem_form.style.display = "block";
    if (tab.indexOf(n + 1) != -1) {
      next_mem_form.style.display = "none";
      document.getElementsByClassName("member_next")[0].style.display = "flex";
    }
  }
  // document.getElementsByClassName("reg")[0].scrollIntoView({ block: 'center' });
}

function appendForms() {
  var code = `
      
      <div class="row-view mem_form" >

            <div class="sections "  >
                <div class="member_back" onclick="nextPrev(-1)">
                    <img src="{% static '/images/member_back.png' %}">
                </div>
                <div class="fake_arr_back"></div>
                <div class="member_next" onclick="nextPrev(1)">
                    <img style="transform: rotate(180deg);" src="{% static '/images/member_back.png' %}">
                </div>
                <h1 style="font-weight:600; font-size: 25px;border-bottom:4px solid #A81617;width:175px; ">Member No.<span class="member_no" style="color:#A81617;">1</span></h1>
                <p style="padding-top:1vh;">All fields marked with <span class="red-star"> *</span> are mandatory.</p>
            </div>
            <div class="sections "  >
            </div>
           
        </div>
        <br><br>
        <div class="row-view">
            <div class="sections ">
                
                
                <div class="member_form">

                    <p>
                        <label for="name_member" class="head-style ">Name</label>
                        <span class="red-star"> *</span>

                        <input class="input-text-field " required type="text" name="name" />
                    </p>
                    <p>
                        <label for="phone_member" class="head-style ">Phone</label>
                        <span class="red-star"> *</span>

                        <input class="input-text-field " required type="email" name="phoneNumber" />
                    </p>
                </div>

            </div>
            
            <div class="sections">
                
                <div class="member_form">

                    <p>
                        <label for="gender_member" class="head-style ">Gender</label>
                        <span class="red-star"> *</span>

                        <input class="input-text-field " required type="text" name="gender" />
                    </p>
                    <p>
                        <label for="email_member" class="head-style ">Email ID</label>
                        <span class="red-star"> *</span>
                        <input class="input-text-field " required type="text" name="email" />
                    </p>
                </div>
            </div>
            

        </div>
        <br>
        <div class="row-view">
            <div class="sections">
                    
                <div class="member_form">

                    <p>
                        <label for="city_member" class="head-style ">City</label>
                        <span class="red-star"> *</span>

                        <input class="input-text-field " required type="text" name="gender" />
                    </p>
                    
                </div>
            </div>
            <div class="sections">
                <p>
                    <label for="postal_code" class="head-style ">Postal Code(Optional)</label>
                    
                    <input class="input-text-field " required type="text" name="email" />
                </p>
            </div>
        </div>
        <br>
        <div class="row-view">
            <div class="sections "> 
                 
                <button class="button-addmember" style="margin-bottom:0rem;" onclick="addMem()">
                <img
                    class="person-addmember"
                    src="{% static 'images\Frame 74.png' %}"
                />
                <p style="margin-bottom:0rem;" > Member</p>
                </button>
            </div>
            <div class="sections ">
            </div>
        </div>

  `;
  form = document.getElementById("info");
  console.log(3)
  form.insertAdjacentHTML("beforeend", code);
}

function addMember(i, n) {
  console.log(2);
  appendForms();

  var head_form = document.getElementsByClassName("mem_form")[i];
  var mem_form = document.getElementsByClassName("mem_form")[n];

  document.getElementsByClassName("fake_arr_back")[0].style.display = "none";
  document.getElementsByClassName("member_back")[0].style.display = "flex";
  document.getElementsByClassName("button-deletemember")[0].style.display =
    "flex";
  head_form.style.display = "none";
  mem_form.style.display = "block";
  // document.getElementsByClassName("reg")[0].scrollIntoView({ block: 'center' });
}

function nextPrev(n) {
  currentTab = currentTab + n;

  if (tab.indexOf(currentTab) == -1 && n == 1) {
    message("No Page Exists");
    remMsg();
    currentTab = currentTab - n;
    return false;
  }

  console.log(currentTab);

  if (currentTab > maxParticipants) {
    // document.getElementById("info").submit();
    return false;
  }

  showTab(currentTab);
}

function addMem() {
  e.preventDefault();
  console.log(1);
  if (!validateForm()) {
    message("Please Fill the Fields");
    remMsg();
    return false;
  }
  var form = document.getElementById("info");
  if (!form.checkValidity()) {
    message("Please Fill the Fields correctly");
    remMsg();
    return false;
  }
  if (numOfMem + 1 > maxParticipants) {
    message("Maximum Limit Exceeded for the Competition");
    remMsg();
    return false;
  }

  // console.log(document.getElementById('team_heads_name').value);
  // console.log(0);
  var initialTab = currentTab;

  numOfMem++;
  var i;

  for (i = currentTab; i < tab.length; i++) {
    currentTab++;
  }

  tab.push(currentTab);
  // console.log(tab);
  // console.log(currentTab);

  addMember(initialTab, currentTab);
}

function delMem() {
  console.log(tab);
  console.log(currentTab);
  var i;

  // if (numOfMem != 0 && currentTab != numOfMem) {
  //   document.getElementsByClassName("mem-no")[currentTab+1].innerHTML = `<p>${
  //     currentTab
  //   }</p>`;
  // }

  for (i = currentTab + 1; i < tab.length; i++) {
    tab[i]--;
    document.getElementsByClassName("member_no")[
      i - 1
    ].innerHTML = `<p>${tab[i]}</p>`;
  }

  var remForm = document.getElementsByClassName("mem_form")[currentTab];
  remForm.parentNode.removeChild(remForm);

  console.log(tab);

  console.log(tab.splice(currentTab, 1));

  console.log(tab);

  numOfMem--;
  currentTab--;

  showTab(currentTab);
}


// var heads_program_enrolled = document.getElementById("heads_program_enrolled");
var heads_institute_name = document.getElementById("heads_institute_name");
var heads_year_of_passing = document.getElementById("heads_year_of_passing");
var heads_contact_number = document.getElementById("heads_contact_number");

var heads_email_value,
  heads_institute_name_value,
  heads_year_of_passing_value,
  heads_contact_number_value;

// var  heads_program_enrolled_value;add

heads_email.addEventListener("input", function () {
  heads_email_value = heads_email.value;
});

heads_contact_number.addEventListener("input", function () {
  heads_contact_number_value = heads_contact_number.value;
});

// heads_program_enrolled.addEventListener("input", function () {
//   heads_program_enrolled_value = heads_program_enrolled.value;
// });

heads_institute_name.addEventListener("input", function () {
  heads_institute_name_value = heads_institute_name.value;
});

heads_year_of_passing.addEventListener("input", function () {
  heads_year_of_passing_value = heads_year_of_passing.value;
});

function submitForm() {
  if (acceptSubmit != 1) {
    return false;
  }
  if (!validateForm()) {
    message("Please Fill the Fields correctly");
    remMsg();
    return false;
  }
  if (numOfMem < minParticipants) {
    message("Please Add minimum number of participants");
    remMsg();
    return false;
  }
  var form = document.getElementById("info");
  if (form.checkValidity()) {
    form.submit();
    acceptSubmit = 0;
    document.getElementsByClassName(
      "register-button"
    )[0].innerHTML = `<p>Please Wait...</p>`;
  } else {
    message("Please Fill the Fields correctly");
    remMsg();
    return false;
  }
}

// function sameAsLeader(c) {
//   if (c == "e") {
//     document.getElementsByClassName("email")[currentTab - 1].value =
//       heads_email_value;
//   }

//   if (c == "c") {
//     document.getElementsByClassName("contact_number")[currentTab - 1].value =
//       heads_contact_number_value;
//   }

//   // if (c == "p") {
//   //   document.getElementsByClassName("program_enrolled")[currentTab - 1].value =
//   //     heads_program_enrolled_value;
//   // }

//   if (c == "i") {
//     document.getElementsByClassName("institute_name")[currentTab - 1].value =
//       heads_institute_name_value;
//   }

//   if (c == "y") {
//     if (
//       heads_year_of_passing_value != "" ||
//       heads_year_of_passing_value != undefined
//     ) {
//       console.log(heads_year_of_passing_value);
//       document.getElementsByClassName("year_of_passing")[currentTab - 1].value =
//         heads_year_of_passing_value || "";
//     }
//   }
// }

function validateForm() {
  // This function deals with validation of the form fields
  var u,
    v,
    w,
    x,
    y,
    i,
    valid = true;
  v = document.getElementsByClassName("left-input-field");
  x = document.getElementsByClassName("right-input-field");

  // A loop that checks every input field in the current tab:
  for (i = 0; i < x.length; i++) {
    if (i % 3 == 0) {
      // console.log("jdf");
      continue;
    }
    // console.log(404);

    y = x[i].getElementsByTagName("input");

    // If a field is empty...
    if (y[0].value === "") {
      console.log(y);
      // add an "invalid" class to the field:
      y[0].className += " invalid";
      // y[0].scrollIntoView({ block: "center" });
      // console.log(y[i]);
      // and set the current valid status to false
      valid = false;
    }
  }

  for (i = 0; i < x.length; i++) {
    if (i % 3 != 0) {
      continue;
    }
    u = x[i].getElementsByTagName("select");
    // If a field is empty...
    if (u[0].value === "") {
      // add an "invalid" class to the field:
      u[0].className += " invalid";
      // u[0].scrollIntoView({ block: "center" });
      // console.log(u[i]);
      // and set the current valid status to false
      valid = false;
    }
  }
  for (i = 0; i < v.length; i++) {
    if (maxParticipants == 0) {
      if (i % 3 == 2) {
        continue;
      }
    }
    if (i % 3 == 0) {
      continue;
    }
    w = v[i].getElementsByTagName("input");
    // If a field is empty...
    if (w[0].value === "") {
      // add an "invalid" class to the field:
      w[0].className += " invalid";
      // y[0].scrollIntoView({ block: "center" });
      // console.log(w[i]);
      // and set the current valid status to false
      valid = false;
    }
  }

  return valid;
}
