

var usersArray = [
  {
      "name" :"josue",
      "email" :"josue.ramirez2912@gmail.com",
      "recordTime" :"40",
      "lastPlayTime" :"120"
  },
  {
      "name" :"samuel",
      "email" :"samuelPrueba@gmail.com",
      "recordTime" :"60",
      "lastPlayTime" :"70"
  }
];
var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

var uncoverCards = 0;
var card1;
var card2;
var firstResult;
var secondResult;
var movements = 0;
var success = 0;
var timerActive = false;
var timerInterval;
var timer = 0;
var GameStarted = false;
var cardUnck = false;
var userLocate = 0;
var recordVal = 0;

var missedAudio = new Audio('./audio/Missed.wav');
var CardSuccess = new Audio('./audio/CardSuccess.wav');
var click = new Audio('./audio/click.wav');
var win = new Audio('./audio/win.mp3');
var modal = document.getElementById("modalLogin");
var btnLogin = document.getElementById("btn-login");


class User{
    constructor(name,email, recordTime, lastPlayTime){
        this.name = name;
        this.email= email;
        this.recordTime = recordTime;
        this.lastPlayTime = lastPlayTime;
    }

}
function timerCount(){
    if(timerActive){
        timerInterval = setInterval(()=>{
            timer++;
            document.getElementById("timer").textContent = timer.toString().padStart(2, "0") + "s";
            if(!timerActive){
                clearInterval(timerInterval);
            }
        },1000)
    }
    return timer;
}
function cardConten(card){
    let aux
    if(card == 1){  
        aux= `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/1.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">Android 17</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Android 17</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      15 Wins &nbsp; | &nbsp; 2 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
    } else if(card == 2){
        aux = `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/2.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">Android 18</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Android 18</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      13 Wins &nbsp; | &nbsp; 4 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

    }
    else if(card == 3){
        aux = `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/3.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">Trunks</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Future Trunks</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      9 Wins &nbsp; | &nbsp; 12 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

    } else if(card == 4){
        aux = `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/4.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">Goku</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Goku</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      79 Wins &nbsp; | &nbsp; 28 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

    } else if(card == 5){
        aux = `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/5.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">Krillin</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Krillin</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      20 Wins &nbsp; | &nbsp; 15 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

    } else if(card == 6){
        aux = `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/6.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">piccolo</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Piccolo</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      15 Wins &nbsp; | &nbsp; 15 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

    } else if(card == 7){
        aux = `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/7.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">Gohan</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Gohan</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      22 Wins &nbsp; | &nbsp; 15 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

    } else if(card == 8){
        aux = `
        <div class="content">
              <div class="back">
                <div class="back-content">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="90"  height="90"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /><path d="M10 13l0 .01" /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>
                  
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                <img src="/img/8.png" alt="">
                </div>
          
                <div class="front-content">
                  <small class="badge">Vegeta</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>Vegeta</strong>
                      </p>
                      <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                      31 Wins &nbsp; | &nbsp; 21 Losses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

    }
    return aux;
}

console.log(cards);

function uncover(card){
  if(GameStarted && cardUnck){
    let msj = document.getElementById("msj");
    uncoverCards++;
    if(uncoverCards == 1){  
        click.play();
        card1 = document.getElementById(`pc${card}`);
        card1.setAttribute("class","card-container active");
        firstResult = cards[card - 1];
        console.log(firstResult);
        card1.disabled = true;
        card1.innerHTML = cardConten(firstResult);
    } else if(uncoverCards == 2){
        card2 = document.getElementById(`pc${card}`);
        card2.setAttribute("class","card-container active");
        secondResult = cards[card - 1];
        card2.innerHTML = cardConten(secondResult);
        console.log(secondResult);
        card2.disabled = true;
        movements++;
        let movementsItem = document.getElementById("movementsCount");
        movementsItem.innerHTML = movements.toString().padStart(2, "0");

        if(firstResult == secondResult){
            CardSuccess.play();
            uncoverCards = 0;
            success++;
            let successesCount = document.getElementById("successesCount");
            successesCount.innerHTML = success.toString().padStart(2, "0");
            msj.textContent = "GREAT!!";
            msj.style.display = "block"
            msj.style.color = "green";
            msjtime =  setTimeout(()=>{
                msj.style.display = "none"
            }, 800)

            if (success == 8) {
              clearInterval(msjtime);
              timerActive = false;
              let userLoginFromStorage = localStorage.getItem("userLogin");
              userLoginFromStorage = JSON.parse(userLoginFromStorage);
              if (timer < userLoginFromStorage.recordTime) {
                userLoginFromStorage.recordTime = timer;
                userLoginFromStorage.lastPlayTime= timer;
                localStorage.setItem("userLogin", JSON.stringify(userLoginFromStorage));
                  usersArray[userLocate].recordTime = timer;
                  usersArray[userLocate].lastPlayTime = timer;
                  let record = document.getElementById("record");
                  record.innerHTML = timer + "s";
                  Swal.fire("Great New record!");
                
              } else if(userLoginFromStorage.recordTime == 0 || userLoginFromStorage.recordTime == 86400){
                userLoginFromStorage.recordTime = timer;
                userLoginFromStorage.lastPlayTime= timer;
                localStorage.setItem("userLogin", JSON.stringify(userLoginFromStorage));
                let record = document.getElementById("record");
                record.innerHTML = timer + "s";
                Swal.fire("Great New record!");
                  if(localStorage.getItem("newUser")){
                    localStorage.setItem("newUser", JSON.stringify(userLoginFromStorage));
                  }
              }
              msj.textContent = "WINNER!!";
              let buttonStar = document.getElementById("startButton");
              buttonStar.style.display = "block";
              win.play();
              msj.style.color = "green";
              msj.style.display = "block";
              timerInterval = clearInterval(timerInterval);
            }
        } else{ 
            missedAudio.play();
            msj.textContent = "MISSED!!";
            msj.style.color = "red";
            msj.style.display = "block"
            setTimeout(()=>{
                card1.setAttribute("class","card-container");
                card2.setAttribute("class","card-container");
                uncoverCards = 0;
                msj.style.display = "none"
                card1.disabled = false;
                card2.disabled = false;
            }, 800);
        }
    }
  }
    }

// function blockCards(){
//     for(let i= 0;i<=15;i++){
//         let card = document.getElementById(`pc${i + 1}`);
//         card.disabled = true
//     }
//     cardUnck = false;
// }

function unlockCards(){
  for(let i= 0;i<=15;i++){
    let card = document.getElementById(`pc${i + 1}`);
    card.disabled = false;
    
}
cardUnck = true;
}

/**burger button */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

function userAvailable(){
  if(localStorage.getItem("userLogin")){
    Hello();
    userBtn.style.display = "block";
    btnLogin.style.display = "none";
    GameStarted = true;
    return true;
  } else{
    btnLogin.style.display = "block";
    userBtn.style.display = "none";
    return false;
  }
}

function loginUser(){
  let userLog = document.getElementById("form-login");
  let auxLog = userLog.email.value;
  for(i = 0; i < usersArray.length; i++){
    if(usersArray[i].email === auxLog ){
      userLocate = i;
      localStorage.setItem("userLogin", JSON.stringify(usersArray[i]));
      userBtn.style.display = "block";
      btnLogin.style.display = "none";
      GameStarted = true;
      modal.style.display = "none";
      Hello();
      break;
    }else if(localStorage.getItem("newUser")){
      localStorage.setItem("userLogin",localStorage.getItem("newUser"));
      userBtn.style.display = "block";
      btnLogin.style.display = "none";
      GameStarted = true;
      modal.style.display = "none";
      Hello();
    } 
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User not found!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.log(usersArray.email);
    }
  }
}


function startGame(){
  if(localStorage.getItem("userLogin" || userAvailable())){
    cards = cards.sort(()=>{
      return Math.random() - 0.5;
  })

    for(let i= 0;i<=15;i++){
     let auxcard =  document.getElementById(`pc${i + 1}`)
      auxcard.setAttribute("class","card-container");
      auxcard.disabled = false;  
  }
    let record = document.getElementById("record");
    timer = 0;
    movements = 0;
    success = 0;
    let movementsItem = document.getElementById("movementsCount");
    movementsItem.innerHTML = movements.toString().padStart(2, "0");
    let aux = localStorage.getItem("userLogin");
    aux = JSON.parse(aux);
    let auxRecord = aux;
    recordVal = parseInt(auxRecord.recordTime);
    record.innerHTML = recordVal +"s";
    GameStarted = true;  
    let msj = document.getElementById("msj");
    msj.style.display = "none"
    let buttonStar = document.getElementById("startButton");
    buttonStar.style.display = "none";
    timerActive = true;
    timerCount();
    cardUnck = true;
    unlockCards;
    movements = 0;
  } else{
    GameStarted = false;
    Swal.fire({
      title: "You must log in first!",
      text: "Do you wanna do it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,log in!",
      cancelButtonText: "Close it!"
    }).then((result) => {
      if (result.isConfirmed) {
       modal.style.display = "block"
      }
    });
  }
  }



/**exit boton */
var userBtn = document.getElementById('userBtn');

userBtn.addEventListener('click', (event) => {
  if (event.target.matches('.userl') || event.target.matches('.userl::after')) {
    clearInterval(timerInterval);
    timerActive = false;
    movements = 0;
    success = 0;
    timer = 0;
    document.getElementById("timer").textContent = "00s";
    let movementsItem = document.getElementById("movementsCount");
    movementsItem.innerHTML = movements.toString().padStart(2, "0");
    let succesitem = document.getElementById("successesCount");
    succesitem.innerHTML = movements.toString().padStart(2, "0");
   localStorage.removeItem("userLogin");
   btnLogin.style.display = "block"
   userBtn.style.display = "none";
   GameStarted = false;
   console.log("click  exit");
   let nameUSer = document.getElementById("nameUser");
   nameUSer.style.display = "none";
   nameUSer.innerHTML = " ";
   let buttonStar = document.getElementById("startButton");
    buttonStar.style.display = "block";
   for(let i= 0;i<=15;i++){
    let auxcard =  document.getElementById(`pc${i + 1}`)
     auxcard.setAttribute("class","card-container");
     auxcard.disabled = false;  
 }
  }
});


/**active modal */

btnLogin.addEventListener("click", ()=>{
  modal.style.display = "block"
})

modal.addEventListener('click', (event) => {
  if (event.target.matches('.modal') || event.target.matches('.modal::before')) {
    modal.style.display = "none"
  }
});


function registerUser() {

  let form = document.getElementById("form-register");
  let name = form.name.value;
  let email = form.email.value;

 
  let newUser = new User(name, email, "86400", "00");
  usersArray.push(newUser);
  localStorage.setItem("userLogin",JSON.stringify(newUser));
  localStorage.setItem("newUser", JSON.stringify(newUser));
  modal.style.display = "none";
  btnLogin.style.display = "none";
  let nameUSer = document.getElementById("nameUser");
  nameUSer.style.display = "block";
  nameUSer.innerHTML = newUser.name;
  Hello();
}
function loadNewUser() {
  
  let usua = JSON.parse(localStorage.getItem("newUser"));

  if (usua) {
    usersArray.push(usua);
    console.log("user registred before")
    console.log(usua)
  }
}

function Hello(){
  let user = JSON.parse(localStorage.getItem("userLogin"));
  let newUser = JSON.parse(localStorage.getItem("newUser"));
  if (user) {
    Swal.fire(`Bienvenido ${user.name}`);
    let nameUSer = document.getElementById("nameUser");
    nameUSer.innerHTML = user.name;
    nameUSer.style.display = "block";
  } else if (newUser){
    Swal.fire(`Bienvenido ${newUser.name}`);
    let nameUSer = document.getElementById("nameUser");
    nameUSer.style.display = "block";
    nameUSer.innerHTML = newUser.name;
  }
  }

window.addEventListener("onload", ()=>{
  Hello();
})