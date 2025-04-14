// Tipagem Dinâmica e estática
// Dinâmica -> javascript
/**
 * Tipo de variável não é explicitamente declarado
 * Tipo de variável pode ser alterado livremente
 *
 * let age;   -> não colocou o tipo
 */
// Estátiva -> java, typescript
/**
 * Tipo de variável é explicitamente declarado
 * Tipo de variável não pode ser alterado livremente
 * Os valores da variável precisam respeitar o seu tipo
 *
 * String nome;     -> colocou o tipo
 */
// Estátiva  -> compilador verifica erros nos tipos
/**
 *  Todo código typescript é convertido para o seu equivalente em JS pelo typescript compiler
 *      - Acontece a conversão porque os navegadores não entendem o typescript
 *      - Pode usar o typescript no back-end(com node.js) e no front-end(com react, angular)
 */
// typescript pode utilizar funcionalidades modernas do JS(import/export) e o compilador consegue compilar isso para funcionar em navegadores mais antigos
/**
 *      Vantagens typescript                                    Desvantagens
 *  Recursos avançados JS                           Escrevemos mais código
 *  Previne erros de tipagem                        Há uma curva de aprendizado
 *  Mais fácil de identificar bugs                  Requer compilação para JS
 *  Código mais legível
 *  Extremamente popular
 */
var age;
age = 2;
console.log(age);
