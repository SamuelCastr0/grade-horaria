import fetchDeleteDisciplina from './fetchDeleteDisciplina.js';
import fetchListDisciplinas from './fetchListDisciplinas.js';
import fetchCreateDisciplina from './fetchCreateDisciplina.js';
import fetchUpdateDisciplina from './fetchUpdateDisciplina.js';
import initTabNav from './tabNav.js';
import initDisplayGrade from './displayGrade.js';
/**
 * Gera um csrftoken necessário para as apis de criação e atualização de disciplinas.
 * @param {string} name nome do token a ser criado
 * @returns csrftoken
 */
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
export default csrftoken;

fetchListDisciplinas();
fetchDeleteDisciplina();
fetchCreateDisciplina();
fetchUpdateDisciplina();
initTabNav();
initDisplayGrade();
