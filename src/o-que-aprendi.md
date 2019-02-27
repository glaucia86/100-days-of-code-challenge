# O que Aprendi?! #day-01 - Kit de Bateria

[![Screen-Shot-02-26-19-at-08-22-PM.png](https://i.postimg.cc/sX7Ndqpv/Screen-Shot-02-26-19-at-08-22-PM.png)](https://postimg.cc/4745p82g)

Nesse desafio aprendi a lidar com a manipulação de eventos em JavaScript. Entre eles:

- **[querySelector](#querySelector)**
- **[querySelectorAll](#querySelectorAll)**
- **[addEventListener](#addEventListener)**

## [querySelector](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector)

Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores

Ex.: 

```javascript
var key = document.querySelector(".div");
```

## [querySelectorAll](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll)

Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma `NodeList`.

Ex.:

```javascript
var matches = document.querySelectorAll("div.note, div.alert");
```

## [addEventListener](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener)

`addEventListener()` registra uma única espera de evento em um único alvo. O alvo do evento por ser um único **elemento** em um documento, o **documento** em si, uma **janela**, ou um `XMLHttpRequest`.

Para registrar mais de uma espera de evento como alvo, chame `addEventListener()` para o mesmo alvo mas com diferentes tipos de evento ou captura de parâmetros.

Exemplo: [AQUI](https://jsfiddle.net/madBYK/UumUP)

## Executando o desafio localmente:

Pode ser executado usando o **VsCode** usando o plugin: **[live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**. Ao clicar no plugin abrirá um browser na porta http://127.0.0.1:5500, conforme segue no gif abaixo:








