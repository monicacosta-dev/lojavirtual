//declaração dos produtos
const lojaContainer = document.getElementById('lista_container');

const produtos = [
            {'codigo': 1, 'nome': 'Blusa Xadres',               'valor':'139,00',  'imagem':'../imagens/feminino/1.jpg'},
            {'codigo': 2, 'nome': 'Casaco Casual',              'valor':'218,80',  'imagem':'../imagens/feminino/2.jpg'},
            {'codigo': 3, 'nome': 'Camisa Social',              'valor':'89,90',  'imagem':'../imagens/feminino/3.jpg'},
            {'codigo': 4, 'nome': 'Blusa Bege',                 'valor':'111,50', 'imagem':'../imagens/feminino/4.jpg'},
            {'codigo': 5, 'nome': 'Blusa Estampada',            'valor':'59,90',  'imagem':'../imagens/feminino/5.jpg'},
            {'codigo' :6, 'nome': 'Blusa de Malha',             'valor':'35,40',  'imagem':'../imagens/feminino/6.jpg'},

            {'codigo': 7,  'nome': 'Camisa Xadres',              'valor':'18,40', 'imagem':'../imagens/masculino/1.jpg'},
            {'codigo': 8,  'nome': 'Suéter Azul',                'valor':'19,40', 'imagem':'../imagens/masculino/2.jpg'},
            {'codigo': 9,  'nome': 'Camisa com Estampada',       'valor':'28,40', 'imagem':'../imagens/masculino/3.jpg'},
            {'codigo': 10, 'nome': 'Camisa Base',                'valor':'135,40', 'imagem':'../imagens/masculino/4.jpg'},
            {'codigo': 11, 'nome': 'Camisa Branca Casual',       'valor':'305,40', 'imagem':'../imagens/masculino/5.jpg'},
            {'codigo': 12, 'nome': 'Camisa Social',              'valor':'43,40', 'imagem':'../imagens/masculino/6.jpg'},
  
            {'codigo': 13,  'nome': 'Camisa Lilo Stitch',        'valor':'56,40', 'imagem':'../imagens/infantil/1.jpg'},
            {'codigo': 14,  'nome': 'Camisa Sonic',              'valor':'300,40', 'imagem':'../imagens/infantil/2.jpg'},
            {'codigo': 15,  'nome': 'Vestido Vermelho',          'valor':'235,40', 'imagem':'../imagens/infantil/3.jpg'},
            {'codigo': 16,  'nome': 'Camisa Dinossauro',         'valor':'45,40', 'imagem':'../imagens/infantil/4.jpg'},
            {'codigo': 17,  'nome': 'Camisa Minie',              'valor':'115,40', 'imagem':'../imagens/infantil/5.jpg'},
            {'codigo': 18,  'nome': 'Vestido com Estampa',       'valor':'76,40',  'imagem':'../imagens/infantil/6.jpg'},
        ];
        


let carrinho = [];

//Listando produtos, e addicionando na pagina

produtos.forEach((produtos) => {
  let container = document.createElement("div");
  container.className = 'card';
        container.innerHTML = `
        <div>
            <div class="produtos-image">
              <img src="${produtos.imagem}" alt ="imagens"  width = "250px">
            </div> 
            <div>
            <p>${produtos.nome}</p>     
            <p>${produtos.valor}</p>   
            </div>
                    
        </div>

    `;
    
  /*Criando botao*/
    let adicionar = document.createElement('button');
      adicionar.innerText = 'Adicionar';
      adicionar.classList.add('btn', 'btn-primary');
    
    adicionar.addEventListener('click', () => {
            carrinho.push({
            imagem: produtos.imagem,
            nome: produtos.nome,
            valor: produtos.valor,
        });
        console.log(carrinho) //
     });

  
    container.append(adicionar) /* botão para adicionar o array */
    lojaContainer.append(container);

});
  
