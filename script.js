const buttonaviso = document.querySelector('.button-Aviso')
const aviso = document.querySelector('.aviso')

buttonaviso.addEventListener('click', function() {
    aviso.classList.toggle('active')
})