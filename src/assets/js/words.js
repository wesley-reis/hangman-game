words = [
    "paralelepipedo","tesouro","cajamanga","conjuramento", "arte"
]

const ListWords = (localStorage.getItem('words'))
const inputText = input.value

if (ListWords == null) {
    localStorage.setItem('words', JSON.stringify(words)) 
}



