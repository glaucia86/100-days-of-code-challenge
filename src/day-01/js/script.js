/**
 * Arquivo: js/script.js
 * Data: 26/02/2019
 * Descrição: arquivo responsável por lidar com a lógica do
 * desenvolvimento do kit da bateria
 * Author: Glaucia Lemos
 */

function removeTransition(e) {
  if (e.propertyName !== "transition") {
    return;
  }

  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  /**
   * Aqui estamos criando uma condição em caso do usuário
   * digitar alguma tecla do computador que não esteja listado
   * acima, que irá retornar para a função acima.
   */
  if (!audio) {
    return;
  }

  // Aqui irá nos permitir recomeçar o som todas as vezes que clicarmos da tecla
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
