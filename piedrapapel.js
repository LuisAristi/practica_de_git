let jugador = "";
let maquina = getComputerChoice();
let resultShower = document.getElementById("resultShower")

function getPlayerChoicerock() {
    return  jugador = "piedra";
}

function getPlayerChoicepaper() {
    return  jugador = "papel";
}

function getPlayerChoicescisor() {
    return  jugador = "tijera";
}

function getComputerChoice() {
    let choices = ["piedra", "papel", "tijera"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function jugar() {
    switch (jugador) {
        case "piedra":
            if (maquina === "piedra"){
                resultShower.textContent = "EMPATE";
            } else if (maquina === "tijera"){
                resultShower.textContent = "GANASTE";}
                else resultShower.textContent = "PERDISTE";
            break;

        case "papel":
            if (maquina === "piedra"){
                resultShower.textContent = "GANASTE";
            } else if (maquina === "tijera"){
                resultShower.textContent = "PERDISTE";}
                else resultShower.textContent = "GANASTE";
            break;
        
        case "tijera":
            if (maquina === "piedra"){
                resultShower.textContent = "perdiste";
            } else if (maquina === "tijera"){
                resultShower.textContent = "empate";}
                else resultShower.textContent = "ganaste";
            break;

        default:
            resultShower.textContent = "elige a tu favorito";
            break;
    }
};



console.log(jugar())


