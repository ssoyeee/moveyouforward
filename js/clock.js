const clock = document.querySelector("h1#clock");

// function sayHello(){
//     console.log("hello");
// }

//setInterval(sayHello, 5000) //execute this function every 5sec
//setTimeout(sayHello, 5000); //execute this function after 5sec

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //Surround the number-String()
    const minutes = String(date.getMinutes()).padStart(2,"0"); //if you want to make this two digits, use padStart- add 0 in front of the string.
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //show clock immediately
setInterval(getClock, 1000); //after that, call clock every 1sec