let id_edicao = "";
let txt01_edicao = "";
let txt02_edicao = "";
let txt03_edicao = "";

let contatosObj= [
    {
        id: 0, 
        nome: "Eliezer",
        email: "eliezerdasilva@hotmail.com",
        tel: "48999105522"

    },
    {
        id: 1, 
        nome: "Caio",
        email: "caiodasilva@hotmail.com",                   
        tel: "48999199532"
        
    }
];



function abrirAba(nome,id,txt01,txt02,txt03){
    const elementoParaAbertura =  document.querySelector(nome)
    elementoParaAbertura.style.display="flex";

    const txt1 = document.getElementById(txt01 || "txt01")?.textContent  
    const txt2 = document.getElementById(txt02 || "txt02")?.textContent   
    const txt3 = document.getElementById(txt03 || "txt03")?.textContent 

    const elementoInputNome = document.getElementById("nomeDeEdicao")
    const elementoInputEmail = document.getElementById("emailDeEdicao")
    const elementoInputTel = document.getElementById("telDeEdicao")

    elementoInputNome.value = txt1
    elementoInputEmail.value = txt2
    elementoInputTel.value = txt3

    id_edicao = id 
    txt01_edicao = txt01
    txt02_edicao = txt02
    txt03_edicao = txt03
}

function fecharAba(nome){
    const elemento = document.querySelector(nome)
    elemento.style.display="none";
}

function excluirContato(id) {
    const contatosRegistrados = JSON.parse(localStorage.getItem("contatosObj"))
    const contatosAtualizados = contatosRegistrados.filter((contato) => {
        return(id != contato.id)
    })

    const objetoString = JSON.stringify(contatosAtualizados) 
    localStorage.setItem("contatosObj",objetoString)
    const elementoHTML = document.getElementById(id);
    elementoHTML.remove()
}

function adicionarContatos() {
    const nameValue = document.getElementById("nome").value;
    const emailValue = document.getElementById("email").value;
    const telValue = document.getElementById("tel").value; 
    const contatos = document.getElementById("contatos_011");
    let ultimoId = parseInt(contatos.lastElementChild?.id) || 0 
    const somaId = ultimoId + 1;

    const novoContato = {
        id: somaId,
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value
    }
    const contatosRegistrados = JSON.parse(localStorage.getItem("contatosObj"))
    if(contatosRegistrados){
        contatosObj= contatosRegistrados;
    }
    contatosObj.push(novoContato);
    const objetoString = JSON.stringify(contatosObj)
    localStorage.setItem("contatosObj",objetoString)

        contatos.innerHTML += `
        <div class="contato" id="${somaId}">
        <div class="dados_cadastrados">
            <p id="txt${somaId}1">Nome: ${nameValue}</p>
            <p id="txt${somaId}2">Email: ${emailValue}</p>
            <p id="txt${somaId}3">Tel.: ${telValue}</p>            
        </div>
        <div class="botoes">
            <div class="icone_contato" onclick="abrirAba('.pagina_de_edicao',${somaId},'txt${somaId}1','txt${somaId}2','txt${somaId}3')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#74C0FC" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
            </div>
            <div class="icone_contato" onclick="excluirContato('${somaId}')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#74C0FC" d="M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </div>
        </div>  
        </div>
        `;   
}

function adicionarDoLocalStorage(){
    const contatosRegistrados = JSON.parse(localStorage.getItem("contatosObj"))

    if(contatosRegistrados){
       const contatos = document.getElementById("contatos_011");
       for (const contato of contatosRegistrados) {
            contatos.innerHTML += `
            <div class="contato" id="${contato.id}">
            <div class="dados_cadastrados">
                <p class="dados_Usuario" id="txt${contato.id}1">Nome: ${contato.nome}</p>
                <p class="dados_Usuario" id="txt${contato.id}2">Email: ${contato.email}</p>
                <p class="dados_Usuario" id="txt${contato.id}3">Tel.: ${contato.tel}</p>                    
            </div>
            <div class="botoes">
                <div class="icone_contato" onclick="abrirAba('.pagina_de_edicao',${contato.id},'txt${contato.id}1','txt${contato.id}2','txt${contato.id}3')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#74C0FC" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                </div>
                <div class="icone_contato" onclick="excluirContato('${contato.id}')">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#74C0FC" d="M576 
                   128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 
                   33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                </div>
            </div>  
            </div>`;
       }
    }
}

function EditarContato(){
    
    const contato = document.getElementById(id_edicao)
    const elementoEditaNome = document.getElementById("nomeDeEdicao").value
    const elementoEditaEmail = document.getElementById("emailDeEdicao").value
    const elementoEditaTel = document.getElementById("telDeEdicao").value

    contato.innerHTML = `
        <div class="dados_cadastrados">
            <p class="dados_Usuario" id=${txt01_edicao}>Nome:${elementoEditaNome}</p>
            <p class="dados_Usuario" id=${txt02_edicao}>email:${elementoEditaEmail}</p>
            <p class="dados_Usuario" id=${txt03_edicao}>tel.:${elementoEditaTel}</p>               
        </div>
        <div class="botoes">
        <div class="icone_contato" onclick="abrirAba('.pagina_de_edicao','${id_edicao}','${txt01_edicao}','${txt02_edicao}','${txt03_edicao}')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#74C0FC" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
        </div>
        <div class="icone_contato" onclick="excluirContato('${id_edicao}')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#74C0FC" d="M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
        </div>          
        `;
}

function pesquisarContatos() {
    let input = document.getElementById('pesquisa').value
    const dados_cadastrados = document.querySelectorAll(".contato");

    for(const dados of dados_cadastrados){
        const nome = dados.querySelector("p")?.textContent
            if(nome.includes(input)){
                dados.style.display='flex';
            }else{
                dados.style.display='none';
            }
    }

}

pesquisarContatos();
adicionarDoLocalStorage();









