const btn = document.querySelector('#open-modal-btn')
const backdrop = document.querySelector('#backdrop')
const closeBtn = document.querySelector('#close-modal-btn')
const modalForm = document.querySelector('.modal__form')
const modalInput= document.querySelector('js-input')
btn.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)

function toggleModal() {
    backdrop.classList.toggle('active')

    // або add, але тоді не закриється, бо тогл додає якщо нема, видаляє якщо клас є
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

