// Import statements
// import {Utilities} from 'utilities';

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

    //   if(path == '/resources/svgs/logo_black.svg'){
    //     url.setAttribute('src', '/resources/svgs/logo_white.svg');
    //     bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_dark)";
    //   }else if(path == '/resources/svgs/logo_white.svg'){
    //     url.setAttribute('src', '/resources/svgs/logo_black.svg');
    //     bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_light)";
    //   }

      
    });
    function getValue() {
        var isChecked3 = document.getElementById("chk3").checked;
        var chk = document.getElementById("chk");
         
        if(isChecked3){
            logo.setAttribute('src' , '/resources/svgs/logo_black.svg');
            bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_light)";
            console.log("Input is checked");
            chk.checked = true;

        } else {
            logo.setAttribute('src', '/resources/svgs/logo_white.svg');
            bunnyBottomGradient.attributes.fill.value = "url(#paint0_linear_dark)";
            console.log("is not checked");
            chk.checked = false;
        }
    }

    const chk = document.getElementById("chk");

    chk.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
        
    });

    