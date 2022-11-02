


let AcctBal = 50000;
const currency = "$";
const passkey = 12345;
const AcctNum = 1234567890;

let userInput, pinCheck, Task, newTask, Amt, RecivAcctNum;

const patron = "Thank you for Banking with us, we hope you enjoy our services."; 

let CheckBal = 1, Transfer = 2,  Withraw = 3, Deposit = 4;


// ---------------------------------------------------
// TRANSACTION FUNCTION

function Transx(){
    greet();
    SelectTask();

}

Transx();

// ------INITITIALIZE FUNCTION------------

function greet(){
    userInput = parseInt(prompt("Welcome to Q Bank of Africa  \nEnter your Account Number to Proceed >>"));

 //  CHECKING ACCOUNT NUMBER
  if (userInput === "" || userInput === null ){
    alert("Account Number cannot be empty");
    greet();
  }
  else if(userInput !== AcctNum ){
    alert("Invalid Account Number\nCheck Account Number and Try again");
    greet();
  }
  else if(userInput === AcctNum ){
    SecurityCheck();
  } 
  else{
    greet();
  }
}


// CHECK PIN SECURITY
function SecurityCheck(){
    pinCheck = parseInt(prompt("Enter your 5-digit Pin to continue >>"));

    //   CHECKING SECURITY PIN
if (pinCheck === ""){
    alert("Pin cannot be empty");
    SecurityCheck();
}else if(pinCheck !== passkey){
    alert("Incorrect Pin, check pin and try again.");
    SecurityCheck();
} else if (pinCheck === passkey){
    alert("Pin verified");  
}

}


// TRANSACTION TASK SELECTION
function SelectTask(){
    Task = parseInt(prompt("Select your transaction \n 1. Check Account Balance \n 2. Transfer Funds \n 3. Withrawal \n 4. Deposit Funds"));

    //CHECKING AND PERFORMING TASKS
if(Task === ""){
    alert("Select a valid input");
    SelectTask();
}
else if(Task === CheckBal ){
    CheckAcctBal();
} else if(Task === Transfer){
    TransFund();
}else if(Task === Withraw){
    withrawal();
}else if(Task === Deposit ){
    depositFund();
}else{
    alert("Invalid Selection");
    SelectTask();
}


}


// FUNCTION FOR RECURRING TASKS
function recurringTask(){
    
    newTask = parseInt(prompt("Would you like to perform another Transaction\n 1. Yes \n 2. No"));

    let yes = 1, no =2;

    if (newTask === ""){
        alert("Invalid Input");
        recurringTask();
    }else if(newTask === yes){
        SelectTask();
    }else if(newTask === no){
        alert(patron);
    }
}

// CHECK ACCOUNT BALANCE FUNCTION
function CheckAcctBal(){

    parseInt(alert("Your Account Balance is " + currency + AcctBal ));
    alert(patron);
    recurringTask();


}


// TRANSFER FUNDS FUNCTION

function TransFund(){
   
    //TYPE OF ACCOUNT
   function AccountType(){
    let AccType = prompt("Select Receipient's Account Type \n 1. Savings \n 2. Current ");

    if( AccType ==""){
        alert("Invalid Account type, Try again");
        TransFund();
    }else if (AccType == 1 || AccType == 2 ){
        RecivAcctNum = prompt("Enter Receipients Account Number to proceed >>");
    }
 }

   AccountType();

    // RECEIEVER'S ACCOUNT NUMBER
   function RecieverActNumber(){

    if(RecivAcctNum == ""){
        RecivAcctNum = prompt("Invalid Account number, try again");     
        RecieverActNumber(); 
    }
    else if (isNaN(RecivAcctNum)){
        RecivAcctNum =  prompt("Invalid Account number, try again");
        RecieverActNumber();
    }
    else if(RecivAcctNum.length < 10 ||  RecivAcctNum.length > 10){
        RecivAcctNum =  prompt(" Invalid Account number length, try again");
        RecieverActNumber();
    }
    else{
        RecivAcctNum ;
        Amt = parseInt(prompt("Enter Amount to continue >>"));
    }

 }

 RecieverActNumber();

    // AMOUNT TO BE TRANSFERRED
    function TransferAmount(){

    if(Amt == ""){
        Amt = Number(prompt("Invalid Amount, try a new amount"));
    }else if (isNaN(Amt)){
        Amt = Number(prompt("Invalid Amount, try a new amount"));
    }else if (Amt !== "" && !isNaN(Amt)){
        SecurityCheck();
        alert("You have succesfully transferred " + currency + Amt +" to " + RecivAcctNum);
        AcctBal = Number(AcctBal - Amt);
        alert(patron);
        recurringTask();

    }
       
    
 }

 TransferAmount();

}


//  WITHDRAWAL FUNCTION

function withrawal(){

    //TYPE OF ACCOUNT
   function AccountType(){
    let AccType = prompt("Select your Account Type \n 1. Savings \n 2. Current ");

    if( AccType == ""){
        alert("Invalid Account type, Try again");
        withrawal();
    }else if (AccType == 1 || AccType == 2 ){
        Amt = prompt( "Select Amount to Withdraw: \n 1. $100                   2. $200 \n 3. $500                   4. $1000 \n 5. $2000                 6. $5000 \n 7. Others  ");
    }

 }

     AccountType();

    
// SELECT WITHDRAWAL AMOUNT FUNCTION
function withrawAmount(){

     if(Amt == ""){
        alert("Invalid input, Try again");
        Amt = prompt( "Select Amount to Withdraw: \n 1. $100                   2. $200 \n 3. $500                   4. $1000 \n 5. $2000                 6. $5000 \n 7. Others  ");
        withrawAmount();
     }
     else if (Amt == 1 ){
        AcctBal =Number(AcctBal - 100);
        alert("Please Take Your Cash");
        recurringTask();
     }
     else if (Amt == 2){
        AcctBal =Number(AcctBal - 200);
        alert("Please Take Your Cash");
        recurringTask();
     }
     else if (Amt == 3){
        AcctBal =Number(AcctBal - 500);
        alert("Please Take Your Cash");
        recurringTask();
     }
     else if (Amt == 4){
        AcctBal =Number(AcctBal - 1000);
        alert("Please Take Your Cash");
        recurringTask();
     }
     else if (Amt == 5){
        AcctBal =Number(AcctBal - 2000);
        alert("Please Take Your Cash");
        recurringTask();
     }
     else if (Amt == 6){
        AcctBal =Number(AcctBal - 5000);
        alert("Please Take Your Cash");
        recurringTask();
     }
     else if (Amt == 7){
        Amt = Number(prompt("Enter Amount here >>"));
        AcctBal = Number(AcctBal - Amt);
        alert("Please Take Your Cash");
        recurringTask();
     }

 }


 withrawAmount();

}




// DEPOSIT FUNCTION

function depositFund() {

    Amt = Number(prompt("Enter Amount to be Deposited>>"));
    // AMOUNT TO BE DEPOSITED
    function depositAmt(){

        if (Amt == ""){
            Amt = Number(alert("Invalid Amount, Try Again"));
            depositFund();
        }
        else if(isNaN(Amt)){
            Amt = Number(alert("Invalid Amount, Try Again"));
            depositFund();
        }
        else if(Amt !== "" && !isNaN(Amt)){
            Amt;
            alert("You have succesfully deposited " + currency + Amt + " into your account." );
            AcctBal = Number(AcctBal + Amt);
            alert(patron);
            recurringTask();
        }

        

    }


    depositAmt();

}






