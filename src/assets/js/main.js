// Buttons
var btnAddText = document.querySelector("#addText")
var btnCancel = document.querySelector("#cancel")
var btnAddPlay = document.querySelector("#addPlay")

var btnPlay = document.querySelector("#play")
var btnNewPlay = document.querySelector("#newPlay")
var btnCancelPlay = document.querySelector("#cancelPlay")




//Páginas
var pagHome = document.querySelector("#pagHome")
var pagAddText = document.querySelector("#pagText")
var pagPlay = document.querySelector("#pagPlay")



btnAddText.addEventListener('click', () => {
    openClose(pagAddText, pagHome)
})

btnCancel.addEventListener('click', () => {
    openClose(pagHome, pagAddText)
})

btnPlay.addEventListener('click', () => {
    openClose(pagPlay, pagHome)
})
btnCancelPlay.addEventListener('click', () => {
    openClose(pagHome, pagPlay)
})


btnAddPlay.addEventListener('click', () => {
    openClose(pagPlay, pagAddText)
})

btnNewPlay.addEventListener('click', () => {
    alert('novo jogo')
})





//função para abrir e fechar página
function openClose(pagOpen, pagClose){
    pagOpen.classList.add('flex')
    pagOpen.classList.remove('hidden')

    pagClose.classList.add('hidden')
    pagClose.classList.remove('flex')
}