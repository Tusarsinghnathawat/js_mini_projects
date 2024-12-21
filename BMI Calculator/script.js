//task one - if we press submit button than the values of the form will go the server
// we have to prevent this from happening 
// This can be prevented by applying a event listner on the submit event
const form=document.querySelector('form');

// if we define height and weight here it will store empty values 
// so we will define height and weight after form is submited that is inside eventListner
form.addEventListener('submit',function(e){
    e.preventDefault();
    // Task-2 :- select height and weight for further calculations
    // the input values of height and weight will be stored in string
    // we have to convert them into integer or float
    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);

    // tast-3 :- select the result div to add the content for display 
    // we have empty div with id result, we can add values in this div by the help of innerHTML

    const result=document.querySelector('#result');

    //task-4 :- check wheather the user's input is a valid number or not

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Please enter a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`please enter a valid weight ${weight}`;
    }
    else{
        //task-4 :- if all the input values are valid than calculate bmi
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;    
    }
});


