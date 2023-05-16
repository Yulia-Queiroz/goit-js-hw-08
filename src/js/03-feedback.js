import throttle from 'lodash.throttle';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('form');

const STORAGE_KEY = 'feedback-form-state';
const storageData = localStorage.getItem(STORAGE_KEY);

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function setFormDataFromStorage() {
  if (storageData !== null) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    email.value = storageData.email;
    message.value = storageData.message;
  }
}
setFormDataFromStorage();

function onFormInput() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Заполните все поля');
  }

  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  delete formData.email;
  delete formData.message;
}
