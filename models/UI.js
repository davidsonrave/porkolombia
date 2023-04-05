export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }

  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  // showScores(score) {
  //   const gameOverHTML = `
  //     <h1>Result</h1>
  //     <h2 id="score">Your scores: ${score}</h2>
  //     `;
  //   // <h2 id="score">Your scores: ${quiz.score}</h2>

  //   const element = document.getElementById("section");
  //   element.innerHTML = gameOverHTML;
  // }

  /*showScores(score) {
    if (score === 8) {
     var  gameOverHTML = `
      <img
      class="logoP"
      src="../assets/img/¡GANASTE!.png"
      alt="logo"
      width="737px"
      height="106px"
    />
    <p><b>Eres un verdadero Porklover.</b></p>
    <p>
      Toma un screen de esta pantalla y acércate <br />
      a la cocina móvil para redimir tu premio
    </p>
    <canvas id="celebration"></canvas>
        `;
    }else{
     var  gameOverHTML = `
     <img class="logoG" src="../assets/img/GraciasporPArticipar 1 (1).png" alt="logo" width="763px" height="277px">
     <p>Esta vez no ganastes</p>
     <p><b>Sigue disfrutando del FICCI <br/> con carne de cerdo colombiana.</b></p>
        `;
    }
   


    const element = document.getElementById("section");
    element.innerHTML = gameOverHTML;
  }*/


   showScores(score) {
    if (score == 8 ) {
      window.location.pathname = "javascript-quiz-oop-master/pages/ganador.html";
    } else {
      window.location.pathname= "javascript-quiz-oop-master/pages/perdedor.html";
    }
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
  }
}
