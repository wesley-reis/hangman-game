words = [
    "paralelepipedo",
    "tesouro",
    "cajamanga",
    "conjuramento",
    "arte",
    "Axioma",
    "Azulejo",
    "Blitz",
    "Catarro",
    "Coçar",
    "Crespo",
    "Cripta",
    "Duplex",
    "Girar",
    "Haicai",
    "Hera",
    "Indigno",
    "Intrigante",
    "Jazz",
    "Linfa",
    "Marfim",
    "Psique",
    "Quartzo",
    "Quiz",
    "Quorum",
    "Tonto",
    "Torpor",
    "Valsa",
    "Vaporizar",
    "Vertiginoso",
    "Vicissitude",
    "Xilofone",
    "Apicultor",
    "Auditor",
    "Bartender",
    "Cerimonialista",
    "Chef",
    "Coach",
    "Desembargador",
    "Despachante",
    "Endocrinologista",
    "Embaixador",
    "Gerentólogo",
    "Headhunter",
    "Juiz",
    "Pizzaiolo",
    "Perito",
    "Quiroprata",
    "Roteirizador",
    "Silvicultor",
    "Trader",
    "Albatroz",
    "Alpaca",
    "Anchova",
    "Bacalhau",
    "Badejo",
    "Barracuda",
    "Beluga",
    "Chinchila",
    "Craca",
    "Escaravelho",
    "Gerbo",
    "Gnu",
    "Gralha",
    "Hamster",
    "Lhama",
    "Lince",
    "Marreco",
    "Melro",
    "Ocapi",
    "Ouriço",
    "Pelicano",
    "Percevejo",
    "Pirilampo",
    "Quati",
    "Rouxinol",
    "Sanguessuga",
    "Surucucu",
    "Tapir",
    "Texugo",
    "Vison",
    "Zebu",
    "Ampulheta",
    "Anzol",
    "Almofariz",
    "Botija",
    "Candelabro",
    "Dedaleira",
    "Desfibrilador",
    "Echarpe",
    "Estribo",
    "Fagote",
    "Fantoche",
    "Freezer",
    "Guidom",
    "Navalha",
    "Jaleco",
    "Modem",
    "Nebulizador",
    "Novelo",
    "Quepe",
    "Selim",
    "Sintetizador",
    "Spray",
    "Urinol",
    "Vuvuzela",
    "Webcam",
    "Xadrez",
    "Xilofone",
    "Alfarroba",
    "Bergamota",
    "Ciriguela",
    "Cranberry",
    "Feijoa",
    "Groselha",
    "Imbu",
    "Jenipapo",
    "Kiwi",
    "Lichia",
    "Mexerica",
    "Nectarina",
    "Nêspera",
    "Pequi",
    "Pistache",
    "Pomelo",
    "Saguaraji",
];

const ListWords = localStorage.getItem("words");
const inputText = input.value;

if (ListWords == null) {
    localStorage.setItem("words", JSON.stringify(words));
}
