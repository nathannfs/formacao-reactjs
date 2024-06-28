# Fundamentos ReactJS

## Padrões de Renderização - Rendering Patterns

### SSR - Server Side Rendering

Padrão tradicional

Quando é acessado o site e a tela fica branca enquanto ta carregando, provavelmente está utilizando SSR

#### Como funciona SSR

* Requisição feita pelo browser;
* Recebida pelo servidor, o servidor cria todo o HTML, CSS e JavaScript;
* Servidor devolve para o browser.

![SSR Example](/src/assets/ssr.png)

### SPA- Single Page Application

#### Como funciona SPA

* Requisição feita pelo browser;
* Recebida pelo servidor, o servidor dessa vez não tem a informação visual da tela, então ele retorna somente os dados do usuário em formato JSON (JavaScript Object Notation);
* Após isso a aplicação Front-end recebe esses dados e cria a parte visual;
* O Front-end retorna a página para o browser

![SPA Example](/src/assets/spa.png)

## Bundlers & Compilers

### Bundlers

Bundlers convertem todos os arquivos para um único arquivo de cada tecnologia, por exemplo, todos os arquivos JavaScript vai ser convertido para um único arquivo, o css também, etc

Exemplo: <https://webpack.js.org/>

### Compilers

Compilers são compiladores de código, eles transformam a sintaxe para uma que seja compatível com o browser

Exemplo: <https://babeljs.io/>

## Vite

### Vantagens

* Utiliza por padrão os ESM, então não são necessários bundlers;
* Ele já faz o processo de compiler por si próprio.

Site: <https://vitejs.dev/>

## Programação imperativa (mais comum)

O que deve ser feito (passo-a-passo)

### Receita de bolo - imperativa

1. Ligar o forno a 180º;
2. Abrir a porta do forno;
3. Colocar a massa numa forma;
4. Colocar a forma com a massa dentro do forno;

## Programação declarativa (preferência na maioria das vezes no React)

Quais as condições para eu ter o resultado final.

### Receita de bolo - declarativa

1. O forno precisa estar a 180º;
2. Quando o forno estiver quente, eu posso colocar a massa para assar;
3. Quando a massa estiver pronta, eu posso retirá-la do forno;

## Key no React

### Por que única?

3 principais momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;

### Por que não posso usar o índice do array?

```js
const posts = [1, 2, 5, 4, 3];
// 0, 1, 2, 3, 4
```

## Closures no React

Sempre que for atualizar um valor em que ele recebe ele mesmo, considerar o exemplo abaixo

```js
function handleLikeComment() {
 setLikeCount((state) => {
  return state + 1;
 });
}
```
