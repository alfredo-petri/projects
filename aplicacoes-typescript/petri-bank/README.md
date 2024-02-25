
# Petri Bank

Esta pequena aplicação simula parte do sistema de um banco,

existem três tipos de contas que podem ser criadas:

PersonalAccount
BusinessAccount
InvestorAccount

Para criar qualquer uma delas deve-se inserir o seguinte comando:

const **nome-da-nova-conta** : **tipo-da-conta** = new **tipo-da-conta** (**"nome-do-cliente"**, **documento-de-identificação**, **saldo-inicial**);

substitua todas as partes destacadas pela informação desejada,

o **nome-da-conta** é totalmente personalizado, mas para evitar erros siga o modelo a seguir:

primeiro nome minusculo, caso haja mais de um nome os seguinte devem iniciar com letra maiuscula (todos os nomes devem ser escritos sem espaço entre eles);

o **tipo-da-conta** deve ser referente a um dos 3 tipos de contas existentes:

PersonalAccount
BusinessAccount
InvestorAccount

e entre parenteses devem ser definidos 3 parametros necessários para a criação da conta:

**nome-do-cliente** que deve ser inserido como uma string, ou seja entre aspas duplas ou simples

**documento-de-identificação** que deve ser inserido com um number e deve ser um numero inteiro positivo, não é feito nenhum tipo de validação para ver se é um documento real, entao o numero fica a seu critério

**saldo-inicial** que deve ser inserido com um number e deve ser um numero positivo, caso contenha centavos no saldo usar ponto e não virgula para separar as casas decimais.

Abaixo coloquei um exemplo de criação de uma conta.

Exemplo:

const newAccount: PersonalAccount = new PersonalAccount ("João Augusto", 154268, 1000 );


