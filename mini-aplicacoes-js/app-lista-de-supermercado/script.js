var items = [];

document.querySelector('input[type=submit').addEventListener('click', ()=>{
    
    let nomeProduto = document.querySelector('input[name=nome_produto]').value;
    let precoProduto = document.querySelector('input[name=preco_produto]').value;

    alert (nomeProduto);
    alert (precoProduto);
});