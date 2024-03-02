const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi elit".split(" ");

const textField = document.querySelector(".textField");
const vals = [...document.querySelectorAll(".val")];
const range = [...document.querySelectorAll(".range")];
const items = [...document.querySelectorAll(".item")];
const select = document.querySelector("select");
const btn = document.querySelector("button");

range.forEach(item => {
    item.addEventListener("input", (e) => {
        if (e.target == range[0]) {
            vals[0].textContent = Number(e.target.value);
        }
        if (e.target == range[1]) {
            vals[1].textContent = Number(e.target.value);
        }
        textField.innerHTML = "";
    })
})

let swich = 0;
vals[2].addEventListener("click", () => {
    if (swich) {
        select.style.display = "none";
        vals[2].innerHTML = "X";
        swich = 0;
    } else {
        vals[2].innerHTML = '<span class="material-symbols-outlined">check</span>'
        select.style.display = "flex";
        swich = 1;
    }
})
let para = "";
let finalPara = "";

btn.addEventListener("click", () => {
    for (let j = 0; j < Number(vals[0].textContent); j++) {
        for (let i = 0; i < Number(vals[1].textContent); i++) {
            para += string[i] + " ";
        }
        if (vals[2].innerHTML == "X") {
            finalPara += `<p>${para}</p><br>`;
        } else if (0) {}
        para = "";
    }
    textField.innerHTML = finalPara;
    finalPara = "";
})