
/* Criando uma nova class Router para usar em outros arquivos posteriormente,

Criei uma propriedade vazia para armazenar as rotas futuramente,

Criei um metodo .ADD na classe Router para ser usado na classe Router com dois parametros de propriedade e valor, Dentro do método "add", estamos atribuindo a página correspondente à rota especificada. Isso significa que, quando chamarmos o método "add" com um nome de rota e uma página, a página será associada a essa rota na propriedade "routes".

Dentro do método "add", estamos atribuindo a página correspondente à rota especificada. Isso significa que, quando chamarmos o método "add" com um nome de rota e uma página, a página será associada a essa rota na propriedade "routes".

Isso define outro método chamado "route" na classe "Router" com um parâmetro chamado "event". Este método será usado para tratar eventos de roteamento.

Isso define outro método chamado "route" na classe "Router" com um parâmetro chamado "event". Este método será usado para tratar eventos de roteamento. */

// Mova a classe Router para cima no seu arquivo router.js, antes de usá-la em main.js

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event.preventDefault()
    this.handle()
    window.history.pushState({}, "", event.target.getAttribute("href"));
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes["/404"]
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('container').innerHTML = html
      })
      .catch(error => {
        console.error('Erro ao buscar a rota:', error)
      })
  }
}


