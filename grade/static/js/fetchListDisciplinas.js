import doRequest from './doRequest.js';
import initModalsEvents from './initModalsEvents.js';

/**Função que se comunica com a api de listagem de disciplinas e cria os elementos da tabela de disciplinas */
export default async function fetchListDisciplinas() {
  const tbody = document.querySelector('[data-fetch="list"]');
  const data = await doRequest('/list-disciplinas-api/');

  const actions = `<img
                    src="../../static/img/view.svg"
                    title="Visualizar Disciplina"
                    data-open="view"
                  />
                  <img
                    src="../../static/img/edit.svg"
                    title="Editar Disciplina"
                    data-open="edit"
                  />

                  <img
                    src="../../static/img/exclude.svg"
                    title="Excluir Disciplina"
                    data-open="delete"
                  />`;

  tbody.innerHTML = '';

  for (const disciplina of data) {
    tbody.innerHTML =
      tbody.innerHTML +
      (await `
    <tr class="disc-table-row" data-key="${disciplina.id}">
    <td data-disc="nome">${disciplina.nome}</td>
    <td data-disc="periodo">${disciplina.periodo}º</td>
    <td data-disc="carga">${disciplina.carga_horaria}</td>
    <td class="disc-table-actions">
      ${actions}
    </td>
  </tr>
    `);
  }

  await initModalsEvents();
}
