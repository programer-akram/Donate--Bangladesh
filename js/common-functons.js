//for getting donation title
function getTextTitleById(id){
    const textTitle = document.getElementById(id).innerText;
    return textTitle;
}

// for getting innerText
function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = Number(innerText);
    return innerTextNumber;
}

// for getting input value 
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    const mainBalance = getInnerTextById('main-balance');
    
    
    if( inputValueNumber > 0 && inputValueNumber <= mainBalance  ){
        
        return inputValueNumber;
        
    }else if(inputValueNumber > mainBalance){
        alert('Insufficient Balance.');
        return false;
    }
    
    else{
        alert('Invalid Donation amount.')
        return false;
    }
    
}
