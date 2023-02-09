function startTime() {
    var today = new Date();
    var hur = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById('txt').innerHTML =
    hur + ":" + min + ":" + sec;
    var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  
    return i;
    }