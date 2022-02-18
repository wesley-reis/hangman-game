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

//Div Search
var divSearch = document.querySelector("#divSearch")

//input add text
let input = document.querySelector('#input')  

//message
let message = document.querySelector("#message")


btnAddText.addEventListener('click', () => {
    openClose(pagAddText, pagHome)
    input.focus()

})

btnCancel.addEventListener('click', () => {
    openClose(pagHome, pagAddText)
    openClose('',divSearch)
})

btnPlay.addEventListener('click', () => {
    openClose(pagPlay, pagHome)
    openClose(divSearch)
})
btnCancelPlay.addEventListener('click', () => {
    openClose(pagHome, pagPlay)
    openClose('',divSearch)
})


btnAddPlay.addEventListener('click', () => {

    const ListWords = JSON.parse(localStorage.getItem('words')) || []
    const inputText = input.value

    if (inputText == '') {
        message.classList.remove('hidden')
        message.innerHTML = '<p class="text-lg font-bold text-[#AE5336]">preencha o campo por favor</p>'

        setTimeout(() => {
            message.classList.add('hidden')
        }, 3000)
        return 
    }
    
    const index = ListWords.indexOf(inputText)

    const existsInLocalStorage = index != -1 

    if (existsInLocalStorage) {
     
        message.classList.remove('hidden')
        message.innerHTML = '<p class="text-lg font-bold text-[#AE5336]">A palavra '+ inputText +' já está cadastrada</p>'
        input.value = ''
        input.focus()

        setTimeout(() => {
            message.classList.add('hidden')
        }, 3000)

        return
    }else{
        ListWords.push(inputText)
        input.value = ''

        message.classList.remove('hidden')
        message.innerHTML = '<p class="text-lg font-bold text-[#608C62]">Palavra cadastrada com sucesso ;)</p>'

        setTimeout(() => {
            message.classList.add('hidden')
            localStorage.setItem('words', JSON.stringify(ListWords))


            openClose(pagPlay, pagAddText)
            openClose(divSearch)
        }, 3000)

   
    }

})

btnNewPlay.addEventListener('click', () => {
    alert('novo jogo')
    openClose(divSearch)
})





//função para abrir e fechar página
function openClose(pagOpen=null, pagClose=null){
    if(pagOpen){
        pagOpen.classList.add('flex')
        pagOpen.classList.remove('hidden')
    }
    if(pagClose){
        pagClose.classList.add('hidden')
        pagClose.classList.remove('flex')
    }else{
        pagOpen.classList.add('flex')
        pagOpen.classList.remove('hidden')
    
        pagClose.classList.add('hidden')
        pagClose.classList.remove('flex')
    }

}


