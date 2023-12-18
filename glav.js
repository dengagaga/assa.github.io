const inp1 = document.querySelector(".form-1-all-inp");
const inp2 = document.querySelector(".form-2-all-inp");
const inp3 = document.querySelector(".form-3-all-inp");
const btn1 = document.querySelector(".form-1-btn");
const btn2 = document.querySelector(".form-2-btn-link");
const btn3 = document.querySelector(".form-3-btn-link");
const btn4 = document.querySelector(".form-4-btn-link");
const contBot = document.querySelector(".container_all-bot");
const contRight = document.querySelector(".container_all-top-rigth");
const contRightTwo = document.querySelector(".container_all-top-rigth-two");
const contRightThree = document.querySelector(".container_all-top-rigth-three");
const contRightFour = document.querySelector(".container_all-top-rigth-four");
const smena = document.querySelector(".container_all-top-rigth-two-link");
const password = document.querySelector(".form-2-btn-password");
const vhod = document.querySelector(".form-3-btn-password");
const vhod2 = document.querySelector(".form-4-btn-password");
const inp4s = document.querySelectorAll(".input-form-4");
inp1.addEventListener("click", () => {
  inp1.placeholder = "";
  inp1.classList.add("ma");
});
inp2.addEventListener("click", () => {
  inp2.placeholder = "";
  inp2.classList.add("ma");
});
inp3.addEventListener("click", () => {
  inp3.placeholder = "";
  inp3.classList.add("ma");
});

window.addEventListener("click", (event) => {
  let user = 1;
  user = false;
  if (event.target == inp1) {
    user = true;
  } else if (event.target == inp2) {
    user = true;
  }
  if (user == false) {
    inp1.placeholder = "Адрес электронной почты";
    inp2.placeholder = "Введите свой пароль";
  }
});

btn1.addEventListener("click", (event) => {
  event.preventDefault();
  if (inp1.value.length < 8) {
    inp1.classList.add("eror");
    inp1.classList.remove("ma");
  }
  if (inp1.value.length > 8) {
    inp1.classList.remove("eror");
    inp1.value = "";
    contRight.style.display = "none";
    contRightTwo.classList.remove("forma-none");
    contBot.classList.add("mt");
    inp1.classList.remove("ma");
  }
});
btn2.onclick = function () {
  if (inp2.value.length < 8) {
    inp2.classList.add("eror");
    btn2.href = "#";
    inp2.classList.remove("ma");
  }
  if (inp2.value.length > 8) {
    inp2.classList.remove("eror");
    btn2.href = "index.html";
    inp2.classList.remove("ma");
  }
};
btn3.onclick = function () {
  if (inp3.value.length < 8) {
    inp3.classList.add("eror");
    btn3.href = "#";
    inp3.classList.remove("ma");
  }
  if (inp3.value.length > 8) {
    inp3.classList.remove("eror");
    contRightThree.classList.add("forma-none");
    contRightFour.classList.remove("forma-none");
  }
};

inp4s.forEach((inp) => {
  inp.onclick = function () {
    inp.classList.add("mh");
  };
  inp.addEventListener("keyup", function () {
    if (inp.value.length == 1) {
      inp.classList.add("mh");
      inp.nextElementSibling.focus();
      inp.classList.remove("eror-red");
    } else if (inp.nextElementSibling == null) return;
  });
});
btn4.onclick = function () {
  inp4s.forEach((inp) => {
    if (inp.value == "") {
      btn4.href = "#";
      inp.classList.add("eror-red");
    } else {
      btn4.href = "index.html";
      inp.classList.remove("eror-red");
      inp.classList.add("mh");
    }
  });
};
smena.addEventListener("click", (event) => {
  event.preventDefault();
  contRight.style.display = "";
  contRightTwo.classList.add("forma-none");
  contBot.classList.remove("mt");
});

password.onclick = function (event) {
  event.preventDefault();
  contRightTwo.classList.add("forma-none");
  contRightThree.classList.remove("forma-none");
  contBot.classList.remove("mt");
  contBot.classList.add("mv");
  inp3.classList.remove("ma");
};
vhod.onclick = function (event) {
  event.preventDefault();
  contRightTwo.classList.remove("forma-none");
  contRightThree.classList.add("forma-none");
  inp3.value = "";
  contBot.classList.remove("mv");
  contBot.classList.add("mt");
  inp2.classList.remove("ma");
};
vhod2.onclick = function (event) {
  event.preventDefault();
  contRightTwo.classList.remove("forma-none");
  contRightFour.classList.add("forma-none");
  inp3.value = "";
  contBot.classList.remove("mv");
  contBot.classList.add("mt");
  inp3.classList.remove("ma");
};
