document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#activities-form');
  form.addEventListener('submit', handleFormSubmission);
})

const handleFormSubmission = function(event) {
  event.preventDefault();
  const newDiv = createUlItem(event.target);
  event.target.reset();
}

const createUlItem = function(form) {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'details-container');

  const body = document.querySelector('body');
  body.appendChild(newDiv);

  const singleUlItem = document.createElement('ul');
  newDiv.appendChild(singleUlItem);

  const liFirstName = document.createElement('li');
  const liLastName = document.createElement('li')
  singleUlItem.appendChild(liFirstName);
  singleUlItem.appendChild(liLastName);
  console.dir(event);
  const firstNameValue = form.firstName.value;
  const lastNameValue = form.lastName.value;
  liFirstName.textContent = firstNameValue;
  liLastName.textContent = lastNameValue;
}
