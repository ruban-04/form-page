form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('Username');
  const email = document.getElementById('Email');
  const mobileNumber = document.getElementById('mobileNumber');
  const date = document.getElementById('date');
  const genderMale = document.getElementById('genderMale');
  const genderFemale = document.getElementById('genderFemale');
  const genderOthers = document.getElementById('genderOthers');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const numberError = document.getElementById('numberError');
  const dateError = document.getElementById('dateError');
  const genderError = document.getElementById('genderError');

  let valid = true;

  // Username validation
  if (username.value.trim() === "") {
    nameError.textContent = 'Username is required*';
    nameError.style.color = "red";
    nameError.style.fontSize = "12px";
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  if (email.value.trim() === "") {
    emailError.textContent = 'Email is required*';
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Mobile number validation
  if (mobileNumber.value.trim() === "") {
    numberError.textContent = 'Mobile Number is required*';
    numberError.style.color = "red";
    numberError.style.fontSize = "12px";
    valid = false;
  } else {
    numberError.textContent = '';
  }

  // Date of birth validation
  if (date.value.trim() === "") {
    dateError.textContent = 'Date is required*';
    dateError.style.color = "red";
    dateError.style.fontSize = "12px";
    valid = false;
  } else {
    dateError.textContent = '';
  }

  // Gender validation
  let selectedGender = '';
  if (genderMale.checked) {
    selectedGender = genderMale.value;
  } else if (genderFemale.checked) {
    selectedGender = genderFemale.value;
  } else if (genderOthers.checked) {
    selectedGender = genderOthers.value;
  } else {
    genderError.textContent = 'Gender is required*';
    genderError.style.color = "red";
    genderError.style.fontSize = "12px";
    valid = false;
  }
  if (selectedGender) {
    genderError.textContent = '';
  }

  // If form is valid, print the form values in the console and add to table
  if (valid) {
    console.log('Username:', username.value);
    console.log('Email:', email.value);
    console.log('Mobile Number:', mobileNumber.value);
    console.log('Date of Birth:', date.value);
    console.log('Gender:', selectedGender);

    // Add values to the table
    let tableBody = document.getElementById('table-body');
    let row = `
      <tr>
        <td>${username.value}</td>
        <td>${email.value}</td>
        <td>${mobileNumber.value}</td>
        <td>${date.value}</td>
        <td>${selectedGender}</td>
         <td>
          <button class="btn bg-success edit-btn">Edit</button>
          <button class="btn bg-danger delete-btn">Delete</button>
      </td>
      </tr>`;

    tableBody.innerHTML += row;

   
    form.reset();
  }
});

