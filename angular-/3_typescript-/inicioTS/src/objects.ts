// Type
    // aceita qualquer tipo(lista, boolean ...)
    // para deixar um atributo opcional  -> ?
    // deixando opcional o valor dele pode ser nulo/undefined, e quando for chamar ele tem que deixar opcional a variavel tambem

type Order = {
    productId: string,
    price: number
}

type User = {
    firstName: string;
    age?: Number;
    email: string;
    password?: string;
    // o orders vai ser uma lista de objeto Order
    orders: Order[];
    // função  -> coloca () e o que ela vai retornar, da para deixar opcional tmb 'register?()'
    register(): string;
}

const user: User = {
    firstName: "Gojo",
    email: "gojo@gmail.com",
    orders: [ 
        { 
            productId: "1",
            price: 10
         }
    ],
    register() {
        return "Register";
    },
}


// tem que colocar o ?  -> porque a password pode vim sem nada
const printPass = ( message?: string ) => {};
printPass( user.password );

// da para tirar o opcional da variavel colocar o !  -> vc diz para o TS que não vai vim undefined
printPass( user.password! );


// Unions  -> unir 2 types
type Author = {
    books: string[];
}

    // Pode ter todas as propriedades do autor e do user
const author: Author & User = {
    firstName: "Sukuna",
    email: "sukuna@gmail.com",
    orders: [],
    books: [ "1984" ],
    register() {
        return "Register";
    },
}


// Interfaces
    // É uma forma de definir a estrutura de um objeto, especificando quais propriedades e quais tipos elas devem ter
    // Serve como um contrato, garantindo que qualquer objeto que implemente essa interface tenha as propriedades e os tipos esperados
    // readonly  -> serve para dizer que é apenas leitura e não da para alterar
    // da para usar unions com interfaces
interface UserInteface {
    readonly firstName: string;
    email: string,
    // função
    login(): string
}

const userInter: UserInteface = {
    firstName: "itadori",
    email: "itadori@gmail.com",
    login() {
        return "Login";
    },
}

    // Isso não funciona
// userInter.firstName = "novoNome";

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInteface | AuthorInterface = {
    firstName: "NewAuthor",
    email: "author@gmail.com",
    login() {
        return "Register"
    },
    books: []
}


// --- Só o type consegue fazer isso
    // assinalar uma intersection a um type

type Grade = number | string;
const grade: Grade = 1;

