<h1>Store manager</h1>

<p>O Store manager é uma API de gerenciamento de vendas criada como parte do curso de desenvolvimento web da Trybe, no módulo de arquitetura MSC. A API foi construída seguindo os princípios da arquitetura MSC e é completamente RESTful.</p>

<h2>Instalação</h2>

<p>Para instalar o Store manager, siga as instruções abaixo:</p>

<ol>
  <li>Clone este repositório:</li>

  <pre><code>git clone https://github.com/DouglasDainese/StoreManager-API.git</code></pre>

  <li>Entre na pasta do projeto:</li>

  <pre><code>cd store-manager</code></pre>

  <li>Instale as dependências:</li>

  <pre><code>npm install</code></pre>

  <li>Orientações para rodar o banco de dados com o Docker</li>

<details>
  <summary><strong>🐳 Rodando no Docker</strong></summary>

**:warning: Seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
- Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
- A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.

> :information_source: Opção 1: Use o comando `docker-compose run node npm test`, ou para acessar o container e executar lá:

> :information_source: Opção 2: Use o comando `docker exec -it store_manager bash` e sigas passos abaixo.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> :information_source: Instale as dependências [**Caso existam**] com `npm install`

- **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

</details>

  <li>Inicie o servidor:</li>

  <pre><code>npm start</code></pre>
</ol>

<p>O servidor será iniciado na porta 3000 por padrão.</p>

<h2>Uso</h2>

<p>Para usar a API, você pode enviar requisições HTTP para os endpoints disponíveis. Aqui estão os endpoints atualmente disponíveis:</p>

<ul>
  <li><code>GET /products</code>: retorna uma lista de todos os produtos cadastrados</li>
  <li><code>POST /products</code>: cadastra um novo produto</li>
  <li><code>GET /products/:id</code>: retorna um produto com o ID especificado</li>
  <li><code>PUT /products/:id</code>: atualiza um produto com o ID especificado</li>
  <li><code>DELETE /products/:id</code>: remove um produto com o ID especificado</li>
  <li><code>GET /sales</code>: retorna uma lista de todas as vendas cadastradas</li>
  <li><code>POST /sales</code>: cadastra uma nova venda</li>
  <li><code>GET /sales/:id</code>: retorna uma venda com o ID especificado</li>
  <li><code>PUT /sales/:id</code>: atualiza uma venda com o ID especificado</li>
  <li><code>DELETE /sales/:id</code>: remove uma venda com o ID especificado</li>
</ul>

<p>Você pode enviar requisições usando qualquer ferramenta de cliente HTTP, como <code>curl</code> ou <code>Postman</code>.</p>


<h2>Contribuição</h2>

<p>Contribuições são sempre bem-vindas! Se você quiser contribuir para o Store manager, siga estas etapas:</p>

<ol>
  <li>Fork este repositório</li>
  <li>Crie uma nova branch com sua funcionalidade ou correção de bug: <code>git checkout -b minha-funcionalidade</code></li>
  <li>Faça suas alterações e adicione testes</li>
  <li>Verifique se os testes passam: <code>npm test</code></li>
  <li>Envie suas alterações: <code>git push origin minha-funcionalidade</code></li>
  <li>Crie um pull request para este repositório</li>
</ol>
