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

//text generate functionalities
const tags = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "UL", "OL"];
tags.forEach(tag => select.innerHTML += `<option value="${tag}">${tag}</option>`);

let selectedTag = "";
let para = "";
let finalPara = "";

select.addEventListener("input", (e) => {
    selectedTag = e.target.value;
    finalPara = "";
})


const forHtags = (i) => {
    if (selectedTag == tags[i]) {
        finalPara += `<${tags[i]}>${para}</${tags[i]}><br>`;
    }
}
const forListTags = (i) => {
    if (selectedTag == tags[i]) {
        finalPara += `<li>${para}</li>`;
    }
}

btn.addEventListener("click", () => {
    for (let j = 0; j < Number(vals[0].textContent); j++) {
        for (let i = 0; i < Number(vals[1].textContent); i++) {
            para += string[i] + " ";
        }
        if (vals[2].innerHTML == "X") {
            finalPara += `${para}<br>`;
        }
        forHtags(0);
        forHtags(1);
        forHtags(2);
        forHtags(3);
        forHtags(4);
        forHtags(5);
        forHtags(6);
        forListTags(7);
        forListTags(8);
        para = "";
    }
    if (selectedTag == tags[8]) {
        textField.innerHTML = `<ol>${finalPara}</ol>`;
    }
    else if (selectedTag == tags[7]) {
        textField.innerHTML = `<ul>${finalPara}</ul>`;
    } else {
        textField.innerHTML = finalPara;
    }
    finalPara = "";
})


