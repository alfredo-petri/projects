var items = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    console.log (items)

}); 

