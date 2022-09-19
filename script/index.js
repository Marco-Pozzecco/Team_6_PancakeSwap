// Import statements
import {Utilities} from 'utilities';

//open modal popup menu from navbar

const openModalBtn = document.querySelectorAll('[data-modal-target]');
    const closeModalBtn = document.querySelectorAll('[data-close-btn]');
    const overlay = document.getElementById('overlay');
    const logo = document.getElementsByClassName('logo-section');
    // const url = "/resources/svgs/logo_white.svg";
    // const url = "../../resources/svgs/logo_white.svg";
    const url = document.getElementById('logo1');

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

    chk3.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
      url.setAttribute('src', '/resources/svgs/logo_black.svg');
    });

    const chk = document.getElementById("chk");

    chk.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
        
    });

    