

// ex1 - a
function imprimeFrase (nome){
    console.log(`olá, ${nome}`);
}


const myName = "Andréa"
console.log("================ex1 - a======================");
imprimeFrase(myName)
imprimeFrase("bananinha")
console.log("\n");

// b 
// function tabuada (number){
//     for (let index = 0; index <= 10; index++) {
//         let result = index * number
//         console.log(`${index} x ${number} = ${result}`);  
//     }
// }

function tabuada (number){
        console.log("==================ex1 - b====================");
        console.log(`tabuada de multiplicação de ${number}`);
        console.log(`
        0 x ${number} = ${0 * number}
        1 x ${number} = ${1 * number}
        2 x ${number} = ${2 * number}
        3 x ${number} = ${3 * number}
        4 x ${number} = ${4 * number}
        5 x ${number} = ${5 * number}
        6 x ${number} = ${6 * number}
        7 x ${number} = ${7 * number}
        8 x ${number} = ${8 * number}
        9 x ${number} = ${9 * number}
        10 x ${number} = ${10 * number}
        `);



        console.log("========================");
        console.log(`0 x ${number} = ${0 * number}`);  
        console.log(`1 x ${number} = ${1 * number}`);  
        console.log(`2 x ${number} = ${2 * number}`);  
        console.log(`3 x ${number} = ${3 * number}`);  
        console.log(`4 x ${number} = ${4 * number}`);  
        console.log(`5 x ${number} = ${5 * number}`);  
        console.log(`6 x ${number} = ${6 * number}`);  
        console.log(`7 x ${number} = ${7 * number}`);  
        console.log(`8 x ${number} = ${8 * number}`);  
        console.log(`9 x ${number} = ${9 * number}`);  
        console.log(`10 x ${number} = ${10 * number}`);   
        console.log("\n");
    }


tabuada(10);
tabuada(100);
tabuada(3);

// ex1 - c 
// forma verbosa
const imprimeFraseArrowFunction1 = (nome) => {
    console.log(`olá, ${nome}`);
}

// forma abreviada
const imprimeFraseArrowFunction = (nome) => console.log(`olá, ${nome}`);

console.log("================ex1 - c======================");
console.log(`Imprime frase usando Arrow Function`);
imprimeFraseArrowFunction1("eu")
imprimeFraseArrowFunction("teste")
console.log("\n");


const tabuadaArrowFunction = (number) =>{
    console.log("==================ex1 - b====================");
    console.log(`tabuada usando Arrow Function de ${number}`);
    console.log(`0 x ${number} = ${0*number}`);  
    console.log(`1 x ${number} = ${1*number}`);  
    console.log(`2 x ${number} = ${2*number}`);  
    console.log(`3 x ${number} = ${3*number}`);  
    console.log(`4 x ${number} = ${4*number}`);  
    console.log(`5 x ${number} = ${5*number}`);  
    console.log(`6 x ${number} = ${6*number}`);  
    console.log(`7 x ${number} = ${7*number}`);  
    console.log(`8 x ${number} = ${8*number}`);  
    console.log(`9 x ${number} = ${9*number}`);  
    console.log(`10 x ${number} = ${10*number}`);   
    console.log("\n");
}

tabuadaArrowFunction(2)
=======

