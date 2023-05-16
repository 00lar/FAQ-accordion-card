const RowBtn = document.querySelectorAll(".RowBtns");
const answer = document.querySelectorAll(".answers");
const pPregunta = document.querySelectorAll(".pPreguntas");

RowBtn.forEach((button, index) => {
  button.addEventListener("click", ocultar);
  function ocultar() {
    if (answer[index].classList.contains("Ocultar")) {
      answer[index].classList.remove("Ocultar");
      pPregunta[index].classList.add("Negritas");
      RowBtn[index].classList.add("rotar");
    } else {
      answer[index].classList.add("Ocultar");
      pPregunta[index].classList.remove("Negritas");
      RowBtn[index].classList.remove("rotar");
    }
  }
});
