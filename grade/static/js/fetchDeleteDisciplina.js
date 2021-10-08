import doRequest from './doRequest.js';
import fetchListDisciplina from './fetchListDisciplinas.js';
import csrftoken from './script.js';

/**
 * Função reponsável por chamar a api de deleção de disciplinas, além de controlar o comportamento do modal que contém o formulário de deleção
 */
export default async function fetchDeleteDisciplina() {
  const modal = document.querySelector('[data-modal="delete"]');
  const form = document.querySelector('[data-form="delete"]');
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await doRequest(`/delete-disciplina-api/${window.key}/`, options, false);
    modal.classList.remove('active');
    await fetchListDisciplina();
  }

  form.addEventListener('submit', handleSubmit);
}
