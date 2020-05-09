const electron = require('electron');

const formSubmit = document.getElementById('form-submit');

formSubmit.addEventListener('submit', createPatients);

// Función para crear pacientes
function createPatients(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.toUpperCase();
  const lastName = document.getElementById('last-name').value.toUpperCase();
  const date = document.getElementById('date').value;
  const phone = document.getElementById('phone').value;

  if(name === '' || lastName === '' || date === '' || phone === '') {
    alert('The fields cannot be blank');

    return
  }

  if(phone.length > 10) {
    alert('Verify your cell number cannot be greater than 10 digits');

    return
  }

  const patients = {
    name,
    lastName,
    date: new Date(),
    phone
  }

  if(localStorage.getItem('patient') === null) {
    let patient = [];
    patient.unshift(patients);
    localStorage.setItem('patient', JSON.stringify(patient));
  } else {
    let patient = JSON.parse(localStorage.getItem('patient'));
    patient.unshift(patients);
    localStorage.setItem('patient', JSON.stringify(patient));
  }

  showPatients();
  clearInputs();

}


// Función para mostrar pacientes
function showPatients() {
  let patient = JSON.parse(localStorage.getItem('patient'));
  let patientUi = document.getElementById('patient-ui');

  patientUi.innerHTML = '';

  patient.forEach(function(element) {
    patientUi.innerHTML += `
      <div class="card">
        <div class="card-content">
          <span class="card-title">Name: ${element.name}</span>
          <span class="card-title">Lasta Name: ${element.lastName}</span>
          <p>Registration Date: ${element.date}</p>
          <br>
          <p>Phone: ${element.phone}</p>
          <br>
          <button class="btn  red darken-4" onclick="deletePantients('${element.name}')">Delete</button>
        </div>
      </div>
    
    `;

  });
}


// Función para eliminar pacientes
function deletePatients(name) {
  let patient = JSON.parse(localStorage.getItem('patient'));

  for(let i = 0; i < pantient.length; i++) {
    if(patient[i].name === name) {
      patient.splice(i, 1);


      alert('Are you sure you want to delete the patient?');
    }
  }

  localStorage.setItem('pantient', JSON.stringify(patient));

  showPatients();
}


// Función para limpiar inputs del formulario después de guardar información
function clearInputs() {
  const name = document.getElementById('name').value = '';
  const lastName = document.getElementById('last-name').value = '';
  const date = document.getElementById('date').value = '';
  const phone = document.getElementById('phone').value = '';
}



showPatients();

