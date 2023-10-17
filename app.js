const myForm = document.querySelector('#my-form');
const btn = document.querySelector('#subbtn')
let firstName = document.querySelector('#firstname'),
    lastName = document.querySelector('#lastname'),
    emailAddress = document.querySelector('#email'),
    userPassword = document.querySelector('#password'),
    formInput = document.querySelectorAll('.form-control'),
    errorMsg = document.querySelectorAll('.error-text'),
    errorIcon = document.querySelectorAll('.icon-error')

    const errorMessages = [
        'First Name Cannot be empty',
        'Last Name Cannot be empty',
        'This is not an email',
        'Password Cannot be empty',
        'Email is required'

    ];

    //looping thru each error msg
    errorMsg.forEach(function (message, index) {
     message.textContent = ' ';

    });

    //looping thru each Error Icons
        errorIcon.forEach(function(icon, iconIndex){
            icon = ' ';

        })

    //looping thru each forminput
    formInput.forEach(function(formElement, formElementIndex){
        formElement = ' ';
    })



    
    //email validator
    function emailValidator(userEmail) {
        if (userEmail && userEmail.includes('@') && userEmail.includes('.')) {
        return userEmail;
        } else {
            errorMsg[2].textContent = errorMessages[2];
            errorMsg[2].style.display = 'block';
            //  errorMsg[2].style.left = '57%';
            errorIcon[2].style.display = 'block';

            setTimeout(() => {
                errorMsg[2].style.display = 'none',
                errorIcon[2].style.display = 'none';

                },2000)
        }
    }

myForm.addEventListener('submit' , OnFormSubmit)
function OnFormSubmit(e){
    e.preventDefault();
    if (firstName.value === ''){
        errorMsg[0].textContent = errorMessages[0];
        errorMsg[0].style.display = 'block';
        formInput[0].placeholder = ' '
        formInput[0].style.border = "1px solid hsl(0, 100%, 74%)"
        errorIcon[0].style.display = 'block'
        setTimeout(() => {
        formInput[0].style.border = '2px solid rgb(242, 239, 239)',
        errorMsg[0].style.display = 'none',
        errorIcon[0].style.display = 'none'
        formInput[0].placeholder = "First Name"
        },2000)


    } else if ( firstName.value !== ''  && lastName.value === ''){
        errorMsg[1].textContent = errorMessages[1];
        errorMsg[1].style.display = 'block';
        errorIcon[1].style.display = 'block';
        formInput[1].placeholder = ' '
        formInput[1].style.border = "1px solid hsl(0, 100%, 74%)"
        setTimeout(() => {
        formInput[1].style.border = '2px solid rgb(242, 239, 239)',
        errorMsg[1].style.display = 'none',
        errorIcon[1].style.display = 'none',
        formInput[1].placeholder = "Last Name"
        },2000)


    }else if (lastName.value !== '' && emailAddress.value === ''){
        errorMsg[2].textContent = errorMessages[4];
        errorMsg[2].style.display = 'block';
        errorIcon[2].style.display = 'block';
        formInput[2].placeholder = ' '
        formInput[2].style.border = "1px solid hsl(0, 100%, 74%)"
        setTimeout(() => {
        formInput[2].style.border = '2px solid rgb(242, 239, 239)',
        errorMsg[2].style.display = 'none',
        errorIcon[2].style.display = 'block';
        errorIcon[2].style.display = 'none';
        formInput[2].placeholder = "Email Address"
        },2000)

        

    }else if (lastName.value !== '' && emailAddress.value !==''){
        emailValidator(emailAddress.value)

    }
   
    if ( emailAddress.value !== '' && emailValidator(emailAddress.value) && userPassword.value == '' ){
        errorMsg[3].textContent = errorMessages[3];
        errorMsg[3].style.display = 'block';
        errorIcon[3].style.display = 'block';
        formInput[3].placeholder = ' '
        formInput[3].style.border = "1px solid hsl(0, 100%, 74%)"
        setTimeout(() => {
        formInput[3].style.border = '2px solid rgb(242, 239, 239)',
        errorMsg[3].style.display = 'none',
        errorIcon[3].style.display = 'none',  
        formInput[3].placeholder = "Password"
        },2000)

    }
}



































