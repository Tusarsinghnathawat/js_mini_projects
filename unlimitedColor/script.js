// to generate random color we have to generate rantom hex values starting with '#' 
const hex="0123456789ABCDEF";
const bgcolor=function(){
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalID;
function startChanging(){
    if(!intervalID){
        intervalID=setInterval(changebgcolor,1000);
    }
    function changebgcolor(){
        document.body.style.backgroundColor=bgcolor();
    }
}
function stopChanging(){
    clearInterval(intervalID)
    intervalID=null;
}
document.querySelector('#start').addEventListener('click',startChanging);
document.querySelector('#stop').addEventListener('click',stopChanging);