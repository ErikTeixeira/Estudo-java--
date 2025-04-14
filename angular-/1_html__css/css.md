# Guia Básico de CSS

## O que é CSS?

CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para definir a apresentação visual de páginas web escritas em HTML. O CSS permite separar o conteúdo (HTML) da apresentação (CSS), tornando o desenvolvimento e a manutenção mais eficientes.

## Formas de Incluir CSS

Existem três maneiras principais de incluir CSS em uma página web:

### 1. CSS Inline

O CSS inline é aplicado diretamente nos elementos HTML usando o atributo `style`. Exemplo:

```html
<p style="color: blue; font-size: 16px; margin-top: 10px;">Este é um parágrafo com CSS inline.</p>
```

**Vantagens:**
- Aplicação direta ao elemento
- Útil para estilos específicos e únicos

**Desvantagens:**
- Difícil manutenção
- Código repetitivo
- Mistura conteúdo e apresentação

### 2. CSS Interno (ou Incorporado)

O CSS interno é definido dentro da tag `<style>` no cabeçalho (`<head>`) do documento HTML:

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
        .destaque {
            background-color: yellow;
            font-weight: bold;
        }
    </style>
</head>
```

### 3. CSS Externo (Recomendado)

O CSS externo é definido em um arquivo separado com extensão `.css` e vinculado ao HTML usando a tag `<link>`:

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Vantagens:**
- Separação clara entre conteúdo e apresentação
- Reutilização do código em múltiplas páginas
- Cache pelo navegador (melhor performance)
- Manutenção centralizada

## Sintaxe Básica do CSS

A sintaxe do CSS consiste em um seletor e um bloco de declarações:

```css
seletor {
    propriedade1: valor1;
    propriedade2: valor2;
    /* Mais propriedades e valores */
}
```

## Seletores CSS

Os seletores determinam quais elementos HTML serão estilizados.

### Seletores Básicos

| Seletor | Exemplo | Descrição |
|---------|---------|-----------|
| Elemento | `p { }` | Seleciona todos os elementos `<p>` |
| ID | `#header { }` | Seleciona o elemento com `id="header"` |
| Classe | `.destaque { }` | Seleciona todos os elementos com `class="destaque"` |
| Universal | `* { }` | Seleciona todos os elementos |
| Agrupamento | `h1, h2, p { }` | Seleciona todos os elementos `<h1>`, `<h2>` e `<p>` |

### Seletores Combinadores

| Seletor | Exemplo | Descrição |
|---------|---------|-----------|
| Descendente | `div p { }` | Seleciona todos os `<p>` dentro de `<div>` |
| Filho direto | `div > p { }` | Seleciona todos os `<p>` que são filhos diretos de `<div>` |
| Adjacente | `h1 + p { }` | Seleciona o `<p>` que está imediatamente após um `<h1>` |
| Irmão geral | `h1 ~ p { }` | Seleciona todos os `<p>` que são irmãos de um `<h1>` |

### Pseudo-classes e Pseudo-elementos

| Tipo | Exemplo | Descrição |
|------|---------|-----------|
| Pseudo-classe | `a:hover { }` | Seleciona links quando o mouse está sobre eles |
| Pseudo-elemento | `p::first-line { }` | Seleciona a primeira linha de cada parágrafo |

## Propriedades CSS Mais Usadas

### Layout e Posicionamento

#### Box Model

Todo elemento HTML é representado como uma caixa retangular:

```css
div {
    width: 300px;           /* Largura do conteúdo */
    height: 200px;          /* Altura do conteúdo */
    padding: 20px;          /* Espaçamento interno */
    border: 2px solid #000; /* Borda */
    margin: 30px;           /* Espaçamento externo */
}
```

#### Display

Define como um elemento é exibido:

```css
div {
    display: block;         /* Bloco (padrão para div) */
}
span {
    display: inline;        /* Em linha (padrão para span) */
}
nav li {
    display: inline-block;  /* Misto (em linha com propriedades de bloco) */
}
.container {
    display: flex;          /* Layout flexível */
}
.grid {
    display: grid;          /* Layout em grade */
}
.escondido {
    display: none;          /* Oculto (não exibido) */
}
```

#### Position

Controla o posicionamento dos elementos:

```css
.relativo {
    position: relative;     /* Posicionado em relação à sua posição normal */
    top: 10px;
    left: 20px;
}
.absoluto {
    position: absolute;     /* Posicionado em relação ao ancestral posicionado mais próximo */
    top: 40px;
    right: 10px;
}
.fixo {
    position: fixed;        /* Posicionado em relação à viewport */
    bottom: 20px;
    right: 20px;
}
.pegajoso {
    position: sticky;       /* Posicionado com base na rolagem */
    top: 0;
}
```

#### Flexbox

Sistema de layout unidimensional:

```css
.container {
    display: flex;
    flex-direction: row;          /* ou column */
    justify-content: space-between; /* alinhamento no eixo principal */
    align-items: center;          /* alinhamento no eixo cruzado */
    flex-wrap: wrap;              /* permite quebra de linha */
    gap: 10px;                    /* espaçamento entre items */
}

.item {
    flex: 1;                      /* crescimento proporcional */
    /* ou */
    flex: 0 0 200px;              /* não cresce, não encolhe, base 200px */
}
```

#### Grid

Sistema de layout bidimensional:

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;   /* 3 colunas com proporções */
    grid-template-rows: auto;             /* altura automática das linhas */
    gap: 20px;                            /* espaçamento entre células */
}

.item-especial {
    grid-column: 1 / 3;                  /* ocupa da coluna 1 à 3 */
    grid-row: 1 / 2;                     /* ocupa da linha 1 à 2 */
}
```

### Estilização de Texto

```css
p {
    font-family: 'Arial', sans-serif;    /* família da fonte */
    font-size: 16px;                     /* tamanho da fonte */
    font-weight: bold;                   /* peso da fonte (normal, bold, 100-900) */
    line-height: 1.5;                    /* altura da linha */
    color: #333;                         /* cor do texto */
    text-align: center;                  /* alinhamento (left, right, center, justify) */
    text-decoration: underline;          /* decoração (underline, overline, line-through) */
    text-transform: uppercase;           /* transformação (uppercase, lowercase, capitalize) */
    letter-spacing: 2px;                 /* espaçamento entre letras */
    word-spacing: 4px;                   /* espaçamento entre palavras */
}
```

### Cores e Fundos

```css
div {
    color: #ff6600;                    /* cor do texto (hexadecimal) */
    color: rgb(255, 102, 0);           /* cor do texto (RGB) */
    color: rgba(255, 102, 0, 0.5);     /* cor do texto com transparência */
    background-color: #f0f0f0;         /* cor de fundo */
    background-image: url('bg.jpg');   /* imagem de fundo */
    background-repeat: no-repeat;      /* repetição (repeat, no-repeat, repeat-x, repeat-y) */
    background-position: center;       /* posição */
    background-size: cover;            /* tamanho (cover, contain, percentual) */
    opacity: 0.8;                      /* transparência do elemento inteiro */
}
```

### Bordas e Sombras

```css
.box {
    border: 2px solid #000;                  /* borda (espessura, estilo, cor) */
    border-radius: 10px;                     /* raio dos cantos (arredondados) */
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3); /* sombra da caixa */
    text-shadow: 2px 2px 4px #000;           /* sombra do texto */
}
```

## Responsividade

### Media Queries

Aplicam estilos diferentes com base nas características do dispositivo:

```css
/* Estilo base para todos os dispositivos */
body {
    font-size: 16px;
}

/* Para dispositivos móveis (até 768px) */
@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
    
    .container {
        flex-direction: column;
    }
}

/* Para tablets (entre 768px e 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
    .sidebar {
        width: 30%;
    }
}
```

### Unidades Responsivas

```css
.container {
    width: 80%;                /* Porcentagem relativa ao pai */
    max-width: 1200px;         /* Largura máxima */
    font-size: 1rem;           /* Relativa ao elemento raiz (geralmente 16px) */
    padding: 2em;              /* Relativa ao tamanho da fonte do elemento */
    margin-top: 5vh;           /* 5% da altura da viewport */
    width: calc(100% - 40px);  /* Cálculo dinâmico */
}
```

## Transformações e Transições

### Transformações

```css
.box {
    transform: rotate(45deg);                /* rotação */
    transform: scale(1.5);                   /* escala */
    transform: translate(20px, 30px);        /* translação */
    transform: skew(10deg, 20deg);           /* distorção */
    /* Combinadas */
    transform: rotate(45deg) scale(1.5);
}
```

### Transições

```css
button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: darkblue;
    transform: scale(1.1);
}
```

### Animações

```css
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.pulsing-button {
    animation: pulse 2s infinite;
}
```

## Exemplo de Arquivo CSS Completo

Abaixo está um exemplo de um arquivo CSS externo (`styles.css`) com estilos comuns:

```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos gerais */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f8f8;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Cabeçalho */
header {
    background-color: #4a90e2;
    color: white;
    padding: 20px 0;
}

header h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

/* Navegação */
nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-right: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #f0f0f0;
    text-decoration: underline;
}

/* Seções */
section {
    padding: 40px 0;
}

section h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #4a90e2;
}

/* Cards */
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card h3 {
    margin-bottom: 10px;
    color: #333;
}

.card p {
    color: #666;
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    background-color: #4a90e2;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #357abd;
}

/* Formulário */
form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 16px;
}

textarea {
    min-height: 150px;
}

button[type="submit"] {
    background-color: #4a90e2;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #357abd;
}

/* Rodapé */
footer {
    background-color: #333;
    color: white;
    padding: 30px 0;
    margin-top: 40px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    min-width: 300px;
    margin-bottom: 20px;
}

.social-icons a {
    color: white;
    margin-right: 15px;
    font-size: 1.5rem;
}

/* Responsividade */
@media (max-width: 768px) {
    header h1 {
        font-size: 1.5rem;
    }
    
    nav ul {
        flex-direction: column;
    }
    
    nav ul li {
        margin-right: 0;
        margin-bottom: 10px;
    }
    
    .card-container {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
    }
}
```

## Como Incluir o Arquivo CSS Externo no HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
    <!-- Link para o arquivo CSS externo -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Conteúdo HTML aqui -->
</body>
</html>
```

## Boas Práticas de CSS

1. **Use um arquivo CSS externo**: Separe o conteúdo da apresentação.
2. **Organize seu CSS**: Agrupe estilos relacionados e use comentários.
3. **Nomeie classes de forma semântica**: Use nomes que descrevem o propósito, não a aparência.
4. **Evite a especificidade excessiva**: Quanto mais específico o seletor, mais difícil será sobrescrevê-lo.
5. **Use variáveis CSS para valores reutilizáveis**:
   ```css
   :root {
       --cor-primaria: #4a90e2;
       --espacamento-padrao: 20px;
   }
   
   .botao {
       background-color: var(--cor-primaria);
       margin: var(--espacamento-padrao);
   }
   ```
6. **Adote uma metodologia de nomenclatura**: BEM (Block Element Modifier), SMACSS, OOCSS, etc.
7. **Minimize o uso de `!important`**: Geralmente indica problemas de estrutura.
8. **Teste em vários navegadores**: Certifique-se de que o design funcione em todos os navegadores principais.
9. **Escreva CSS pensando na performance**: Evite seletores muito complexos.

## Ferramentas Úteis para CSS

- **Pré-processadores**: Sass, Less, Stylus
- **Frameworks**: Bootstrap, Tailwind CSS, Foundation
- **Ferramentas de desenvolvimento**: Chrome DevTools, Firefox Developer Tools
- **Validadores**: W3C CSS Validator


