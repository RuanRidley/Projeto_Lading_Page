var SetaDireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex" 
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:55px"
}

function RolaParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    SetaDireita.style ="display:flex"
    SetaEsquerda.style ="display:none; margin-top:55px"
}