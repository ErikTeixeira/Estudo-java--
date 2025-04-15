"use strict";
// Atribui automaticamente um retorno de função, de acordo com o que recebe de parâmetros
// da pra declarar ou não o tipo de retorno da function, e da para usar o intersection
// da para retornar dados de qualquer tipo, listas...
const sum = (x, y) => {
    return x + y;
};
const value = sum(2, 3); // vai ser do tipo number essa váriavel
// tipo void de retorno  -> não retorna nada 
const log = (message) => {
    console.log(message);
};
// implementar a interface na função  -> serve como um contrato
const sum2 = (x, y) => {
    return x + y;
};
