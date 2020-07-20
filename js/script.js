const submitAsked = document.getElementById('submit-ask');
const submitSearch = document.getElementById('submit-search');
const questionAsked = document.getElementById('question-asked');

let questionsCorner = {};
let questionCount = 1;

submitAsked.addEventListener('click', () => {
        questionsCorner['Q' + questionCount] = questionAsked.value;
        localStorage.setItem('Q' + questionCount, questionAsked.value);
        questionCount += 1;
        questionAsked.value = '';
        console.log(questionsCorner);
    }
);
