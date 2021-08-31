let a= new Date();
let d;
let Time;
let x;
setInterval(() => {
d=a.toLocaleDateString();
Time=+a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
x=document.getElementById('time');
x.innerHTML=Time+" on "+d;
},1000);