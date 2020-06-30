# API - Carcara
API de comunicação que está no core  do simulador de circuitos elétricos eletrônicos

# Getting started
 lista de software para testa e analisar  o uso  da API 
 * browser (recomendamos [google chrome ](https://www.google.com/intl/pt-BR/chrome/) que foi utilizando durante o desenvolvimento
  )
 * interpretador de JavaScript (recomendamos [node js ](https://nodejs.org/en/) que foi utilizando no desenvolvimento)

 > Os softwares acima citados precisam está instalados e funcionado corretamente para a realização das analise da API

# Node modules:
* [Body Parser ](https://www.npmjs.com/package/body-parser) - Pegar as informações do formulário 
* [Express ](https://expressjs.com/pt-br/)  - Framework que gerencia as rotas
* [Cors](https://www.npmjs.com/package/cors)  - Mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. 
* [Axios](https://www.npmjs.com/package/axios) - É um cliente HTTP, que funciona tanto no browser quanto em node.js. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor.


# Endpoints
>Um **endpoint** de uma web service é a URL onde seu serviço pode ser acessado por uma aplicação cliente.
>
>Uma **API** é um conjunto de rotinas, protocolos e ferramentas para construir aplicações.
>
>Nossa api carcará fornecerá os seguintes endpoint:
>
> * Em desenvolvimento :
>>>>Localhost:3200  
>	
> * Em produção:
>>>	Será domínio escolhido: porta que os serviços funcionarão exemplo 8080,80 ou 443.  

# Estuturação de diretórios  
>API está dívida em três diretórios que são:
>
> > ![ Estuturação de diretórios ](./img/img-1.png)
>
> * **api** : ***nele se encontrar o core da api, responsável por realizar os processos serialização e desserialização com os dados que são enviados para analise, produzindo assim os a lista de dados que vão se analisados matematicamente.***
>
>* **dados** :  ***nele fica armazenados que foram serializados pela api, é nele onde os módulos de analise matemática pegará as listas de dados a ser analisados, e é nele que os módulos serialização os resultados das analise matemática.*** 
>* **public** : ***nele está a interface simples e intuitiva  que permite que o desenvolvedores realize testes  rápidos  e assim comece  a elaboração de interface  mais complexa  para o simulador.***

