const form = document.getElementById('form')
const Username = document.getElementById('Username')
const Email = document.getElementById('Email')
const mobileNumber = document.getElementById('Mobile Number')
const date = document.getElementById('date')
const gender = document.getElementById('gender')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const numberError = document.getElementById('numberError')
const dateError = document.getElementById('dateError')
const genderError = document.getElementById('genderError')

// form.addEventListener('Submit',(e)=>{
//     e.preventDefault();
//     ValidateInputs();
// })


form.addEventListener('submit',(event) => {
    event.preventDefault()

  if( Username.value !==  ""){
    nameError.innerHTML = '';
    // nameError.style.backgroundColor = "red";

  };
console.log(Username.value)

  if( Username.value ===  ""){
    nameError.innerHTML = 'Username is not required*'; 
    nameError.style.color = "red";
    nameError.style.fontSize="12px";
   };



   if( Email.value !==  ""){
    emailError.innerHTML = '';
  
  };

  console.log(Email.value)

  if( Email.value ===  ""){
    emailError.innerHTML = 'Email is not required*'; 
    emailError.style.color = "red";
    emailError.style.fontSize="12px";
   };






   if( mobileNumber.value !==  ""){
   numberError.innerHTML = '';
   

  };

  console.log(mobileNumber.value)


  if( mobileNumber.value ===  ""){
    numberError.innerHTML = 'Mobile Number is not required*'; 
    numberError.style.color = "red";
    numberError.style.fontSize="12px";
   };


   
   if( date.value !==  ""){
    dateError.innerHTML = '';
    
 
   };
 
   console.log(dateError.value)
 
 
   if( dateError.value ===  ""){
     dateError.innerHTML = 'Date is not required*'; 
     dateError.style.color = "red";
     dateError.style.fontSize="12px";
    };


    
   if( gender.value !==  ""){
    genderError.innerHTML = '';
    
 
   };
 
   console.log(gender.value)
 
 
   if( gender.value ===  ""){
     genderError.innerHTML = 'Gender is not required*'; 
     genderError.style.color = "red";
     genderError.style.fontSize="12px";
    };


})