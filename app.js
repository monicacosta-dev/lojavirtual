const lojaContainer = document.getElementById('lista_container');
const verCarrinho = document.getElementById('verCarrinho');
const modalContainer = document.getElementById("modal-container");
 

let carrinho = [];

    /*Função para manupulação de botão adicionar  */
    adicionar.addEventListener('click', () => {
        carrinho.push({
            id: produtos.codigo,
            imagem: produtos.imagem,
            nome: produtos.nome,
            valor: produtos.valor,
        });
        console.log(carrinho);
    }); 

    /*Mostrar Carinhos na tela modal */
    verCarrinho.addEventListener("click", () => {
        carrinho.forEach((produtos) => {
            let carrinhoContainer = document.createElement('div');
            carrinhoContainer.innerHTML = `
                <img src="${produtos.imagem}">  
                <p>${produtos.nome}</p>     
                <p>${produtos.valor}</p>    
            
            `;
            let quantidade = document.createElement('p');
            quantidade.innerText = 'Quantidade' + carrinho[i].quantidade;           
            modalContainer.append(carrinho);
        }); 

    });





  
