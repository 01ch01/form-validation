const passwordEl = document.querySelector('#password');
const buttonEl = document.querySelector('#btn');

const lowerUpper = document.querySelector('#lower-upper');
const number = document.querySelector('#numbers');
const specialCharacters = document.querySelector('#special-characters');
const digits = document.querySelector('#digits');

passwordEl.addEventListener('keyup', event => {
  const { value } = passwordEl;

  const isLowerUpperValidate = validateLowerUpperCase(value);
  toggleRequirements(lowerUpper, isLowerUpperValidate);

  const isNumberValidate = validateNumbers(value);
  toggleRequirements(number, isNumberValidate);

  const isSpecialCharactersValidate = validateSpecialCharacters(value);
  toggleRequirements(specialCharacters, isSpecialCharactersValidate);

  const isDigitsValidate = validateDigits(value);
  toggleRequirements(digits, isDigitsValidate);

  const isValidate =
    isLowerUpperValidate &&
    isNumberValidate &&
    isSpecialCharactersValidate &&
    isDigitsValidate;

  toggleButton(isValidate);
});

const validateLowerUpperCase = value => {
  const upper = RegExp('[A-Z]');
  const lower = RegExp('[a-z]');

  return value.match(lower) && value.match(upper);
};

const validateNumbers = value => {
  const regex = /\d/g;
  return value.match(regex);
};

const validateSpecialCharacters = value => {
  const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return value.match(regex);
};

const validateDigits = value => {
  return value.length >= 8;
};

const toggleRequirements = (item, isActive) => {
  const icon = item.getElementsByTagName('i')[0];

  if (isActive) {
    item.classList.add('active');
    icon.classList.remove('fa-times-circle');
    icon.classList.add('fa-check');
  } else {
    item.classList.remove('active');
    icon.classList.add('fa-times-circle');
    icon.classList.remove('fa-check');
  }
};

const toggleButton = isFormValidated => {
  if (isFormValidated) {
    buttonEl.removeAttribute('disabled');
  } else {
    buttonEl.setAttribute('disabled', '');
  }
};
