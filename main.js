const RowBtn = document.querySelector("#RowBtn");
const answer = document.querySelector("#answer");
const pPregunta = document.querySelector("#pPregunta");

RowBtn.addEventListener("click", ocultar);

function ocultar() {
  if (answer.classList.contains("Ocultar")) {
    answer.classList.remove("Ocultar");

    pPregunta.classList.add("Negritas");
  } else {
    answer.classList.add("Ocultar");
    pPregunta.classList.remove("Negritas");
  }
}
