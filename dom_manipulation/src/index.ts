const form = document.querySelector('form') as HTMLFormElement;
const name = document.querySelector("#name") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;
const div1 = document.getElementById("div1") as HTMLDivElement;

form.addEventListener('submit', (event:Event) => {
    event.preventDefault();
    const data = {
        userName: name.value,
        userEmail: email.value
    };
    div1.innerHTML = `
    <span>Name : ${data.userName}</span>
    <span>Email : ${data.userEmail}</span>
    
    `
})