"use strict";
// Type
// aceita qualquer tipo(lista, boolean ...)
// para deixar um atributo opcional  -> ?
// deixando opcional o valor dele pode ser nulo/undefined, e quando for chamar ele tem que deixar opcional a variavel tambem
const user = {
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
};
// tem que colocar o ?  -> porque a password pode vim sem nada
const printPass = (message) => { };
printPass(user.password);
// da para tirar o opcional da variavel colocar o !  -> vc diz para o TS que não vai vim undefined
printPass(user.password);
// Pode ter todas as propriedades do autor e do user
const author = {
    firstName: "Sukuna",
    email: "sukuna@gmail.com",
    orders: [],
    books: ["1984"],
    register() {
        return "Register";
    },
};
const userInter = {
    firstName: "itadori",
    email: "itadori@gmail.com",
    login() {
        return "Login";
    },
};
const newAuthor = {
    firstName: "NewAuthor",
    email: "author@gmail.com",
    login() {
        return "Register";
    },
    books: []
};
const grade = 1;
