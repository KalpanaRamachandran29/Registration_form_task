
let email_id = document.getElementById("mailid");
let pass_word = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener("click", function(e){
    e.preventDefault();

    let getformdata=JSON.parse(localStorage.getItem("setformdata"));
    console.log(getformdata);
     // let b=localStorage.getItem("password");
    // console.log(b);

    // localStorage.setItem("emailId",email_id.value);
    // localStorage.setItem("password",pass_word.value);

    let flg_err = 0;
    console.log(getformdata);
    
    getformdata.forEach(function(i){
        // console.log(i.emailId);
       // console.log(email_id.value);
        
        if(i.emailId == email_id.value){
            if (i.password == pass_word.value){
                flg_err = 0;
                return true;
            }
            else{
                flg_err = 2;
            }
        }
        else {
            flg_err = 1;
        }
    });

    if(flg_err==1){
        alert("Incorrect Username");
    }
    else if (flg_err == 2){
        alert("Incorrect Password");
    }
    else{
        alert("Login Successfull"); 
        location.href="home.html";      
    }


//    if(email_id.value!==a){
//         alert("Incorrect Username");
//    }
//    else if(pass_word.value!==b){
//         alert("Incorrect Password");
//    }
//    else{
//         alert("Login Successfull");
//         location.href="home.html";
//    }
})