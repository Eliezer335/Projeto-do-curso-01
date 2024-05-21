function abrirAba(nome){
    const elemento =  document.querySelector(nome)
    elemento.style.display="flex";

}

function fecharAba(nome){
    const elemento = document.querySelector(nome)
    elemento.style.display="none";
}

function abrirEditContato(){
    window.location ='index_02.html';
}

// function fecha(){
//     window.location ='index.html'
// }

function excluirContato() {
    const nameValue = document.getElementById("nome").value(" ");

}

function limparInput(){

}

function adicionaContatos() {
    const nameValue = document.getElementById("nome").value;
    const emailValue = document.getElementById("email").value;
    
    const contato = document.getElementById("contatos_011");

    console.log(nameValue)
    console.log(emailValue)
    


    for(let i=0;i < 3; i++){   
        let numerodoId = 2 + i;
        let id = 'contatos_011' + numerodoId;
    
        contato.innerHTML += `
        <div class="dados_cadastrados">
            <p>Nome:${nameValue}</p>
            <p>email:${emailValue}</p>
            <p>tel.:4899910552</p>
        </div>
        
        `;
    }    

};



