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
// array è l'array delle domande
// numb è il numero di domande
// i è il numero della domanda corrente
// randomizedAnswers è l'array delle risposte randomizzate
const questionGenerator = (array, numb, i, randomizedAnswers) => {
  const main = document.getElementsByTagName('main')[0]
  // crea il paragrafo per la domanda
  const newP = document.createElement('p')
  newP.innerText = array[i].question
  newP.classList.add('p')
  main.appendChild(newP)
  // crea il div per le risposte
  const answerContainer = document.createElement('div')
  answerContainer.style.display = 'flex'
  answerContainer.style.justifyContent = 'center'
  answerContainer.style.flexWrap = 'wrap'
  // crea i bottoni per le risposte randomizzate
  answerContainer.style.display = 'grid'
  answerContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'
  answerContainer.style.gap = '6em'
  answerContainer.style.maxWidth = '800px'
  answerContainer.style.margin = '0 auto'
  //funzione per creare i bottoni per le risposte randomizzate
  randomizedAnswers.forEach((answer) => {
    const button = document.createElement('button')
    button.classList.add('radio-label', 'button')
    button.innerText = answer
    button.style.backgroundColor = 'rgba(100, 100, 100, 0.3)'
    button.style.color = 'white'
    button.style.borderRadius = '30px 30px 30px 30px'
    button.style.padding = '1em'
    button.style.fontSize = '18px'
    button.style.cursor = 'pointer'
    button.style.transition = 'all 0.3s ease'

    answerContainer.appendChild(button)
  })

  main.appendChild(answerContainer)
  // crea il footer per il numero della domanda
  // i è il numero della domanda corrente
  // numb è il numero di domande
  const footer = document.getElementsByTagName('footer')[0]
  footer.innerHTML = '' // Pulisce il contenuto esistente del footer
  const newH4 = document.createElement('h4')
  const questionNumber = document.createElement('span')
  questionNumber.textContent = `QUESTION ${i + 1}`
  questionNumber.style.color = 'white'
  const separator = document.createElement('span')
  separator.textContent = '/'
  separator.style.color = '#00FFFF'
  const totalQuestions = document.createElement('span')
  totalQuestions.textContent = numb
  totalQuestions.style.color = '#D20094'
  newH4.appendChild(questionNumber)
  newH4.appendChild(separator)
  newH4.appendChild(totalQuestions)
  newH4.style.textAlign = 'center'
  newH4.style.marginTop = '22em'
  footer.appendChild(newH4)
}
// funzione per prevenire il refresh della pagina
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
  let currentQuestion = 0
  let questions = []
  let userAnswers = []
  let timerElement
  let countdownTimer
  let correctAnswers = 0
  let wrongAnswers = 0

  // Funzione per estrarre domande casuali
  // allQuestions è l'array di domande
  // numberToExtract è il numero di domande da estrarre
  const extractRandomQuestions = (allQuestions, numberToExtract) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, numberToExtract)
  }
  console.log(extractRandomQuestions(arrayChoose(difficultyValue), numberValue))

  // Funzione per randomizzare la posizione delle risposte
  // question è la domanda corrente
  // sort serve per randomizzare le risposte
  // ... serve per estrarre le risposte corrette e quelle sbagliate
  const randomizeAnswers = (question) => {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers]
    return allAnswers.sort(() => 0.5 - Math.random())
  }

  // Funzione per mostrare la prossima domanda
  const showNextQuestion = () => {
    if (currentQuestion < questions.length) {
      clearMainContent()
      const randomizedAnswers = randomizeAnswers(questions[currentQuestion])
      questionGenerator(
        questions,
        questions.length,
        currentQuestion,
        randomizedAnswers
      )
      startTimer()
      addAnswerListeners(randomizedAnswers)
    } else {
      console.log('Quiz completato!')
      showResults()
    }
  }

  // Funzione per pulire il contenuto principale
  const clearMainContent = () => {
    const main = document.querySelector('main')
    main.innerHTML = ''
  }

  // Funzione per creare l'elemento del timer
  const createTimerElement = () => {
    timerElement = document.createElement('div')
    timerElement.id = 'timer'
    document.body.appendChild(timerElement)
  }

  // Funzione per avviare il timer
  const startTimer = () => {
    if (countdownTimer) {
      clearInterval(countdownTimer)
    }
    let timeLeft = 60
    timerElement.classList.remove('time-up')
    countdownTimer = setInterval(() => {
      // se il tempo è finito, mostra il messaggio e passa alla prossima domanda
      if (timeLeft <= 0) {
        clearInterval(countdownTimer)
        timerElement.textContent = '0'
        showTimeUpMessage()
      } else {
        // se il tempo non è finito, mostra il tempo rimanente
        timerElement.textContent = `${timeLeft}`
        const progress = ((60 - timeLeft) / 60) * 360
        timerElement.style.setProperty('--progress', `${progress}deg`)
        timeLeft--
      }
    }, 1000)
  }

  // Funzione per mostrare il messaggio di tempo scaduto
  const showTimeUpMessage = () => {
    const timeUpDiv = document.createElement('div')
    timeUpDiv.id = 'time-up-message'
    timeUpDiv.textContent = 'Tempo scaduto!'
    document.body.appendChild(timeUpDiv)

    setTimeout(() => {
      document.body.removeChild(timeUpDiv)
      moveToNextQuestion()
    }, 2000) // passa alla prossima domanda dopo 2 secondi
  }

  // Funzione per aggiungere i listener alle risposte
  const addAnswerListeners = (randomizedAnswers) => {
    const answerButtons = document.querySelectorAll('.radio-label')
    answerButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (userAnswers[currentQuestion] === undefined) {
          userAnswers[currentQuestion] = randomizedAnswers[index]
          if (
            randomizedAnswers[index] ===
            questions[currentQuestion].correct_answer
          ) {
            correctAnswers++
            button.style.backgroundColor = '#4CAF50' // Verde per risposta corretta
          } else {
            wrongAnswers++
            button.style.backgroundColor = '#F44336' // Rosso per risposta sbagliata
            // Evidenzia la risposta corretta
            answerButtons.forEach((btn, idx) => {
              if (
                randomizedAnswers[idx] ===
                questions[currentQuestion].correct_answer
              ) {
                btn.style.backgroundColor = '#4CAF50'
              }
            })
          }
          button.style.color = 'white'

          // Disabilita tutti i bottoni dopo la risposta
          answerButtons.forEach((btn) => (btn.disabled = true))

          clearInterval(countdownTimer)
          setTimeout(moveToNextQuestion, 2000) // Passa alla prossima domanda dopo 2 secondi
        }
      })
    })
  }

  // Funzione per passare alla prossima domanda
  const moveToNextQuestion = () => {
    currentQuestion++
    if (currentQuestion < questions.length) {
      setTimeout(() => {
        showNextQuestion()
      }, 2000)
    } else {
      showResults()
    }
  }

  // Funzione per mostrare i risultati finali
  const showResults = () => {
    localStorage.setItem('correctAnswers', correctAnswers)
    localStorage.setItem('wrongAnswers', wrongAnswers)
    localStorage.setItem('totalQuestions', questions.length)
    window.location.href = 'result.html'
  }

  // Inizializzazione del quiz
  questions = extractRandomQuestions(arrayChoose(difficultyValue), numberValue)
  userAnswers = new Array(numberValue).fill(undefined)
  createTimerElement()
  showNextQuestion()
})
