/**Esta função habilita a navegação por tabs para todos os 9 horários */
export default function initTabNav() {
  let tabs = document.querySelectorAll('[data-nav="tab"]');
  let grades = document.querySelectorAll('[data-nav="grade"]');
  const sectionGrade = document.querySelector('[data-grade="content"]');
  tabs = Array.from(tabs);
  grades = Array.from(grades);

  const hideAll = () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    grades.forEach((grade) => {
      grade.classList.remove('active');
    });
  };
  const getCurrentIndex = () => {
    let index;
    tabs.forEach((tab) => {
      if (tab.classList.contains('active')) {
        index = tabs.indexOf(tab);
      }
    });
    return index;
  };
  const giveGradeAnimation = (index, activeIndex) => {
    if (index < activeIndex) {
      console.log('esquerda');
      grades[index].style = 'animation: slideLeft .7s forwards;';
    } else if (index > activeIndex) {
      console.log('esquerda');
      grades[index].style = 'animation: slideRight .7s forwards;';
    }
  };
  //
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      if (getCurrentIndex() !== index) {
        giveGradeAnimation(index, getCurrentIndex());
        hideAll();
        tab.classList.add('active');
        grades[index].classList.add('active');
        sectionGrade.scrollIntoView({ block: 'start', behavior: 'smooth' });
      } else {
        sectionGrade.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    });
  });
}
