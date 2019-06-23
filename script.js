let input =0 , app_purchase= 0,ban_purchase=0,org_purchase=0,quant_app=0;
function getval(){
input = document.querySelector("input").value; //for first input 
}
let span = document.querySelector('#totalPriceSpan'); //remaining rs
let appleRs = document.querySelector('#numberapple'); // price apple
let bananaRs = document.querySelector('#numberbanana'); //price babana
let orangeRs = document.querySelector('#numberorange'); //price orange
let appleMultiRupees = 10 * appleRs; 
let bananaMultiRupees = 15 * bananaRs; 
let orangeMultiRupees = 07 * orangeRs; 
//apple
function appleincrement() {
    if(input != ''){ 
    var quant_app = document.querySelector("#numberapple").value++;
    app_purchase = app_purchase + 10; 
    show();
}
else{
    alert("Enter money first");
}
    
}
function appledecrease() {
    if(input != ''){ 
    let quan_app = document.querySelector("#numberapple").value--;
    app_purchase = app_purchase - 10; 
    show();
}
else{
    alert("Enter money first");
}
    
}
//banana
function bananaincrement() {
    if(input != ''){ 
    let quan_banana = document.querySelector("#numberbanana").value++;
    ban_purchase = ban_purchase + 7; 
    show();
}
else{
    alert("Enter money first");
}
    
}
function bananadecrease() {
    if(input != ''){ 
    let quan_banana = document.querySelector("#numberbanana").value--;
    ban_purchase = ban_purchase - 7; 
    show();
}
else{
    alert("Enter money first");
}
}

//orange
function orangeincrement() {
    if(input != ''){ 
    let quan_org = document.querySelector("#numberorange").value++;
    org_purchase = org_purchase + 15; 
    show();
}
else{
    alert("Enter money first");
}
    
}
function orangedecrease() {
    if(input != ''){ 
    let quan_org = document.querySelector("#numberorange").value--;
    org_purchase = org_purchase - 15; 
    show();
}
else{
    alert("Enter money first");
}
}

// alert(span.innerHTML);
 function show() {
    
    myinput = document.querySelector("input").value;
    appleMultiRupees =1; bananaMultiRupees=1;orangeMultiRupees=1;
    var totalbill = app_purchase + ban_purchase + org_purchase;
    document.querySelector("span").innerHTML = totalbill;


   
    
}
