// document.addEventListener('DOMContentLoaded', function() {
//   const buttons = document.querySelectorAll('.formForm__budget-container button');
//   const input = document.querySelector('.formForm__budget-input');

//   buttons.forEach(button => {
//     button.addEventListener('click', function(event) {
//       event.preventDefault();
//       buttons.forEach(btn => btn.classList.remove('formForm__selected'));
//       button.classList.add('formForm__selected');
//       input.value = '';
//     });
//   });

//   input.addEventListener('input', function() {
//     buttons.forEach(btn => btn.classList.remove('formForm__selected'));

//     if (input.value.length > 0 && input.value[0] !== '$') {
//       input.value = '$' + input.value.replace(/\$/g, '');
//     }

//     if (input.value.length > 1 && input.value[1] === '0') {
//       input.value = '$';
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.formForm__budget-radio');
  const input = document.querySelector('.formForm__budget-input');

  buttons.forEach(button => {
    button.addEventListener('change', function(event) {
      input.value = '';
    });
  });

  input.addEventListener('input', function() {
    buttons.forEach(btn => btn.checked = false);

    if (input.value.length > 0 && input.value[0] !== '$') {
      input.value = '$' + input.value.replace(/\$/g, '');
    }

    if (input.value.length > 1 && input.value[1] === '0') {
      input.value = '$';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.formForm__phone-dropdown');
  const list = document.querySelector('.formForm__phone-list');
  const items = document.querySelectorAll('.formForm__phone-list li');
  const input = document.querySelector('.formForm__phone');
  const inputPhone = document.querySelector('.formForm__phone-input');

  btn.addEventListener('click', function() {
    list.classList.add('formForm__phone-openList');
    input.classList.add('formForm__phone-open');
  });

  items.forEach(item => {
    item.addEventListener('click', function() {
      const selectedFlag = item.querySelector('.formForm__phone-flag').src;
      const selectedCountryCode = item.textContent.trim();
      btn.querySelector('.formForm__phone-flag').src = selectedFlag;
      list.classList.remove('formForm__phone-openList');
      input.classList.remove('formForm__phone-open');
    });
  });

  inputPhone.addEventListener('input', function() {
    const cleaned = inputPhone.value.replace(/\D+/g, '');
    let formatted = '+';

    if (cleaned.length > 0) formatted += cleaned.slice(0, 2);
    if (cleaned.length > 2) formatted += '-' + cleaned.slice(2, 5);
    if (cleaned.length > 5) formatted += '-' + cleaned.slice(5, 8);
    if (cleaned.length > 8) formatted += '-' + cleaned.slice(8, 12);

    inputPhone.value = formatted;
  });

  inputPhone.addEventListener('focus', function() {
    if (inputPhone.value === '') {
      inputPhone.value = '+38-';
    }
  });

  inputPhone.addEventListener('blur', function() {
    if (inputPhone.value === '+38-') {
      inputPhone.value = '';
    }
  });
});
