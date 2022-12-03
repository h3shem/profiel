let listnav = document.querySelector(".listnav");
let nav = document.querySelector(".nav");
let switech =document.querySelector(".switech");
listnav.addEventListener("click",viwelist);
switech.addEventListener("click",swi);
function viwelist(){
    nav.classList.add("viewdiv");
    listnav.classList.add("hideviwe");
    switech.classList.add("viewdiv");
    
}
function swi(){
    switech.classList.remove("viewdiv");
    listnav.classList.remove("hideviwe");
    listnav.classList.add("anmetiondiv");
    nav.classList.remove("viewdiv");

}

//section servies


var vone=document.querySelector(".vone");
var btn1 = document.getElementById('dediles1');
btn1.onclick = function () { 

vone.classList.add("viweaction");



 };

 var hidspeed = document.getElementById('hidspeed');
 hidspeed.onclick = function () { 
    vone.classList.add("viweaction");
    vone.classList.remove("viweaction");
  };

 //itemseeyou

 var vtow=document.querySelector(".vtow");
var btn2 = document.getElementById('dediles2');
btn2.onclick = function () { 

    vtow.classList.add("viweaction");
 };

 var hidSeo = document.getElementById('hidSeo');
 hidSeo.onclick = function () { 
 
    vtow.classList.remove("viweaction");
  };

 //userinterface
 
 var vthree=document.querySelector(".vthree");
var btn3 = document.getElementById('dediles3');
btn3.onclick = function () { 

    vthree.classList.add("viweaction");
 };

 var hidUser = document.getElementById('hidUser');
 hidUser.onclick = function () { 
 
    vthree.classList.remove("viweaction");
  };

//webdesinge

var vfor=document.querySelector(".vfor");
var btn4 = document.getElementById('dediles4');
btn4.onclick = function () { 

    vfor.classList.add("viweaction");
 };

 var hidWeb = document.getElementById('hidWeb');
 hidWeb.onclick = function () { 
 
    vfor.classList.remove("viweaction");
  };

 //sportitem

 var vfive=document.querySelector(".vfive");
var btn5 = document.getElementById('dediles5');
btn5.onclick = function () { 

    vfive.classList.add("viweaction");
 };

 
 var hidesport = document.getElementById('hidesport');
 hidesport.onclick = function () { 
 
    vfive.classList.remove("viweaction");
  };


 //woredprees

 var vsix=document.querySelector(".vsix");
var btn6 = document.getElementById('dediles6');
btn6.onclick = function () { 

    vsix.classList.add("viweaction");
 };

 var hidevs=document.querySelector(".hidevs");
 var closone = document.getElementById('closone');
 closone.onclick = function () { 
 
    hidevs.classList.remove("viweaction");
  };


// from contect 
function sendmasge(){
   Email.send({
      Host : "smtp.elasticemail.com",
      Username : "h3shem@gmail.com",
      Password : "D815FB0254121F78CF68AD6871D1BEB7EFA8",
      To : document.getElementById("emailid").value,
      From : "h3shem@gmail.com" ,
      Subject :document.getElementById("nameid").value,
      Body : document.getElementById("bodymas").value
  }).then(
    message => alert(message)
  );
}

let upbtn = document.querySelector(".upbtn");

function superup(){
   scroll({
      top:0,behavior:'smooth',
  })
}

function clickinner(){
   var mybtn=document.getElementsByClassName('btn');
   mybtn.onClick="https://wa.me/+9720593652125'";
};

let options  = document.getElementById('options');

function chooselist(){
   if (options.value == "EN") {
      window.open("en-index.html","_self");
      console.log(options.value);
    } 
    else if (options.value == "AR")
    {
      window.open("index.html","_self");
    }

}

window.addEventListener("load", () => {
   const loader = document.querySelector(".loader");
 
   loader.classList.add("loader--hidden");
 
 });


