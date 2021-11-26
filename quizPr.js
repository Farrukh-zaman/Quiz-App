function submitForm(e) {

    e.preventDefault()

    let name = document.forms['welcome_form']['name'].value

    sessionStorage.setItem('name', name);

    location.href = 'quiz.html';

}


let questions = [

    {
        // id:0,
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
        // id:1,
        question:"What is the Full form of ROM?",
        answer: "Read Only Memory",
        options: [
            'Random Access Memory',
            'Read Only Memory',
            'Run access memory',
            'None of the above'
        ]
    },
    
    {
        // id:2,
        question:"Pick the full form of CPU from below",
        answer: "Central processing unit",
        options: [
            'central program Unit',
            'centrall processing unit',
            'Central processing unit',
            'None of the above'
        ]
    },

    {
        // id:3,
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
        // id:4,
        question: "Full form of GUI",
        answer: "Graphical user interface",
        options: [
            "General user Interface",
            "Graphical user interface",
            "Generic user Interface",
            "None of the above"
        ]
    }

];

let question_count = 0;
let points = 0;

function Next() {

    let user_answer = document.querySelector('li.option.active').innerHTML
    
    if(user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem('Points', points)
    }
    
    if(question_count == questions.length - 1) {
        location.href = 'end.html'
    }

    question_count++;
    show(question_count)

}

function show(count) {
  
    let Question = document.getElementById('questions');
    
    Question.innerHTML = `<h2>Q.${count + 1} ${questions[question_count].question} </h2>
    
    <ul class='option_group'>
    <li class='option'>${questions[count].options[0]}</li>
    <li class='option'>${questions[count].options[1]}</li>
    <li class='option'>${questions[count].options[2]}</li>
    <li class='option'>${questions[count].options[3]}</li>
    </ul>`

    toggleActive()

}

window.addEventListener('DOMContentLoaded', show(0))

function toggleActive() {
    let Option = document.querySelectorAll('li.option');
    
    for(let i = 0; i < Option.length; i++) {
        Option[i].onclick = () => {

            for(let j = 0; j < Option.length; j++) {
                
            if(Option[j].classList.contains('active')) {
                Option[j].classList.remove('active')
                
            }

            }

            Option[i].classList.add('active')
        }
    }
}












