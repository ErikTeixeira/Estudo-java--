// Atribui automaticamente um retorno de função, de acordo com o que recebe de parâmetros
    // da pra declarar ou não o tipo de retorno da function, e da para usar o intersection
    // da para retornar dados de qualquer tipo, listas...
const sum = (x: number, y:number): number | string => {
    return x + y;
}

const value = sum(2, 3);    // vai ser do tipo number essa váriavel


// tipo void de retorno  -> não retorna nada 
const log = ( message: string ) => {
    console.log(message);
}



interface MathFunc {
    // função com interface  -> toda função que implementar isso precisa ter os parâmetros assim e retornar um number
    ( x: number, y: number ): number;
}

// implementar a interface na função  -> serve como um contrato
const sum2: MathFunc = (x: number, y:number): number => {
    return x + y;
}

