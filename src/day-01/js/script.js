/**
 * Arquivo: js/script.js
 * Data: 26/02/2019
 * Descrição: arquivo responsável por lidar com a lógica do
 * desenvolvimento do kit da bateria
 * Author: Glaucia Lemos
 */

window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
});
