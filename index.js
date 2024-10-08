let editingRow = null; 

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
    nameError.textContent = 'Username is not required*';
    nameError.style.color = "red";
    nameError.style.fontSize = "12px";
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation

  if (email.value.trim() === "") {
    emailError.textContent = 'Email is not required*';
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Mobile number validation

  if (mobileNumber.value.trim() === "") {
    numberError.textContent = 'Mobile Number is not required*';
    numberError.style.color = "red";
    numberError.style.fontSize = "12px";
    valid = false;
  } else {
    numberError.textContent = '';
  }

  // Date of birth validation

  if (date.value.trim() === "") {
    dateError.textContent = 'Date is not required*';
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
    genderError.textContent = 'Gender is not required*';
    genderError.style.color = "red";
    genderError.style.fontSize = "12px";
    valid = false;
  }
  if (selectedGender) {
    genderError.textContent = '';
  }

 
  if (valid) {
    if (editingRow) {
      
      
      editingRow.cells[0].innerHTML = username.value;
      editingRow.cells[1].innerHTML = email.value;
      editingRow.cells[2].innerHTML = mobileNumber.value;
      editingRow.cells[3].innerHTML = date.value;
      editingRow.cells[4].innerHTML = selectedGender;

      editingRow = null; 
    } else {
      
      
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
    }

    form.reset(); 
    
  }
});

// Edit Button

document.getElementById('table-body').addEventListener('click', function (event) {
  if (event.target.classList.contains('edit-btn')) {
    const row = event.target.closest('tr');
    
    
    
    document.getElementById('Username').value = row.cells[0].innerHTML;
    document.getElementById('Email').value = row.cells[1].innerHTML;
    document.getElementById('mobileNumber').value = row.cells[2].innerHTML;
    document.getElementById('date').value = row.cells[3].innerHTML;
    if (row.cells[4].innerHTML === 'Male') {
      document.getElementById('genderMale').checked = true;
    } else if (row.cells[4].innerHTML === 'Female') {
      document.getElementById('genderFemale').checked = true;
    } else {
      document.getElementById('genderOthers').checked = true;
    }

    editingRow = row; 
    
  }

// Delete Button

  if (event.target.classList.contains('delete-btn')) {
    const row = event.target.closest('tr');
    row.remove();
  }
});
