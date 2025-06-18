const btn = document.querySelector('#open-modal-btn')
const backdrop = document.querySelector('#backdrop')
const closeBtn = document.querySelector('#close-modal-btn')
const modalForm = document.querySelector('.modal__form')
const modalInput= document.querySelector('js-input')
btn.addEventListener('click', onOpenModal)
closeBtn.addEventListener('click', onCloseModal)

function onEscapePress(event) {
    console.log(event.code);
    // object values and codes
    if(event.code === 'Escape') {
        onCloseModal()
    }
}

backdrop.addEventListener('click', onBackdropClick)

function onBackdropClick(event) {
    if (event.turget === event.currentTarget) {
        onCloseModal()
    }
}

function onOpenModal() {
    window.addEventListener('keydown', onEscapePress)
    backdrop.classList.add('active')

    // або add, але тоді не закриється, бо тогл додає якщо нема, видаляє якщо клас є
}

function onCloseModal() {
    window.removeEventListener('keydown', onEscapePress)
    backdrop.classList.remove('active')
}

// modalForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.dir(event.currentTarget.elements.value);
// })

// modalInput.addEventListener('focus', ()=> {
//     console.log('focus made');
// })

// modalInput.addEventListener('blur', ()=> {
//     console.log('blur made');
// })

