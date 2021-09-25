const BillAmount = document.querySelector("#Bill-amount");
const CashGiven = document.querySelector("#Cash-given");
const CheckButton = document.querySelector("#Button-check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const billspan= document.querySelector("#bill");
const labelcash = document.querySelector(".cash");

const availableNotes =[2000,1000,500,100,20,10,5,1];

// trying to validate first input
function validation(){

if(BillAmount.value ==="")
{
    billspan.innerText ="Please Enter a bill amount";
}
else{
    billspan.style.display="none";
    
}
}

CheckButton.addEventListener("click", () => {
    // console.log("clicked");
     hideMessage();
    if (BillAmount.value > 0) { // 12 > 0 => true
        // console.log(BillAmount.value);
        if (Number(CashGiven.value) >= Number(BillAmount.value))
        {  //2012> 12 => true
            // console.log("inner if executed");

            const amountToBeReturned = CashGiven.value - BillAmount.value; // 2012-12 =2000

            // console.log(amountToBeReturned);

            calculateChange(amountToBeReturned);
            // console.log("calling a function");
        }
        else{
            ShowMessage("Do You Wanna Wash Plates?");
        }
    }
    else{
        ShowMessage("Invalid Bill Amount");
     }
});

//  calculatechange function
function calculateChange(amountToBeReturned) {
    // console.log("function calling");
    for(let i=0; i< availableNotes.length;i++){
        const numberofnotes = Math.trunc( amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberofnotes; 
    }
}

function hideMessage()
{
    message.style.display="none";
}

function ShowMessage(msg){
    message.style.display="block";
    message.innerText =msg;
    message.style.color="#4338CA";
}

// function onChangeHandler(event){

// }

window.addEventListener("load", ()=>{
    CashGiven.style.display="none";
    labelcash.style.display="none";
// adding a event listener to input field
    BillAmount.addEventListener("input",()=>
    { 
        CashGiven.style.display="block";
        labelcash.style.display="block";

    });
    BillAmount.addEventListener("keydown",()=>
    {
        CashGiven.style.display="none";
        labelcash.style.display="none";
    });
});
