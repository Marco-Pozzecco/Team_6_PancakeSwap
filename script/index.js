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

    chk3.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
      if(path == '/resources/svgs/logo_black.svg'){
        url.setAttribute('src', '/resources/svgs/logo_white.svg');
      }else if(path == '/resources/svgs/logo_white.svg'){
        url.setAttribute('src', '/resources/svgs/logo_black.svg');
      }
      
    });

    const chk = document.getElementById("chk");

    chk.addEventListener("change", () => {
      document.body.classList.toggle("theme-light");
        
    });

    