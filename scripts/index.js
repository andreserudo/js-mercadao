import { answers } from "../scripts/answers.js";
const levels = ['home', 'declaration'];
const initialLevel = 0;
let currentLevel = 0;
const btnNextLevel = document.getElementsByClassName("next-level")[0];
const inpExercise = document.querySelectorAll(".code-input");

const showNextLevel = () => {
    const currentLevelDivContainer = document.getElementsByClassName(levels[initialLevel])[0];
    currentLevelDivContainer.classList.add("inactive-level");
    currentLevel += 1;
    const nextLevelDivContainer = document.getElementsByClassName(levels[currentLevel])[0];
    nextLevelDivContainer.classList.remove("inactive-level");
};

const checkAnswer = (event) => {
    const id = event.target.id;
    const inputWithAnswer = document.getElementById(id); 
    const currentAnswer = `${inputWithAnswer.value}`;

    if(currentAnswer === answers[id]) {
        inputWithAnswer.classList.add("positive-feedback");
        inputWithAnswer.disabled = true;
    }
}

inpExercise.forEach(input => {
    input.addEventListener("change", checkAnswer);
})

btnNextLevel.addEventListener("click", showNextLevel);
