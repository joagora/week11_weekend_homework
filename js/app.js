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

  const divContainer = document.querySelector('#details-container');
  const existingUls = document.querySelectorAll('#details-container ul');
  if (existingUls.length === 0) {
    const deleteButton = createDeleteButton();
  }
  const singleUlItem = document.createElement('ul');
  divContainer.appendChild(singleUlItem);

  const liFirstName = document.createElement('li');
  singleUlItem.appendChild(liFirstName);

  const liLastName = document.createElement('li');
  singleUlItem.appendChild(liLastName);

  const liLocation = document.createElement('li');
  singleUlItem.appendChild(liLocation);

  const firstNameValue = form.firstName.value;
  liFirstName.textContent = firstNameValue;

  const lastNameValue = form.lastName.value;
  liLastName.textContent = lastNameValue;

  const locationValue = form.location.value;
  liLocation.textContent = locationValue;


}

const createDeleteButton = function() {
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'delete-button');
  deleteButton.textContent = "Delete all";
  const body = document.querySelector('body');
  body.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleDeletion);
}

const handleDeletion = function(event) {
  event.preventDefault();
  const list = document.querySelector('#details-container');
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  const deleteButton = event.target;
  deleteButton.parentNode.removeChild(deleteButton);
}
