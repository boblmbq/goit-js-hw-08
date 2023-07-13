import throttle from 'lodash.throttle';
const INPUT_VALUES = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const arrOfValues = {};

function onFormInput(e) {
  arrOfValues[e.target.name] = e.target.value;
  localStorage.setItem(INPUT_VALUES, JSON.stringify(arrOfValues));
}

onUnexpectedRestart();

function onFormSubmit(e) {
  console.log(arrOfValues);
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(INPUT_VALUES);
}

function onUnexpectedRestart() {
  const LSValues = localStorage.getItem(INPUT_VALUES);

  if (LSValues) {
    const arrOfJson = JSON.parse(LSValues);

    if (arrOfJson.email !== undefined) {
      refs.input.value = arrOfJson.email;
    }
    if (arrOfJson.message !== undefined) {
      refs.textarea.value = arrOfJson.message;
    }
  }
}
