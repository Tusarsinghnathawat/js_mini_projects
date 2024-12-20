const buttons=document.querySelectorAll('.button');
const circle=document.querySelector('.circle')
const body=document.querySelector('body');
let clickCount=0;
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        clickCount++;
        if(clickCount===1){
            if(e.target.id==="orange"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="green"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="yellow"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="red"){
                body.style.backgroundColor=e.target.id;
            }
        }
        if(clickCount===2){
            if(e.target.id==="orange"){
                circle.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="green"){
                circle.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="yellow"){
                circle.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="red"){
                circle.style.backgroundColor=e.target.id;
            }
            clickCount=0;
        }
    });
});