// passar tipos como parâmetros, deixar a tipagem mais dinâmica

// coloca depois do = na arrow function, é uma convenção chamar T
const returnValue = <T>(value : T) => value;

    // Sem o uso do generics essas variáveis ficavam com o tipo any, mas agora elas tem o tipo dinâmico
const message = returnValue <string> ("Hello");
const count = returnValue<number>(5);

// coloca antes do (, tem colocar T[] porque é um array
function getFirstValueFromArray<T>( array: T[] ) {
    return array[0];
}

const getFirstValueFromStringArray = getFirstValueFromArray <string> ( ["a1", "a2"] );
const getFirstValueFromNumberArray = getFirstValueFromArray<number>( [1, 2] );


// É possivel passar quantos genericos quiser
const exemplo = <T, Type, X>( value : T, value2: Type, value3: X ) => {
    console.log(value, value2, value3);
};


// Promises  ->  utiliza generic
    // no JS e TS -> é um objeto que representa o resultado de uma operação assíncrona que ainda não foi concluída, mas que é esperada no futuro
const returnPromise = async(): Promise<number> => {
    return 5;
}


// classes
class GenericNumber <T> {
    zeroValue: T;
    
    sum: ( x: T, y: T ) => T;

    constructor( zeroValue: T, sum: ( x: T, y: T ) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>( 2 , (x: number, y: number) => {return x + y} );


