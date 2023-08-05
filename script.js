const input = document.querySelector('input');
const btn = document.querySelector('button');
const display = document.querySelector('.disp');
const copyBtn = document.querySelector('.fa');
const inpValue = input.value;


btn.addEventListener('click', (e) => {
  e.preventDefault();

  const hashedOutput = CryptoJS.SHA256(inpValue).toString();
  display.value = hashedOutput;
});

copyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(display.value);
});

