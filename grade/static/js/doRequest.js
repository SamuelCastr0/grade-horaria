/**
 * Esta função permite usar fetch e retornar dados ou uma resposta de uma api, passando a url, o objeto padrão da função fetch e se é necessário retornar um json ou não.
 * @param {string} url url da api
 * @param {object} options opções da função fetch, se necessário
 * @param {boolean} getJson deseja retornar ou não um json?
 * @returns
 */
export default async function doRequest(url, options = null, getJson = true) {
  const response = await fetch(url, options);
  let json = null;
  if (getJson) {
    json = await response.json();
  }
  if (json) return json;
  return response;
}
