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

//contador de silabas
let countSilab = document.querySelector("#silab-count")

// search
let inputSearch = document.querySelector("#inputSearch")


//secret text
var secret =''

//search silab
inputSearch.addEventListener('keyup', (e) => {
    var key = e.which || e.keyCode
    if(key == 13){
        verifyLeter()
    }
})

//open pag e add text
btnAddText.addEventListener('click', () => {
    openClose(pagAddText, pagHome)
    input.focus()

})

//cancel game
btnCancel.addEventListener('click', () => {
    openClose(pagHome, pagAddText)
    openClose('',divSearch)
})

//play game
btnPlay.addEventListener('click', () => {
    startGame()
    openClose(pagPlay, pagHome)
    openClose(divSearch, null)
})
//cancel game
btnCancelPlay.addEventListener('click', () => {
    clearFrom()
    stopGame()
    openClose(pagHome, pagPlay)
    openClose(null,divSearch)
})

//add text and init game
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

            clearFrom()
            startGame()
            openClose(pagPlay, pagAddText)
            openClose(divSearch, null)
        }, 2000)

   
    }

})

//init new game
btnNewPlay.addEventListener('click', () => {
    clearFrom()
    startGame()
    openClose(divSearch,null)
})

//verify we leter exists in text
function verifyLeter(){
    var leter = inputSearch.value.toUpperCase()
    countLeter = 0
    pos = secret.indexOf(leter)
    ok = secret.indexOf(leter) !== -1

    while(pos != -1){
        countLeter ++
        countSilab.children[pos].textContent = leter
        pos = secret.indexOf(leter, pos +1)
    }
    console.log(secret)
    console.log(ok)


}


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

function startGame(){
    pagPlay.classList.add('start')
    sortText()
}

function stopGame(){
    pagPlay.classList.remove('start')
}

function clearFrom(){
    while(countSilab.hasChildNodes()){
        countSilab.removeChild(countSilab.lastChild)
    }
}
//text random
function sortText(){
    const ListWords = JSON.parse(localStorage.getItem('words'))
    var text = ListWords[Math.floor(Math.random()*ListWords.length)]
    secret = text.toUpperCase()
    leter =''
    for(let index=0; index < text.length; index++) {
        var p = document.createElement("p")
        p.className="border-b-4 border-[#86734d] px-3 text-gray-50 text-xl font-medium" 
        //p.textContent = text[index].toUpperCase()
        countSilab.appendChild(p)
    }

}


