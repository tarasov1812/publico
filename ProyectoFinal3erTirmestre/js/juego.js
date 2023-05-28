/**
 * juego.js inclue todas las funciones para el juego de TA-TE-TI
 * @author Aleksandr Tarasov 1DAW
 */

// añadimos a las variables los botones
const jugar = document.getElementById('juego');

// creamus un ivento onclick en botom jugar

jugar.onclick = function() {
    // añadimos a las variables 9 cuadrados para el juego
    const box1 = document.getElementById('1');
    const box2 = document.getElementById('2');
    const box3 = document.getElementById('3');
    const box4 = document.getElementById('4');
    const box5 = document.getElementById('5');
    const box6 = document.getElementById('6');
    const box7 = document.getElementById('7');
    const box8 = document.getElementById('8');
    const box9 = document.getElementById('9');

    // creamos una matriz de los cuadrados
    const elements = [
        [box1, box2, box3],
        [box4, box5, box6],
        [box7, box8, box9]
    ];

    // mostramos los 9 cuadrodos por la pantalla cuando empieze el juego
    const container = document.getElementById('container');
    container.style.display = 'block';

    // escondimos el boton "jugar"
    jugar.style.display = 'none';

    // pedimos los nombre del jugadores con prompt
    let firstPlayerName = prompt('Dime el nombre del 1 jugador');
    let secondPlayerName = prompt('Dime el nombre del 2 jugador');

    // ponemos los nombres de jugadores por defecto, 
    // en caso si el usuario no pone los nombres
    if(firstPlayerName === null || firstPlayerName === ''){
        firstPlayerName = 'Jugador 1';
    }
    if(secondPlayerName === null || secondPlayerName === ''){
        secondPlayerName = 'Jugador 2';
    }

    // El jugo tiene dos jugadores (con simbolo 'O' y con 'X')
    let currentPlayer = 'X'; 
    // creamos variable para contar los pasos
    let moveCount = 0;


    /**
     * función para comprobar si hay tres elemntos en una fila
     * @returns true - si hay, false si no hay
     */
    function checkForWin() {
        if (box1.innerHTML.trim() !== "" && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) {
            return true;
        } else if (box4.innerHTML.trim() !== "" && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML) {
            return true;
        } else if (box7.innerHTML.trim() !== "" && box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML) {
            return true;
        } else if (box1.innerHTML.trim() !== "" && box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML) {
            return true;
        } else if (box2.innerHTML.trim() !== "" && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML) {
            return true;
        } else if (box3.innerHTML.trim() !== "" && box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML) {
            return true;
        } else if (box1.innerHTML.trim() !== "" && box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML) {
            return true;
        } else if (box3.innerHTML.trim() !== "" && box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML) {
            return true;
        }
        return false;
    }

    /**
     * Función para cambiar el jugador
     */
    function switchPlayer() {
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
    }

    /**
     * Función para reemplazar el fondo al hacer clic en el cuadrado y para reemplazar el contenido del
     * div. Después del clic, cambiamos los jugadores y el símbolo que juega. 
     * La función utiliza funciones auxiliares para comprobar que es el ganador.
     * Si se determina el ganador, muestra prompt en la pantalla 
     * Depues empieza el juego otra vez
     */
    function changeBackgroundColor() {
        if (this.innerHTML.trim() === "") {
            this.style.backgroundColor = currentPlayer === 'X' ? 'yellow' : 'green';
            this.innerHTML = currentPlayer;
            moveCount++;
            // si la funcion checkForWin devuelve true - mostramos el ganador por pantalla 
            // y empezamos otro juego
            if (checkForWin()) {
                if(currentPlayer === 'X'){
                    alert(firstPlayerName + " ganó!\n Felicitaciones!!!!!!");
                } else {
                    alert(secondPlayerName + " ganó!\n Felicitaciones!!!!!!");
                }
                location.reload(); 
                container.style.display = 'none';
            // si paso 9 turnos - significa que es empate
            // empesamos otro juego
            } else if (moveCount === 9) {
                alert("EMPATE!");
                location.reload(); 
                container.style.display = 'none';
            } else {
                switchPlayer();
            }
        }
    }

    /**
     * función para cambiar el color del borde al pasar el ratón
     */
    function borderChangeEnter(){
        this.style.border = '5px dashed red';
    }

    /**
     * función para сacnelar el cambio del color del borde al salir el ratón
     */
    function borderChangeLeave(){
        this.style.border = '5px solid black';
    }

    /**
     * funcion del juego
     */
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements[i].length; j++) {
        elements[i][j].onmouseenter = borderChangeEnter;
        elements[i][j].onmouseleave = borderChangeLeave;
        elements[i][j].onclick = changeBackgroundColor;
        }
    }
}