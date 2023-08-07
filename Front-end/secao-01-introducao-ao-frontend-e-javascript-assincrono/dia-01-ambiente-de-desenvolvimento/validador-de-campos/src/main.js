import './style.css';
import validator from 'validator';

const btnValidator = document.getElementById('btn-validator');

btnValidator.addEventListener('click', (event) => {
  event.preventDefault();
  const validationText = document.getElementById('validation-text').value;
  const validationType = document.getElementById('validation-type').value;
  let validationReturn = '';
  if (validationType === 'email') {
    validationReturn = validator.isEmail(validationText);
  }
  if (validationType === 'cpf') {
    validationReturn = validator.isTaxID(validationText, 'pt-BR');
  }
  if (validationType === 'hexColor') {
    validationReturn = validator.isHexColor(validationText);
  }
  if (validationType === 'uuid') {
    validationReturn = validator.isUUID(validationText, 4);
  }
  if (validationType === 'url') {
    validationReturn = validator.isURL(validationText);
  }
  const message = `A validação retornou ${validationReturn}`;
  const asnwed = document.getElementById('answed');
  asnwed.innerText = message;
})
