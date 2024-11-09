let first_name = document.getElementById("firstname");
let last_name = document.getElementById("lastname");
let email_id = document.getElementById("mailid");
let birth_date = document.getElementById("birthdate");
let pass_word = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener("click", function(e){
    e.preventDefault();
//    localStorage.setItem("firstname",first_name.value);
//    localStorage.setItem("lastname",last_name.value);
//    localStorage.setItem("emailId",email_id.value);
//    localStorage.setItem("birthdate",birth_date.value);
//    localStorage.setItem("password",pass_word.value);

//    location.href="login.html";

    let reg_form={
        firstname:first_name.value,
        lastname:last_name.value,
        emailId:email_id.value,
        birthdate:birth_date.value,
        password:pass_word.value
    }
    // console.log(reg_form);
    storeData(reg_form);

})

    function storeData(data){
        let formdata=JSON.parse(localStorage.getItem("setformdata")) || [];
        formdata.push(data);
        localStorage.setItem("setformdata", JSON.stringify(formdata));
        location.href="login.html";  
    }