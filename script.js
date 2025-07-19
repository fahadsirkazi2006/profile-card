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


