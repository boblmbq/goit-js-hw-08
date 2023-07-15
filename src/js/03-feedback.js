import throttle from 'lodash.throttle';

const INPUT_KEYS = 'feedback-form-state';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

let arrOfValues = {};

const { input, textarea, form, btnSbmit } = refs;
onUnexpectedRestart();

form.addEventListener('input', throttle(handlerFormInput, 500));

function handlerFormInput(e) {
  const { name, value } = e.target;
  arrOfValues = { ...arrOfValues, [name]: value };
  localStorageSave();
}
function localStorageSave() {
  localStorage.setItem(INPUT_KEYS, JSON.stringify(arrOfValues));
}

function onUnexpectedRestart() {
  const localStorageValue = localStorage.getItem(INPUT_KEYS);

  const parsedLocalStorage = JSON.parse(localStorageValue);
  if (localStorageValue) {
    if (parsedLocalStorage.hasOwnProperty('email')) {
      input.value = parsedLocalStorage.email;
    }
    if (parsedLocalStorage.hasOwnProperty('message')) {
      textarea.value = parsedLocalStorage.message;
    }
  }
  //? we took the local storage values and put
  //? them into uor array and than this array
  //? will be handlig that what what we puted
  //? befor restart
  arrOfValues = parsedLocalStorage;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(arrOfValues);
  localStorage.removeItem(INPUT_KEYS);
  e.currentTarget.reset();
});
