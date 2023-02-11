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

let date1=document.getElementById('day1');
let date2=document.getElementById('day2');
let date3=document.getElementById('day3');
let date4=document.getElementById('day4');
let date5=document.getElementById('day5');
let date6=document.getElementById('day6');
let date7=document.getElementById('day7');
switch(days.getDay())
{
    case 0:
        date1.style.backgroundColor="red";
    break;
    case 1:
        date2.style.backgroundColor="red";
    break;
    case 2:
        date3.style.backgroundColor="red";
    break;
    case 3:
        date4.style.backgroundColor="red";
    break;
    case 4:
        date5.style.backgroundColor="red";
    break;
    case 5:
        date6.style.backgroundColor="red";
    break;
    case 6:
        date7.style.backgroundColor="red";
    break;
}


// function cheakarmostrong(num){
//     var num2=num;
//     var num3 =num;
//     var len=findlen(num);
//     var ans=0;
//     while(num2 != 0){
//         var sum2=num2%10;
//         num2=(num2-sum2)/10;
//         ans+=sum2**len;
//     }
//     if(num3==ans){
//         console.log("yes is armostrong number");
//     }
//     else{
//         console.log("not armosrong number");
//     }
// }
// function findlen(count){
//     var len=0;
//     while(count !=0 ){
//         var count1=count % 10;
//         var count=(count1-count)/10;
//         ++len
//     }
//     return len;
// }
// cheakarmostrong(153);




























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
