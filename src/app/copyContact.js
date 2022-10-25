// Copy contact email to clipboard

const copyBooking = document.getElementById('copyBooking');
const copyMgmt = document.getElementById('copyMgmt');
const copyOperator = document.getElementById('copyOperator');
const copyPromo = document.getElementById('copyPromo');

copyBooking.addEventListener('click', () => {
  navigator.clipboard.writeText(copyBooking.value);
});

copyMgmt.addEventListener('click', () => {
  navigator.clipboard.writeText(copyMgmt.value);
});

copyOperator.addEventListener('click', () => {
  navigator.clipboard.writeText(copyOperator.value);
});

copyPromo.addEventListener('click', () => {
  navigator.clipboard.writeText(copyPromo.value);
});
