// Import statements
import Utilities from "./utilities.mjs";
import Randomize from "./randomize.mjs";

//open modal popup menu from navbar

const openModalBtn = document.querySelectorAll('[data-modal-target]');
    const closeModalBtn = document.querySelectorAll('[data-close-btn]');
    const overlay = document.getElementById('overlay');
    
    const url = document.getElementById('logo1');
    let path = url.attributes[2].textContent;
    console.log(url.attributes[2].textContent);

    openModalBtn.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })
    overlay.addEventListener('click', ()=>{
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal =>{
            closeModal(modal)
        })
    })

    closeModalBtn.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })
    function openModal(modal){
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }
    function closeModal(modal){
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }

    //change theme color
    const chk3 = document.getElementById("chk3");
    const bunnyBottomGradient = document.getElementById("bottomGradient");

    chk3.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
      if(path == '/resources/svgs/logo_black.svg'){
        url.setAttribute('src', '/resources/svgs/logo_white.svg');
        bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_dark)";
      }else if(path == '/resources/svgs/logo_white.svg'){
        url.setAttribute('src', '/resources/svgs/logo_black.svg');
        bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_light)";
      }
      
    });

    const chk = document.getElementById("chk");

    chk.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
        
    });

// Win prizes random DOM injection
const winPrizesPrediction = Utilities.getElement('#value-prediction');
const winPrizesLottery = Utilities.getElement('#value-lottery');

function randomPredictionValue() {
    // DOM manipulation
    let value = Number(winPrizesPrediction.textContent);
    let amount = Randomize.randomNumInRange(1, 10);
    
    // Addizione o sottrazione casuale
    if (Math.random() >= 0.49) {
        return winPrizesPrediction.textContent = (value + amount);
    } else {
        return winPrizesPrediction.textContent = (value - amount);
    }
}

function randomLotteryValue() {
    // DOM manipulation
    let value = Number(winPrizesLottery.textContent);
    let amount = Randomize.randomNumInRange(1000, 10000);
    
    // Addizione o sottrazione casuale
    if (Math.random() >= 0.49) {
        return winPrizesLottery.textContent = (value + amount);
    } else {
        return winPrizesLottery.textContent = (value - amount);
    }

}

function changePredictionValueAtRandomInterval() {
    Randomize.callFuncAtInterval(randomPredictionValue, 30000, 60000); // Intervallo tra 5min e 10min
} 

function changeLotteryValueAtRandomInterval() {
    Randomize.callFuncAtInterval(randomLotteryValue, 10000, 20000); // Intervallo tra 2min e 5min
}

// Call function on DOM load
document.addEventListener('DOMContentLoaded', changePredictionValueAtRandomInterval);
document.addEventListener('DOMContentLoaded', changeLotteryValueAtRandomInterval);
