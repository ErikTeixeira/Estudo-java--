let dolar = 5.7;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");


// Evento paara monitorar o teclado - keyup - evento que monitora quando solta qualquer tecla
usdInput.addEventListener("keyup", () => {
    
    // chama a função de converter
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd");
});


// evento que acontece quando sai do foco do input  - blur
usdInput.addEventListener( "blur", () => {

    usdInput.value = formatCurrency( usdInput.value );
} );

brlInput.addEventListener( "blur", () => {
    
    brlInput.value = formatCurrency( brlInput.value );
} );


// define o valor do input no início
usdInput.value = "1000,00";
convert("usd-to-brl");


// Funções
function fixValue( value ) {

    // Garante que o valor é uma string
    value = String(value);
    
    // replace  - trocar  - vai trocar a vírgula pelo ponto
    let fixedValue = value.replace( ",", "." );

    // transformar string em número
    let floatValue = parseFloat( fixedValue );

    // Segurança  - verificar se não é um número
    if ( isNaN( floatValue ) ) {
        floatValue = 0;
    }

    return floatValue;
}

function formatCurrency( value ) {

    // ajustar o valor
    let fixedValue = fixValue(value);

    // fazer este objeto para utilizar a boblioteca de formatação
    let options = {
        // colocar isso para ela não colocar um ponto na milhar, centena ... ( não vai ser 1.000 )
        useGrouping: false,
        // colocar sempre 2 digitos decimais
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    // utilizar função formatar  - é uma biblioteca
        // parâmetros ( "linguagem", configuração )
    let formater = new Intl.NumberFormat( "pt-br", options );

    // retorna valor formatado  - utiliza a função format do Intl
    return formater.format( fixedValue );
}

// recebe um parêmetro para dizer qual o tipo da converção
function convert( type ) {

    if ( type == "usd-to-brl" ) {
        
        // ajustar o valor
        let fixedValue = fixValue( usdInput.value );

        // converter o valor
        let result = fixedValue * dolar;
            // para só ter 2 casas decimais
        result.toFixed(2);

        // mostrar no campo de real
        brlInput.value = formatCurrency( result );

    }
    
    if ( type == "brl-to-usd" ) {

        // ajustar o valor
        let fixedValue = fixValue( brlInput.value );

        // converter o valor
        let result = fixedValue / dolar;
        result.toFixed(2);

        // mostrar no campo de dolar
        usdInput.value = formatCurrency( result );
    }
}

