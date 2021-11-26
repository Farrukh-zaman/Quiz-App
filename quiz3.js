function submitForm(e) {

    e.preventDefault();

    // STEP-1 => GETTING THE VALUE FROM THE INOUT FIELD    
    let name = document.forms["welcome_form"]["name"].value;

    // STEP-2 => STORING THE INPUT VALUE IN THE SESSION STORAGE
    sessionStorage.setItem('name', name);

    location.href = "quiz.html";
}

// STEP-3 => CREATING SOME QUESTIONS
let questions = [
    
    {
        id:0,
        question:"What is the Full form of RAM?",
        answer: "Random Access Memory",
        options: [
            'Random Access Memory',
            'Randomly access memory',
            'Run access memory',
            'None of the above'
        ]
    },
    
    {
        id:1,
        question:"What is the Full form of ROM?",
        answer: "Read Only Memory",
        options: [
            'Random Access Memory',
            'Read Only memory',
            'Run access memory',
            'None of the above'
        ]
    },
    
    {
        id:2,
        question:"Pick the full form of CPU from below",
        answer: "Central processing unit",
        options: [
            'central program Unit',
            'centrall processing unit',
            'central Processing unit',
            'None of the above'
        ]
    },

    {
        id:3,
        question:"What is the Full form of E-mail?",
        answer: "Electronic Mail",
        options: [
            'Electric mail',
            'Engine mail',
            'Electronic Mail',
            'All of the above'
        ]
    },

    {
        id:4,
        question: "Full form of GUI",
        answer: "Graphical user interface",
        options: [
            "General user Interface",
            "Graphical user interface",
            "Generic user Interface",
            "None of the above"
        ]
    }
]

let question_count = 0;
let points = 0;

// STEP-4 => CREATING A FUNCTION FOR NEXT BUTTON
function Next() {

//STEP-6 => STORRING THE USER CLICKED VALUE INTO THE SESSION STORAGE
  let user_answer = document.querySelector('li.option.active').innerHTML;

   if(user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem('Points', points);
  }

  // STEP-7 => ON FINSIHING THE QUESTIONS REDIRECTING THE PAGE TO THE END.HTML PAGE
  if(question_count == questions.length -1) {
      location.href = "end.html"
  } 

    question_count++;
    
    show(question_count);
}

function show(count) {
    const Question = document.getElementById('questions');
    Question.innerHTML = `<h2>Q.${question_count +1} ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>`

   toggleActive() 
}


// STEP-5 => SHOW FUNCTION WILL TRIGGERS WHEN THE DOM IS LOAEDED
document.addEventListener('DOMContentLoaded', show(0))


function toggleActive() {
    let Option = document.querySelectorAll('li.option');

    for(let i = 0; i < Option.length; i++) {
        Option[i].onclick = () => {
            for(let f = 0; f < Option.length; f++) {
                if(Option[f].classList.contains("active")) {
                    Option[f].classList.remove("active");
                }
            }
            Option[i].classList.add('active');
        }
    }
}