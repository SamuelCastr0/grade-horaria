import doRequest from './doRequest.js';
import csrftoken from './script.js';
import { cleanModal } from './modal.js';
import fetchListDisciplina from './fetchListDisciplinas.js';

/**
 * Função reponsável por chamar a api de criação de disciplinas, além de controlar o comportamento do modal que contém o formulário de criação
 */
export default async function fetchCreateDisciplina() {
  const modal = document.querySelector('[data-modal="add"]');
  const form = document.querySelector('[data-form="add"]');

  async function handleSubmit(event) {
    event.preventDefault();

    const nome = modal.querySelector('#nome').value;
    const periodo = modal.querySelector('#periodo').value;
    const carga_horaria = modal.querySelector('#carga').value;

    const jsonBody = { nome, periodo, carga_horaria };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(jsonBody),
    };

    await doRequest('/create-disciplina-api/', options, false);
    modal.classList.remove('active');
    cleanModal(modal);
    await fetchListDisciplina();
  }

  form.addEventListener('submit', handleSubmit);
}
