// Variabili per le risposte
let correctAnswers = 6;
let totalQuestions = 10;

// Funzione per calcolare le percentuali
const calculatePercentages = (correct, total) => {
  let correctPercentage = (correct / total) * 100;
  let wrongPercentage = 100 - correctPercentage;
  return {
    // arrotonda i valori a 1 decimale (toFixed(1) serve per convertire il numero in stringa)
    correct: correctPercentage.toFixed(1),
    wrong: wrongPercentage.toFixed(1)
  };
}

// Funzione per mostrare i risultati
const showResults = () => {
  // Recupera i valori dal localStorage
  const correctAnswers = parseInt(localStorage.getItem('correctAnswers'));
  const totalQuestions = parseInt(localStorage.getItem('totalQuestions'));

  const percentages = calculatePercentages(correctAnswers, totalQuestions);
  const wrongAnswers = totalQuestions - correctAnswers;

  //  div aggiornato delle risposte corrette
  const correctDiv = document.getElementById('correct');
  correctDiv.innerHTML = `
    <h2>Correct</h2>
    <p class="percentage">${percentages.correct}%</p>
    <p class="questions">${correctAnswers}/${totalQuestions} questions</p>
  `;

  // div aggiornato delle risposte sbagliate
  const wrongDiv = document.getElementById('wrong');
  wrongDiv.innerHTML = `
    <h2>Wrong</h2>
    <p class="percentage">${percentages.wrong}%</p>
    <p class="questions">${wrongAnswers}/${totalQuestions} questions</p>
  `;

  // Aggiungi il punteggio in percentuale al div con id="title"
  const titleDiv = document.getElementById('title');
  const result = percentages.correct;
  const resultElement = document.createElement('h1');
  resultElement.textContent = `${result}%`;
  titleDiv.appendChild(resultElement);
  
  // Aggiorna il testo centrale
  // se il punteggio è maggiore di 50% invece stampa "Congratulations! You passed the exam." 
  // sennò stampa "You dont pass the exam"
  if (percentages.correct > 50) {
    const textDiv = document.getElementById('text');
    textDiv.innerHTML = `
    <h2>Congratulations!</h2>
    <h3>You passed the exam.</h3>
    `;
  } else {
    const textDiv = document.getElementById('text');
    textDiv.innerHTML = `
      <h2>You dont pass the exam</h2>
    `;
  }

  // Aggiorna il grafico a ciambella
  // il valore di percentages.correct * 3.6 è
  // il numero di gradi che deve essere colorato in base al punteggio
  const donut = document.getElementById('donut');
  donut.style.background = `conic-gradient(
    #00FFFF 0deg ${percentages.correct * 3.6}deg,
    #D20094 ${percentages.correct * 3.6}deg 360deg
  )`;
}

// Chiama la funzione showResults quando la pagina è caricata
window.addEventListener('load', showResults);
