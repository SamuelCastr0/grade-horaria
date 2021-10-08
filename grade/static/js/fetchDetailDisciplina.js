import doRequest from './doRequest.js';
/**
 * Função reponsável por chamar a api de detalhamento de disciplinas, ao retornar os dados da api, ela coloca os dados no modal para visualização do usuário
 * @param {HTMLelement} modal modal de visualização
 */
export default async function fetchDetailDisciplina(modal) {
  async function setInputValues(data, modalContainer) {
    const nome = modalContainer.querySelector('#nome');
    const periodo = modalContainer.querySelector('#periodo');
    const carga = modalContainer.querySelector('#carga');

    nome.value = data.nome;
    periodo.value = data.periodo;
    carga.value = data.carga_horaria;
  }

  const modalContainer = document.querySelector(modal);
  const data = await doRequest(`/detail-disciplina-api/${window.key}/`);
  await setInputValues(data, modalContainer);
}
