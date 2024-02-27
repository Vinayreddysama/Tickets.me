function submitMobileNumber() {
    var mobileNumber = document.getElementById('mobileNumber').value;
    if (mobileNumber) {
        // Process the mobile number
        alert('Mobile Number: ' + mobileNumber);
        
    } else {
        // Handle the error case
        alert('Please enter a mobile number.');
    }
}
function redirectGoogle(){
    location.href='https://www.google.com/';
}
function redirectApple(){
    location.href='https://www.apple.com/';
}
function redirectGmail(){
    location.href='https://mail.google.com/';
}
var divOrders = document.getElementById('divOrders');
var divGifts = document.getElementById('divGifts');
var divRewards = document.getElementById('divRewards');
var divFood = document.getElementById('divFood');
var divHelpCenter = document.getElementById('divHelpCenter');
var divAccounts = document.getElementById('divAccounts');
function showOrders(){
   
    divOrders.style.display = 'block';
    divGifts.style.display = 'none';
    divFood.style.display = 'none';
    divRewards.style.display = 'none';
    divHelpCenter.style.display = 'none';
    divAccounts.style.display = 'none';
}

function showGifts(){
   
    divOrders.style.display = 'none';
    divGifts.style.display = 'block';
    divFood.style.display = 'none';
    divRewards.style.display = 'none';
    divHelpCenter.style.display = 'none';
    divAccounts.style.display = 'none';
}
function showRewards(){
   
    divOrders.style.display = 'none';
    divGifts.style.display = 'none';
    divFood.style.display = 'none';
    divRewards.style.display = 'block';
    divHelpCenter.style.display = 'none';
    divAccounts.style.display = 'none';
}
function showFoods(){
    
    divOrders.style.display = 'none';
    divGifts.style.display = 'none';
    divFood.style.display = 'block';
    divRewards.style.display = 'none';
    divHelpCenter.style.display = 'none';
    divAccounts.style.display = 'none';
}
function showHelpLine(){
    
    divOrders.style.display = 'none';
    divGifts.style.display = 'none';
    divFood.style.display = 'none';
    divRewards.style.display = 'none';
    divHelpCenter.style.display = 'block';
    divAccounts.style.display = 'none';
}
function showSettings(){
    
    divOrders.style.display = 'none';
    divGifts.style.display = 'none';
    divFood.style.display = 'none';
    divRewards.style.display = 'none';
    divHelpCenter.style.display = 'none';
    divAccounts.style.display = 'block';
}
function showPayments(){
    location.href='https://www.globalpayments.com/en-ca';
}