var encodeButton = document.getElementById("encode");
var decodeButton = document.getElementById("decode");
var copyButton = document.getElementById("copiar");
var eraseButton = document.getElementById("reset");

function capturaEcodifica(){
    var textoEntrada = document.getElementById("textoParaEnDec");
    var input = textoEntrada.value;
    var teste = seMaiusculasOuAcentuadas(input);
    if(input == ""){
        alert("Não há nada para criptografar");
    }else if(teste==true){
        alert("Use apenas letras minuscúlas e sem acento.");
    }else{
        var codificado = codificar(input);
        resultado(codificado);
        copyButton.style.display = 'inline-block';
    }
}
function capturaEdecodifica(){
    var textoEntrada = document.getElementById("textoParaEnDec");
    var input = textoEntrada.value;
    var teste = seMaiusculasOuAcentuadas(input);
    if(input == ""){
        alert("Não há nada para descriptografar");
    }else if(teste==true){
        alert("Use apenas letras minuscúlas e sem acento.");
    }else{
        var decodificado = decodificar(input);
        resultado(decodificado);
        copyButton.style.display = 'inline-block';
    }
}
function resultado(frase){
    var caixaResposta = document.getElementById("resposta");
    caixaResposta.value = frase;
}
function copiarTexto() {
    var textoCopiado = document.getElementById("resposta");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function limparCampos(){
    document.getElementById('textoParaEnDec').value = '';
    document.getElementById('resposta').value = '';
    copyButton.style.display = 'none';
}
function codificar(input) {
    const vogais = 'aeiou';
    const letras = input.split('');
    for (let i = 0; i < letras.length; i++) {
        if (vogais.indexOf(letras[i]) !== -1) {
            if(letras[i] == 'a'){
                letras[i] = 'ai';
            }
            if(letras[i] == 'e'){
                letras[i] = 'enter';
            }
            if(letras[i] == 'i'){
                letras[i] = 'imes';
            }
            if(letras[i] == 'o'){
                letras[i] = 'ober';
            }
            if(letras[i] == 'u'){
                letras[i] = 'ufat';
            }
        }
    }
    return letras.join('');
}
function decodificar(palavra) {
    var mapping = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    return palavra.replace(/ai/g, mapping['ai'])
                    .replace(/enter/g, mapping['enter'])
                        .replace(/imes/g, mapping['imes'])
                            .replace(/ober/g, mapping['ober'])
                                .replace(/ufat/g, mapping['ufat']);
}
function seMaiusculasOuAcentuadas(texto){
    const regex = /[A-ZÁÉÍÓÚÀÈÌÒÙÃÕÇáéíóúàèìòùãõç]/;
    return regex.test(texto)
}

encodeButton.onclick = capturaEcodifica;
decodeButton.onclick = capturaEdecodifica;
copyButton.onclick = copiarTexto;
eraseButton.onclick= limparCampos;