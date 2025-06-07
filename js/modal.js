const btn = document.querySelector('#open-modal-btn')
const backdrop = document.querySelector('#backdrop')
const closeBtn = document.querySelector('#close-modal-btn')
btn.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)

function toggleModal() {
    backdrop.classList.toggle('active')

    // або add, але тоді не закриється, бо тогл додає якщо нема, видаляє якщо клас є
}