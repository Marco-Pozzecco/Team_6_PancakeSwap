// Import statements
import Utilities from "./utilities.mjs";
import Randomize from "./randomize.mjs";

//open modal popup menu from navbar

const openModalBtn = document.querySelectorAll('[data-modal-target]');
    const closeModalBtn = document.querySelectorAll('[data-close-btn]');
    const overlay = document.getElementById('overlay');
    
    const logo = document.getElementById('logo1');
    
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
      
    //   if(path == '/resources/svgs/logo_white.svg'){
    //     //url.setAttribute('src', '/resources/svgs/logo_black.svg');
    //     path = '/resources/svgs/logo_black.svg';
    //     console.log(path);
        
    //   }else {
    //     //url.setAttribute('src', '/resources/svgs/logo_white.svg');
    //     path = '/resources/svgs/logo_white.svg';
    //     console.log(url.attributes.src.value);
    //   }
    getValue();

      
    });
    function getValue() {
        var isChecked3 = document.getElementById("chk3").checked;
        var chk = document.getElementById("chk");
         
        if(isChecked3){
            logo.setAttribute('src' , '/resources/svgs/logo_black.svg');
            bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_light)";
            console.log("Input is checked");
            chk.checked = true;
            overlay.style.backgroundColor = '#280D5F'; //#280D5F    rgba(40,13,95,0.6)

        } else {
            logo.setAttribute('src', '/resources/svgs/logo_white.svg');
            bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_dark)";
            console.log("is not checked");
            chk.checked = false;
            overlay.style.backgroundColor = '#F4EEFF'; //#F4EEFF    rgba(244, 238, 255, 0.6)
        }
    }

    const chk = document.getElementById("chk");

    chk.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
      getValue2();
        
    });
    function getValue2() {
        var isChecked3 = document.getElementById("chk3");
        var chk = document.getElementById("chk").checked;
         
        if(chk){
            logo.setAttribute('src' , '/resources/svgs/logo_black.svg');
            console.log("chk is checked");
            isChecked3.checked = true;
            overlay.style.backgroundColor = '#280D5F'; //#280D5F    rgba(40,13,95,0.6)

        } else {
            logo.setAttribute('src', '/resources/svgs/logo_white.svg');
            console.log("is not checked");
            isChecked3.checked = false;
            overlay.style.backgroundColor = '#F4EEFF'; //#F4EEFF    rgba(244, 238, 255, 0.6)
        }
    }

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
