let easyQuestions = [
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What color is the methamphetamine produced by Walter?',
    correct_answer: 'Blue',
    incorrect_answers: ['Green', 'Red', 'Yellow'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'easy',
    question: "Who is Walter White's wife?",
    correct_answer: 'Skyler',
    incorrect_answers: ['Marie', 'Jane', 'Lydia'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'easy',
    question: "Jesse Pinkman is Walter's best friend.",
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Walter White is a former chemistry teacher.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'easy',
    question: "What is the name of Gus Fring's restaurant?",
    correct_answer: 'Los Pollos Hermanos',
    incorrect_answers: ['Taco Bell', 'El Burrito', 'La Taqueria'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'easy',
    question: "Who first discovers Walter's secret?",
    correct_answer: 'Skyler',
    incorrect_answers: ['Jesse', 'Hank', 'Saul'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'easy',
    question: "What is Jesse Pinkman's profession?",
    correct_answer: 'Addict',
    incorrect_answers: ['Teacher', 'Salesman', 'Lawyer'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'easy',
    question: 'Who is the DEA agent trying to catch Walter?',
    correct_answer: 'Hank Schrader',
    incorrect_answers: ['Mike Ehrmantraut', 'Todd Alquist', 'Gus Fring'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The series is primarily set in Albuquerque, New Mexico.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In which season does Walter adopt the name Heisenberg?',
    correct_answer: 'First',
    incorrect_answers: ['Second', 'Third', 'Fourth'],
  },
]

let mediumQuestions = [
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'Who is the character that tries to kill Walter in the fifth season?',
    correct_answer: 'Todd Alquist',
    incorrect_answers: ['Gustavo Fring', 'Hank Schrader', 'Saul Goodman'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What does Walter use to dissolve a body?',
    correct_answer: 'Hydrofluoric acid',
    incorrect_answers: ['Hydrochloric acid', 'Sulfuric acid', 'Muriatic acid'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'medium',
    question: "What is the name of Gus Fring's assistant?",
    correct_answer: 'Gale',
    incorrect_answers: ['Todd', 'Mike', 'Hector'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'medium',
    question: "What is Skyler's last name?",
    correct_answer: 'White',
    incorrect_answers: ['Schrader', 'Pinkman', 'Goodman'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'medium',
    question: 'In which season does Walter kill Gus Fring?',
    correct_answer: 'Fourth',
    incorrect_answers: ['Fifth', 'Second', 'Third'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'medium',
    question: "What is Walter's main motivation for entering the drug trade?",
    correct_answer: 'Money',
    incorrect_answers: ['Revenge', 'Fame', 'Power'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Who discovers the truth about Walter using a poetry book?',
    correct_answer: 'Hank',
    incorrect_answers: ['Skyler', 'Jesse', 'Saul'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'medium',
    question: 'Mike Ehrmantraut is a former police officer.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'medium',
    question:
      'Walter White is diagnosed with lung cancer in the second season.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'medium',
    question: 'The series has won the Emmy Award for Outstanding Drama Series.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
]

let hardQuestions = [
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'hard',
    question: "What is Heisenberg's real name?",
    correct_answer: 'Walter Hartwell White',
    incorrect_answers: [
      'Walter Joseph White',
      'Walter Benjamin White',
      'Walter John White',
    ],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who kills Hank Schrader?',
    correct_answer: 'Jack Welker',
    incorrect_answers: ['Todd Alquist', 'Gus Fring', 'Mike Ehrmantraut'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What object does Walter use to keep his identity secret?',
    correct_answer: 'A hat',
    incorrect_answers: ['A costume', 'Another identity', 'A mask'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'hard',
    question:
      "What is Walter's reaction when he discovers that Skyler knows about his activities?",
    correct_answer: 'Panic',
    incorrect_answers: ['Indifference', 'Anger', 'Joy'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'hard',
    question: "Who is the protagonist of the spin-off 'Better Call Saul'?",
    correct_answer: 'Saul Goodman',
    incorrect_answers: ['Walter White', 'Jesse Pinkman', 'Hank Schrader'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'In which season does Walter become completely dark and ruthless?',
    correct_answer: 'Fourth',
    incorrect_answers: ['First', 'Second', 'Third'],
  },
  {
    category: 'Breaking:Bad',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who plans the scheme to kill Gus Fring?',
    correct_answer: 'Walter White',
    incorrect_answers: ['Jesse Pinkman', 'Mike Ehrmantraut', 'Saul Goodman'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Walter White becomes a drug kingpin in less than a year.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'hard',
    question: "The symbol of Walter's methamphetamine is a skull.",
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Breaking:Bad',
    type: 'boolean',
    difficulty: 'hard',
    question: "The series concludes with Jesse Pinkman's death.",
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
]

const form = document.getElementById('form')
const fieldset = document.getElementById('difficulty')
let correctAnswers = 0

const arrayChoose = (diff) => {
  if (diff === 'Easy') {
    return easyQuestions
  } else if (diff === 'Medium') {
    return mediumQuestions
  } else {
    return hardQuestions
  }
}

const questionGenerator = (array, numb, i) => {
  const main = document.getElementsByTagName('main')[0]

  const newP = document.createElement('p')
  newP.innerText = array[i].question
  main.appendChild(newP)

  if (array[i].type === 'boolean') {
    const newDiv1 = document.createElement('div')
    newDiv1.classList.add('container')
    const newDiv2 = document.createElement('div')
    newDiv2.classList.add('container')

    const newButtonCorrect = document.createElement('button')
    newButtonCorrect.classList.add('radio-label')
    newButtonCorrect.classList.add('button')

    newButtonCorrect.innerText = array[i].correct_answer
    const newButtonIncorrect = document.createElement('button')
    newButtonIncorrect.classList.add('radio-label')
    newButtonIncorrect.classList.add('button')

    newButtonIncorrect.innerText = array[i].incorrect_answers[0]
    newDiv1.appendChild(newButtonCorrect)
    newDiv2.appendChild(newButtonIncorrect)
    main.appendChild(newDiv1)
    main.appendChild(newDiv2)
  } else {
    const DivMaggiore1 = document.createElement('section')
    const DivMaggiore3 = document.createElement('section')
    const newDiv1 = document.createElement('div')
    newDiv1.classList.add('container')
    const newDiv2 = document.createElement('div')
    newDiv2.classList.add('container')
    const newDiv3 = document.createElement('div')
    newDiv3.classList.add('container')
    const newDiv4 = document.createElement('div')
    newDiv4.classList.add('container')

    const newButtonCorrect = document.createElement('button')
    newButtonCorrect.classList.add('radio-label')
    newButtonCorrect.classList.add('button')
    newButtonCorrect.innerText = array[i].correct_answer

    const newButtonIncorrect = document.createElement('button')
    
    newButtonIncorrect.classList.add('radio-label')
    newButtonIncorrect.classList.add('button')
    const newButtonIncorrect1 = document.createElement('button')
    newButtonIncorrect1.classList.add('radio-label')
    newButtonIncorrect1.classList.add('button')
    const newButtonIncorrect2 = document.createElement('button')
    newButtonIncorrect2.classList.add('radio-label')
    newButtonIncorrect2.classList.add('button')

    newButtonIncorrect.innerText = array[i].incorrect_answers[0]
    newButtonIncorrect1.innerText = array[i].incorrect_answers[1]
    newButtonIncorrect2.innerText = array[i].incorrect_answers[2]

    newDiv1.appendChild(newButtonCorrect)
    newDiv2.appendChild(newButtonIncorrect)
    newDiv3.appendChild(newButtonIncorrect1)
    newDiv4.appendChild(newButtonIncorrect2)

    main.appendChild(DivMaggiore1)
    DivMaggiore1.appendChild(newDiv1)
    DivMaggiore1.appendChild(newDiv2)
    main.appendChild(DivMaggiore3)
    DivMaggiore3.appendChild(newDiv3)
    DivMaggiore3.appendChild(newDiv4)
  }
  const footer = document.getElementsByTagName('footer')[0]
  const newH4 = document.createElement('h4')
  newH4.innerText = 'Question' + (i + 1) + '/' + numb
  footer.appendChild(newH4)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const difficultyValue = document.querySelector(
    'input[name="satisfaction"]:checked'
  ).value
  const numberValue = parseInt(document.getElementById('number').value)
  form.style.display = 'none'

  // Inizializzazione delle variabili per il quiz
  // currentQuestion serve per contare le domande
  // questions serve per memorizzare le domande
  // userAnswers serve per memorizzare le risposte dell'utente
  // timerElement serve per creare l'elemento del timer
  // countdownTimer serve per contare il tempo
  // correctAnswers serve per contare le risposte corrette
  // wrongAnswers serve per contare le risposte sbagliate
  let currentQuestion = 0;
  let questions = [];
  let userAnswers = [];
  let timerElement;
  let countdownTimer;
  let correctAnswers = 0;
  let wrongAnswers = 0;
  
  // Funzione per estrarre domande casuali
  // allQuestions è l'array di domande
  // numberToExtract è il numero di domande da estrarre
  const extractRandomQuestions = (allQuestions, numberToExtract) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberToExtract);
  };

  // Funzione per randomizzare la posizione delle risposte
  // question è la domanda corrente
  // sort serve per randomizzare le risposte
  // ... serve per estrarre le risposte corrette e quelle sbagliate
  const randomizeAnswers = (question) => {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
    return allAnswers.sort(() => 0.5 - Math.random());
  };

  // Funzione per mostrare la prossima domanda
  const showNextQuestion = () => {
    if (currentQuestion < questions.length) {
      clearMainContent();
      const randomizedAnswers = randomizeAnswers(questions[currentQuestion]);
      questionGenerator(questions, questions.length, currentQuestion, randomizedAnswers);
      startTimer();
      addAnswerListeners(randomizedAnswers);
    } else {
      console.log("Quiz completato!");
      showResults();
    }
  };

  // Funzione per pulire il contenuto principale
  const clearMainContent = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
  };

  // Funzione per creare l'elemento del timer
  const createTimerElement = () => {
    timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.style.position = 'fixed';
    timerElement.style.top = '20px';
    timerElement.style.right = '20px';
    timerElement.style.fontSize = '40px';
    timerElement.style.fontWeight = 'bold';
    timerElement.style.color = 'white';
    timerElement.style.padding = '10px';
    timerElement.style.borderRadius = '50%';
    timerElement.style.width = '80px';
    timerElement.style.height = '80px';
    timerElement.style.display = 'flex';
    timerElement.style.justifyContent = 'center';
    timerElement.style.alignItems = 'center';
    timerElement.style.border = '10px solid #00FFFF';
    timerElement.style.backgroundColor = 'transparent';
    document.body.appendChild(timerElement);
  };

  // Funzione per avviare il timer
  const startTimer = () => {
    if (countdownTimer) {
      clearInterval(countdownTimer);
    }
    let timeLeft = 60;
    countdownTimer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        timerElement.textContent = "Tempo scaduto!";
        timerElement.style.borderColor = '#D20094';
        moveToNextQuestion();
      } else {
        timerElement.textContent = `${timeLeft}s`;
        const progress = (60 - timeLeft) / 60 * 360;
        timerElement.style.background = `conic-gradient(
          #00FFFF ${progress}deg,
          transparent ${progress}deg
        )`;
        timeLeft--;
      }
    }, 1000);
  };

  // Funzione per aggiungere i listener alle risposte
  // randomizedAnswers è l'array delle risposte randomizzate (si trova nella funzione showNextQuestion)
  const addAnswerListeners = (randomizedAnswers) => {
    const answerButtons = document.querySelectorAll('.radio-label');
    answerButtons.forEach((button, index) => {
      // if serve per evitare che il bottone venga cliccato più volte
      button.addEventListener('click', () => {
        if (userAnswers[currentQuestion] === undefined) {
          userAnswers[currentQuestion] = randomizedAnswers[index];
          // if serve per controllare se la risposta è corretta
          if (randomizedAnswers[index] === questions[currentQuestion].correct_answer) {
            correctAnswers++;
          } else {
            wrongAnswers++;
          }
          // clearInterval serve per fermare il timer
          clearInterval(countdownTimer);
          moveToNextQuestion();
        }
      });
    });
  };

  // Funzione per passare alla prossima domanda
  const moveToNextQuestion = () => {
    currentQuestion++;
    showNextQuestion();
  };

  // Funzione per mostrare i risultati finali
  const showResults = () => {
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);
    localStorage.setItem('totalQuestions', questions.length);
    window.location.href = 'result.html';
  };

  // Inizializzazione del quiz
  questions = extractRandomQuestions(arrayChoose(difficultyValue), numberValue);
  userAnswers = new Array(numberValue).fill(undefined);
  createTimerElement();
  showNextQuestion();
})


// const shuffle = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[array[i], array[j]] = [array[j], array[i]]
//   }
// }

// const n = array[Math.floor(Math.random() * array.length)]
// array = array.filter(function (item) {
//   return item !== n
// 
