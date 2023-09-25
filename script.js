const eyes = ["eyes1.svg", "eyes2.svg", "eyes3.svg", "eyes4.svg"];

let i = 0;

function blink(){
    i++;
    if(i > eyes.length - 1){
        i = 0;
    }
    document.querySelector("#eyes").src = eyes[i];
}

setInterval(blink, 2000);

const input1 = document.querySelector('#guess1');
const buttonGame1 = document.querySelector('#btnGame1');
const answer1 = Math.floor(Math.random()*20) + 1;

const inputNew1 = document.getElementById("guess1");
inputNew1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btnGame1").click();
    }
});

buttonGame1.addEventListener('click', playGame1);

function playGame1(){
    const userNumber1 = document.querySelector('#guess1').value;
    
    if (userNumber1 < 1 || userNumber1 > 20){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Choose a number between 1 and 20!',
        })
    }

    else if (isNaN(userNumber1)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter numbers only!',
        })
    }

    else{
        if (userNumber1 < answer1){
            Swal.fire('My number is higher!');
        }

        else if (userNumber1 > answer1){
            Swal.fire('My number is lower!');
        }

        else{
            Swal.fire({
                title: 'Yay!',
                text: 'You won!',
                imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
                imageWidth: 300,
                imageHeight: 200,
            })
        }
 
    }

}

const input2 = document.querySelector('#guess2');
const buttonGame2 = document.querySelector('#btnGame2');
const answer2 = Math.floor(Math.random()*100) + 1;

//используем это вместо закомментированного блока кода выше, он не работает
const inputNew2 = document.getElementById("guess2");
inputNew2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btnGame2").click();
    }
});

buttonGame2.addEventListener('click', playGame2);

function playGame2(){
    const userNumber2 = document.querySelector('#guess2').value;
    
    if (userNumber2 < 1 || userNumber2 > 100){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Choose a number between 1 and 100!',
        })
    }

    else if (isNaN(userNumber2)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter numbers only!',
        })
    }

    else{
        if (userNumber2 < answer2){
            Swal.fire('My number is higher!');
        }

        else if (userNumber2 > answer2){
            Swal.fire('My number is lower!');
        }

        else{
            Swal.fire({
                title: 'Yay!',
                text: 'You won!',
                imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
                imageWidth: 300,
                imageHeight: 200,
            })
        }

    }
}












