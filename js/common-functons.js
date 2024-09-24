// for getting innerText
function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = Number(innerText);
    return innerTextNumber;
}

// const mainBalance = getInnerTextById('main-balance');

// for getting input value 
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    const mainBalance = getInnerTextById('main-balance');



    if( inputValueNumber >= 0 && inputValueNumber < mainBalance  ){
        //transaction history
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.classList.add('rounded-lg');
        div.classList.add('border-gray-500');
        div.classList.add('mb-5');
        div.classList.add('p-3');

        div.innerHTML =`
        <h1 class= 'text-xl font-bold'>${inputValueNumber} Taka is Donated for  </h1>   
        <p class='text-lg'>Date: ${new Date()}</p>
        
        `
        document.getElementById('transaction-history').appendChild(div);
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
