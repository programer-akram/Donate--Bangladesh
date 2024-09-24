//blog button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href ='./blogs.html'; 
})


//donate button
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('history-btn').classList.remove('green');
    document.getElementById('donate-section').classList.remove('hidden');
    document.getElementById('donation-btn').classList.add('green');   
})


//history button
document.getElementById('history-btn').addEventListener('click', function(){    
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('history-btn').classList.add('green');  
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('donation-btn').classList.remove('green');
})



//donate btn for noakhali
document.getElementById('donate-btn-noakhali').addEventListener('click', function(){

    const title = getTextTitleById('noakhali');

    const mainBalance = getInnerTextById('main-balance');

    const initialCollectionNoakhali = getInnerTextById('noakhali-balance');

    const amountForNoakhali = getInputValueById('amount-for-noakhali');

// ---------------history section start----------------

if(amountForNoakhali !== false  ){
    document.getElementById('modal').classList.remove('hidden')
    
const div = document.createElement('div');
div.classList.add('border-2');
div.classList.add('rounded-lg');
div.classList.add('border-gray-500');
div.classList.add('mb-5');
div.classList.add('p-3');
div.classList.add('space-y-3');

div.innerHTML =`
<h1 class= 'text-xl font-bold'>${amountForNoakhali} Taka is Donated for ${title}  </h1>   
<p class='text-lg'>Date: ${new Date()}</p>

`
document.getElementById('transaction-history').appendChild(div);

}
// ---------------history section end----------------

   const noakhaliCollection = initialCollectionNoakhali + amountForNoakhali;

   const newMainBalance = mainBalance - amountForNoakhali;
   
   document.getElementById('noakhali-balance').innerText = noakhaliCollection;

   document.getElementById('main-balance').innerText = newMainBalance;

})


//donate btn for Feni
document.getElementById('donate-btn-feni').addEventListener('click', function(){


    const title = getTextTitleById('feni');

    const mainBalance = getInnerTextById('main-balance');

    const initialCollectionFeni = getInnerTextById('feni-balance');

    const amountForFeni = getInputValueById('amount-for-feni');

   // ---------------history section start----------------
   if(amountForFeni !== false ){

    document.getElementById('modal').classList.remove('hidden');

const div = document.createElement('div');
div.classList.add('border-2');
div.classList.add('rounded-lg');
div.classList.add('border-gray-500');
div.classList.add('mb-5');
div.classList.add('p-3');
div.classList.add('space-y-3');


div.innerHTML =`
<h1 class= 'text-xl font-bold'>${amountForFeni} Taka is Donated for ${title}  </h1>   
<p class='text-lg'>Date: ${new Date()}</p>

`
document.getElementById('transaction-history').appendChild(div);

   }
// ---------------history section end----------------


   const feniCollection = initialCollectionFeni + amountForFeni;

   const newMainBalance = mainBalance - amountForFeni;

   document.getElementById('feni-balance').innerText = feniCollection;

   document.getElementById('main-balance').innerText = newMainBalance;
})



//donate btn for quota
document.getElementById('donate-btn-quota').addEventListener('click', function(){

    const title = getTextTitleById('quota');

    const mainBalance = getInnerTextById('main-balance');

    const initialCollectionQuota = getInnerTextById('quota-balance');

   const amountForQuota = getInputValueById('amount-for-quota');

     // ---------------history section start----------------

     if(amountForQuota !== false ){

        document.getElementById('modal').classList.remove('hidden')

const div = document.createElement('div');
div.classList.add('border-2');
div.classList.add('rounded-lg');
div.classList.add('border-gray-500');
div.classList.add('mb-5');
div.classList.add('p-3');
div.classList.add('space-y-3');


div.innerHTML =`
<h1 class= 'text-xl font-bold'>${amountForQuota} Taka is Donated for ${title}  </h1>   
<p class='text-lg'>Date: ${new Date()}</p>

`
document.getElementById('transaction-history').appendChild(div);

     }
// ---------------history section end----------------


   const quotaCollection = initialCollectionQuota + amountForQuota;

   const newMainBalance = mainBalance - amountForQuota;

   document.getElementById('quota-balance').innerText = quotaCollection;

   document.getElementById('main-balance').innerText = newMainBalance; 
})


//close button
document.getElementById('close-btn').addEventListener('click',function(){
    document.getElementById('modal').classList.add('hidden')
})





