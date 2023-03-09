'use srtict';
const titulo = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

function btnOnClick() {
  console.log(typeof input1.value);
}

btn.addEventListener('click', function () {
  console.log('Se hizo clic en el botón');
});
