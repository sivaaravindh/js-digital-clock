// function startTime() {
let day=document.getElementById('date');
let times=document.getElementById('time');
let days=new Date();
day.innerText=`${days.getDate()}: ${days.getMonth()+1}:${days.getFullYear()}`
setInterval(()=>
{
    let date=new Date();
    times.innerText=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    let amid=document.getElementById('am');
    let pmid=document.getElementById('pm');
    if(date.getHours()<12)
    {
        amid.style.backgroundColor="green";
    }
    else
    {
        pmid.style.backgroundColor="green";
    }
},);






























//     var today = new Date();
//     var hur = today.getHours();
//     var min = today.getMinutes();
//     var sec = today.getSeconds();
//     min = checkTime(min);
//     sec = checkTime(sec);
//     document.getElementById('txt').innerHTML =
//     hur + ":" + min + ":" + sec;
//     var t = setTimeout(startTime, 500);
//     }
//     function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i
//     };  
//     return i;
//     }
