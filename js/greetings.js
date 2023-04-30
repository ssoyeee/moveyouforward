// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const curhour = new Date();
//const loginButton = document.querySelector("#login-form button");
const HIDDEN_CLASSNAME = "hidden"; //uppercase means all values are string
//const link = document.querySelector("a");
const USERNAME_KEY = "username"

// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);    
//     alert("clicked!");
// }

function onLoginSubmit(event){
    event.preventDefault(); // it stops that the browser usually will do
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    //greeting.innerText="Hi " + username;
    paintGreeting(typedUsername);
}
    // console.log(username);
    // if(username === ""){
    //     console.log("Please write your name.");
    //     // console.dir(loginInput.value);
    // // console.log("clcik!");
    // }else if(username.length > 15){
    //     alert("Your name is too long.");
    // }
    
function paintGreeting(savedUsername){
   // const savedUsername = localStorage.getItem(USERNAME_KEY);
   //f()
   if (curhour.getHours()>12){
    greeting.innerText=`Good afternoon, ${savedUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
   }if (curhour.getHours()>6 && curhour.getHours()<12){
    greeting.innerText=`Good morning, ${savedUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
   }
}
//loginButton.addEventListener("click", onLoginBtnClick);
//loginForm.addEventListener("submit", onLoginSubmit); //by doing nothing, javascript will call our function with some information, which is event object.
//link.addEventListener("click", handleLinkClick);
//handleLinkClick({information about the event that just happened})
const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);

if(savedUsername === null){
//show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
//show the greetings
    greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreeting(savedUsername);
}