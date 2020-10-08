/* THE JAVASCRIPT FOR THE SIMPLE FORM
    firstly the dom elements of html file are linked under the first section.
        "Any fool can write code that a computer can understand. 
        Good programmers write code that humans can understand."
         – Martin Fowler
*/
// FIRST SECTION ----GETTING HTML ELEMENTS
const form = document.getElementById('form') //getting the form element
const usernameFirst = document.getElementById('username-first') // username text field
const usernamelast = document.getElementById('username-last')
const email = document.getElementById('E-mail-div') //getting the email div container 
const email_text = document.getElementById('E-mail') //getting the email input field 
const password = document.getElementById('password') // getting the password input field
const passwordagain = document.getElementById('password-again') //getting the password again field for checking if both the password matches
const phone_no = document.getElementById('phone-no-div') //getting the phone-no div container 
const phone_no_text =document.getElementById('phone-no')  //getting the phone-no input field container 
const submit = document.querySelector('button')  //  getting the submit button
const password_block =document.getElementById('full-password-block')  //getting the password block div container which contains both password field
const dob =document.getElementById('dob-div')
const dob_text =document.getElementById('dob')

err= document.getElementsByTagName('small')




// SECTION 2 adding event listners to the input fields. The change in event  fields will reveal the other fields.
usernamelast.addEventListener('input',function(){
    email.setAttribute('id','E-mail-div show');
    
})

email_text.addEventListener('input',function(){
    phone_no.setAttribute('id','phone-no-div show');
})

phone_no_text.addEventListener('input',()=>{
    dob.setAttribute('id', 'dob-div show')
})

dob_text.addEventListener('input',() =>{
    password_block.setAttribute('id','full-password-block show')
})

submit.addEventListener('click',function(e){
    e.preventDefault();
    check_password();
})

// SECTION 3 --FUNCTION FOR CHECKING passwords

function check_password(){
    if(password.value == passwordagain.value){
        alert(`congratulations your form was successfully Registered.\n Thankyou ${usernameFirst.value} for registering with us.`);
        window.location.reload();
    }
    else {
        alert('password does not match')
    }
}


