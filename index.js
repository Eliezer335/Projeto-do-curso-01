function abrirAba(nome){
    const elemento =  document.querySelector(nome)
    elemento.style.display="flex";

}

function fecharAba(nome){
    const elemento = document.querySelector(nome)
    elemento.style.display="none";
}

function excluirContato(nome) {
    const name = document.getElementById(nome);
    name.remove()
}

function limparInput(){

}

function adicionaContatos() {
    const nameValue = document.getElementById("nome").value;
    const emailValue = document.getElementById("email").value;
    
    const contatos = document.getElementById("contatos_011");

    console.log(nameValue)
    console.log(emailValue)


        // problema do id : preciso pegar o numero do id do ultimo elemento de contato colocado na tela
        // e somar 1 nele. esse sera meu novo id
        // como pegar o ultimo filho de um pai : Lst child  
        // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/lastChild
        // https://developer.mozilla.org/pt-BR/docs/Web/CSS/:last-child

        let numerodoId = 2 + i;
        let id = 'contato_01' + numerodoId;
    
        contatos.innerHTML += `
        <div class="contato" id="contato_01">
        <div class="dados_cadastrados">
            <p>${nameValue}</p>
            <p>email:${emailValue}</p>
            <p>tel.:48999105522</p>
                 
        </div>
        <div class="botoes">
            <div class="icone" onclick="abrirEditContato()">
                <svg fill="#676767" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M432.4 787.2c-24.1 27.6-34.7 34.2-68.4 46.6-51.9 19.4-147 55.1-208.9 78.3-11.7 4.6-55.9 2.3-37.4-41.1 21-60.4 51.8-149.6 69.4-200.5 12.8-35.9 17.9-45.2 43.7-69.3l266.5-266.5L686 523.4C686 523.4 506.6 710.1 432.4 787.2z" />
                    <path d="M726.5 482.9 537.9 294.3 578.3 253.8 767 442.5Z" />
                    <path
                        d="M888.3 321.2l-80.8 80.9L618.8 213.4l80.9-80.8c29.8-29.8 78-29.8 107.8 0l80.9 80.8C918.1 243.1 918.1 291.4 888.3 321.2z" />
                </svg>
            </div>
            <div class="icone" onclick="excluirContato(${id})">
                <svg fill="#676767" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                </svg>
            </div>
        </div>  
        </div>
        
        `;
}    



