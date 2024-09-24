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


//main balance
// const mainBalance = getInnerTextById('main-balance');


//donate btn for noakhali
document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
    const mainBalance = getInnerTextById('main-balance');

    const initialCollectionNoakhali = getInnerTextById('noakhali-balance');
    console.log('noakhali balance', initialCollectionNoakhali);

   const amountForNoakhali = getInputValueById('amount-for-noakhali');
   console.log('amount noakhali', amountForNoakhali);

   const noakhaliCollection = initialCollectionNoakhali + amountForNoakhali;
   console.log(noakhaliCollection);

   const newMainBalance = mainBalance - amountForNoakhali;
   console.log(newMainBalance);
   document.getElementById('noakhali-balance').innerText = noakhaliCollection;

   document.getElementById('main-balance').innerText = newMainBalance;
})





//donate btn for Feni
document.getElementById('donate-btn-feni').addEventListener('click', function(){
    const mainBalance = getInnerTextById('main-balance');

    const initialCollectionFeni = getInnerTextById('feni-balance');
    console.log('feni balance', initialCollectionFeni);

   const amountForFeni = getInputValueById('amount-for-feni');
   console.log('amount feni', amountForFeni);

   const feniCollection = initialCollectionFeni + amountForFeni;
   console.log(feniCollection);

   const newMainBalance = mainBalance - amountForFeni;
   console.log(newMainBalance);

   document.getElementById('feni-balance').innerText = feniCollection;

   document.getElementById('main-balance').innerText = newMainBalance;
})





//donate btn for quota
document.getElementById('donate-btn-quota').addEventListener('click', function(){
    const mainBalance = getInnerTextById('main-balance');

    const initialCollectionQuota = getInnerTextById('quota-balance');
    console.log('quota balance', initialCollectionQuota);

   const amountForQuota = getInputValueById('amount-for-quota');
   console.log('amount quota', amountForQuota);

   const quotaCollection = initialCollectionQuota + amountForQuota;
   console.log(quotaCollection);

   const newMainBalance = mainBalance - amountForQuota;
   console.log(newMainBalance);

   document.getElementById('quota-balance').innerText = quotaCollection;

   document.getElementById('main-balance').innerText = newMainBalance; 
})






