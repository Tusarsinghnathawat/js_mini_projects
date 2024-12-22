const time=document.getElementById("time");
setInterval(function(){
    let date=new Date();
    let dy=new Date();
    // console.log(date.toLocaleTimeString);
    time.innerHTML=date.toLocaleTimeString();
},1000);