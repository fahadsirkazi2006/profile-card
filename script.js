alert("welcome to my profile car!")


let msg=document.getElementById("message");
msg.textContent="IT student at PCCE 🧑🏻‍💻";


let button=document.getElementById("your-button-id");
let clickcounter=0;


button.addEventListener("click",function(){
 clickcounter++;

 if (clickcounter==1){
    msg.textContent="Currently in second year 🧑🏻‍🎓";
    
 }
 else if(clickcounter==2){
    msg.textContent="Tech enthusiast 🧑🏻‍💻"
 }else {
    msg.textContent="THANK YOU!! 😊"
 }
});

let lightBtn=document.getElementById("lightBtn");
let darkBtn= document.getElementById("darkBtn");
let card=document.querySelector(".card");

lightBtn.addEventListener("click",function(){
   card.style.backgroundColor = "#ffffff";
   card.style.color = "#333333";
   console.log("light theme is on");
   document.body.style.backgroundColor="rgb(243, 232, 232)";
   document.body.style.color="rgb(243, 232, 232)";
   
   
});

darkBtn.addEventListener("click",function(){
   card.style.backgroundColor = "hsla(0, 0%, 0%, 1.00)";
   card.style.color = "#fffefeff";
   console.log("dark mode is on");
   document.body.style.backgroundColor="#4f4b4bff";
   document.body.style.color="#4f4b4bff";

});

let toggleBtn=document.getElementById("toggleBtn");
let hiddenInfo=document.getElementById("hidden-info");

toggleBtn.addEventListener("click",function(){
hiddenInfo.classList.toggle("hidden");

});