/**
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

// rodar com uma extenção  - quokka - ctrl shift p - pesquisar quokka new javascript file

const miniRede = {
    usuarios: [
        {
            username: "omariosouto"
        }
    ],
    postagens: [
        {
            id: 1,
            owner: "omariosouto",
            content: "Meu primeiro post"
        }
    ]
};


// Create
// no parametro pode ser  -> criaPost( {owner, content} )
function criaPost( dados ) {

    miniRede.postagens.push( {
            // colocar o id pegando o tamanho da quantidade de postagens + 1
        id: miniRede.postagens.length + 1,
        owner: dados.owner ,
        content: dados.content
    })
}

// Passa um objeto
criaPost( {owner: "omariosouto", content: "Segunda postagem" } );


// Read
function getPosts() {
    return miniRede.postagens;
}

console.log( getPosts() );

// Update
function updateContentPost( id, newContent ) {

    const postWillBeUpdated = getPosts().find( (post) => {
        return post.id === id;
    } )

        // trocar o content do post pego pelo id pelo novo content
    postWillBeUpdated.content = newContent;
}

updateContentPost( 1, "Novo conteúdo do post" );


// Delete
function deletePost( id ) {

    // lógica de pegar apenas os post que quer que fiquem, e tirar o que não quer
    const postsListUpdated = getPosts().filter(
        ( posts ) => {
            // retorna os posts com id que são diferentes do que colocou, retorna uma lista sem esse id
            return posts.id !== id;
        }
    );

    // atualiza a lista principal
    miniRede.postagens = postsListUpdated;
}

deletePost( 2 );

console.log( getPosts() );
