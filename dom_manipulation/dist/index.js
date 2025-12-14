"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const form = document.querySelector('form');
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const div1 = document.getElementById("div1");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        userName: name.value,
        userEmail: email.value
    };
    div1.innerHTML = `
    <span>Name : ${data.userName}</span>
    <span>Email : ${data.userEmail}</span>
    
    `;
});
//# sourceMappingURL=index.js.map