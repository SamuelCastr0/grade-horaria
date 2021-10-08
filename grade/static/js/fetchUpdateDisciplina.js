import doRequest from './doRequest.js';
import csrftoken from './script.js';
import { cleanModal } from './modal.js';
import fetchListDisciplina from './fetchListDisciplinas.js';

/**
 * Função que se comunica com a api de atualização de dados de uma disciplina, a mesma manda os dados do formulário para o banco de dados, atualizando a disciplina
 */
export default async function fetchUpdateDisciplina() {
  const modal = document.querySelector('[data-modal="edit"]');
  const form = document.querySelector('[data-form="edit"]');
  async function handleSubmit(event) {
    event.preventDefault();

    const nome = modal.querySelector('#nome').value;
    const periodo = modal.querySelector('#periodo').value;
    const carga_horaria = modal.querySelector('#carga').value;

    console.log(nome);
    console.log(periodo);
    console.log(carga_horaria);

    const jsonBody = { nome, periodo, carga_horaria };

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(jsonBody),
    };

    await doRequest(`/update-disciplina-api/${window.key}/`, options, false);
    modal.classList.remove('active');
    cleanModal(modal);
    await fetchListDisciplina();
  }

  form.addEventListener('submit', handleSubmit);
}
