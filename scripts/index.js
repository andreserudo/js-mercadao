const levels = ['home', 'declaration'];
const initialLevel = 0;
let currentLevel = 0;
const btnNextLevel = document.getElementsByClassName("next-level")[0];

const showNextLevel = () => {
    const currentLevelDivContainer = document.getElementsByClassName(levels[initialLevel])[0];
    currentLevelDivContainer.classList.add("inactive-level");
    currentLevel += 1;
    const nextLevelDivContainer = document.getElementsByClassName(levels[currentLevel])[0];
    nextLevelDivContainer.classList.remove("inactive-level");
};

btnNextLevel.addEventListener("click", showNextLevel);
