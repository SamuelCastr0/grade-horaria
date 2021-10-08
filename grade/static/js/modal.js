import fetchDetailDisciplina from './fetchDetailDisciplina.js';

/**
 * Recebe o container de um modal, seleciona os dados do formulário desse modal e limpa os campos do mesmo.
 * @param {HTMLElement} modalContainer Elemento do do container que contém o modal
 */
export function cleanModal(modalContainer) {
  const nome = modalContainer.querySelector('#nome');
  const periodo = modalContainer.querySelector('#periodo');
  const carga = modalContainer.querySelector('#carga');
  nome.value = '';
  periodo.value = '';
  carga.value = '';
}

/**
 * Função que adiciona os eventos necessários para um determinado modal funcionar adequadamente. Recebe o seletor de um determinado tipo de botão que ativa um determinado tipo de modal.
 * @param {string} botao
 * @param {HTMLElement} modal
 */
export function initModal(botao, modal) {
  const btnOpen = document.querySelectorAll(botao);
  const modalContainer = document.querySelector(modal);
  const btnClose = modalContainer.querySelector('[data-modal="close"]');

  function getKeyFromRow(btn) {
    const row = btn.parentElement.parentElement;
    window.key = row.dataset.key;
  }

  function openModal() {
    modalContainer.classList.add('active');
    getKeyFromRow(this);
    if (modal === '[data-modal="view"]' || modal === '[data-modal="edit"]') {
      fetchDetailDisciplina(modal);
    }
  }

  function closeModal() {
    modalContainer.classList.remove('active');
    cleanModal(modalContainer);
  }

  function clickOutsideModal({ target }) {
    if (target === modalContainer) closeModal();
  }

  btnOpen.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });
  btnClose.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', clickOutsideModal);
}
