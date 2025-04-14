# Guia Básico de HTML

## O que é HTML?

HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web. Ela descreve a estrutura de uma página usando um sistema de marcação com elementos chamados "tags".

## Estrutura Básica de um Documento HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo da página vai aqui -->
</body>
</html>
```

## Tags HTML Principais

### Tags de Estrutura

| Tag | Descrição |
|-----|-----------|
| `<!DOCTYPE html>` | Define o tipo de documento como HTML5 |
| `<html>` | Elemento raiz de uma página HTML |
| `<head>` | Contém metadados e informações sobre o documento |
| `<body>` | Contém o conteúdo visível da página |

### Tags de Metadados

| Tag | Descrição |
|-----|-----------|
| `<title>` | Define o título da página (mostrado na aba do navegador) |
| `<meta>` | Define metadados como codificação, descrição, palavras-chave |
| `<link>` | Conecta a página a recursos externos (CSS, ícones) |
| `<style>` | Define estilos CSS internos |
| `<script>` | Insere código JavaScript |

### Tags de Texto

| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<h1>` a `<h6>` | Cabeçalhos (do maior ao menor) | `<h1>Título Principal</h1>` |
| `<p>` | Parágrafo | `<p>Este é um parágrafo.</p>` |
| `<br>` | Quebra de linha | `Texto<br>quebrado` |
| `<hr>` | Linha horizontal | `<hr>` |
| `<strong>` | Texto em negrito | `<strong>Importante</strong>` |
| `<em>` | Texto em itálico | `<em>Enfatizado</em>` |
| `<mark>` | Texto destacado | `<mark>Destacado</mark>` |
| `<code>` | Código | `<code>var x = 10;</code>` |
| `<pre>` | Texto pré-formatado | `<pre>Mantém  espaços</pre>` |

### Tags de Lista

| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<ul>` | Lista não ordenada | Ver exemplo abaixo |
| `<ol>` | Lista ordenada | Ver exemplo abaixo |
| `<li>` | Item de lista | Ver exemplo abaixo |
| `<dl>` | Lista de definição | Ver exemplo abaixo |
| `<dt>` | Termo na lista de definição | Ver exemplo abaixo |
| `<dd>` | Descrição na lista de definição | Ver exemplo abaixo |

Exemplo de lista não ordenada:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Exemplo de lista ordenada:
```html
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>
```

Exemplo de lista de definição:
```html
<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcação para estruturar páginas web</dd>
    <dt>CSS</dt>
    <dd>Linguagem de estilização para páginas web</dd>
</dl>
```

### Tags de Link e Âncora

| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<a>` | Hiperlink | `<a href="https://www.exemplo.com">Link</a>` |

### Tags de Imagem e Mídia

| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<img>` | Imagem | `<img src="imagem.jpg" alt="Descrição">` |
| `<audio>` | Áudio | `<audio src="audio.mp3" controls></audio>` |
| `<video>` | Vídeo | `<video src="video.mp4" controls></video>` |

### Tags de Formulário

| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<form>` | Formulário | `<form action="/enviar" method="post">...</form>` |
| `<input>` | Campo de entrada | `<input type="text" name="nome">` |
| `<textarea>` | Área de texto | `<textarea name="mensagem"></textarea>` |
| `<button>` | Botão | `<button type="submit">Enviar</button>` |
| `<select>` | Menu suspenso | Ver exemplo abaixo |
| `<option>` | Opção em menu suspenso | Ver exemplo abaixo |
| `<label>` | Rótulo para controles | `<label for="nome">Nome:</label>` |

Exemplo de menu suspenso:
```html
<select name="pais">
    <option value="br">Brasil</option>
    <option value="pt">Portugal</option>
    <option value="us">Estados Unidos</option>
</select>
```

### Tags de Tabela

| Tag | Descrição |
|-----|-----------|
| `<table>` | Define uma tabela |
| `<tr>` | Define uma linha na tabela |
| `<th>` | Define um cabeçalho na tabela |
| `<td>` | Define uma célula na tabela |
| `<thead>` | Agrupa o conteúdo do cabeçalho |
| `<tbody>` | Agrupa o conteúdo do corpo |
| `<tfoot>` | Agrupa o conteúdo do rodapé |

Exemplo de tabela:
```html
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```

### Tags de Divisão e Semânticas

| Tag | Descrição |
|-----|-----------|
| `<div>` | Divisão genérica (bloco) |
| `<span>` | Divisão genérica (inline) |
| `<header>` | Cabeçalho da página ou seção |
| `<nav>` | Seção de navegação |
| `<main>` | Conteúdo principal |
| `<section>` | Seção de conteúdo |
| `<article>` | Conteúdo independente |
| `<aside>` | Conteúdo relacionado indiretamente |
| `<footer>` | Rodapé da página ou seção |

## Exemplo Completo

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        header {
            background-color: #f2f2f2;
            padding: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bem-vindo à Minha Página</h1>
        <nav>
            <a href="#secao1">Seção 1</a> |
            <a href="#secao2">Seção 2</a> |
            <a href="#contato">Contato</a>
        </nav>
    </header>
    
    <main>
        <section id="secao1">
            <h2>Seção 1</h2>
            <p>Este é um parágrafo com <strong>texto em negrito</strong> e <em>texto em itálico</em>.</p>
            <img src="imagem.jpg" alt="Descrição da imagem">
        </section>
        
        <section id="secao2">
            <h2>Seção 2</h2>
            <ul>
                <li>Item da lista 1</li>
                <li>Item da lista 2</li>
                <li>Item da lista 3</li>
            </ul>
        </section>
        
        <section id="contato">
            <h2>Entre em Contato</h2>
            <form>
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome">
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email">
                </div>
                <div>
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem"></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 - Todos os direitos reservados</p>
    </footer>
</body>
</html>
```

## Boas Práticas

1. **Sempre use o DOCTYPE**: Para garantir que o navegador renderize o HTML corretamente.
2. **Indente seu código**: Para melhor legibilidade.
3. **Use nomes descritivos para IDs e classes**: Para facilitar a manutenção.
4. **Use tags semânticas**: Use tags que descrevem o conteúdo, como `<article>`, `<section>`, `<nav>`, etc.
5. **Valide seu código**: Use ferramentas de validação de HTML para garantir que está correto.
6. **Use atributos alt em imagens**: Para acessibilidade e SEO.
7. **Mantenha o código limpo**: Remova código desnecessário e comentários irrelevantes.
8. **Separe estrutura (HTML), apresentação (CSS) e comportamento (JavaScript)**.

