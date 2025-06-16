const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        document.body.style.background = radio.value;
    })
})