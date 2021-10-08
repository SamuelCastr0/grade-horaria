/**
 * Esta função torna visível ao usuário a grade horária quando o mesmo clica no botão "Mostrar Grade"
 */
export default function initDisplayGrade() {
  const button = document.querySelector('#show-grade');
  const sectionGrade = document.querySelector('[data-grade="content"]');
  button.addEventListener('click', ({ target }) => {
    target.style = 'display: none;';
    sectionGrade.classList.add('active');
    setTimeout(() => {
      sectionGrade.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, 500);
  });
}
