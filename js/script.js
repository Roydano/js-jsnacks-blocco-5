// *1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//* Stampare a schermo la bici con peso minore.

// var bici = [

//     {

//       nome: 'Tiger',
//       peso: 86
        
//     },

//     {

//         nome: 'Lion',
//         peso: 80
          
//       },

//       {

//         nome: 'Kobra',
//         peso: 16
          
//       },

//       {

//         nome: 'Bmx',
//         peso: 15
          
//       },

//       {

//         nome: 'Hurricane',
//         peso: 121
          
//       },
// ]

// var peso = bici[0].peso;

// for(var i = 1; i < bici.length; i++){
//     console.log(bici[i]);

//     if(bici[i].peso < peso){
//         peso = bici[i].peso;
//     }


// }

// console.log(peso);


//* 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
//* Calcola quanto pesano tutte le zucchine.

// var zucchine = [

//     {

//         varieta: 'tipo1',
//         peso: 0,
//         lunghezza: 0

//     },
    
//     {

//         varieta: 'tipo2',
//         peso: 0,
//         lunghezza: 0

//     },

//     {

//         varieta: 'tipo3',
//         peso: 0,
//         lunghezza: 0

//     },

//     {

//         varieta: 'tipo4',
//         peso: 0,
//         lunghezza: 0

//     },

//     {

//         varieta: 'tipo5',
//         peso: 0,
//         lunghezza: 0

//     },
//     {

//         varieta: 'tipo6',
//         peso: 0,
//         lunghezza: 0

//     },

//     {

//         varieta: 'tipo7',
//         peso: 0,
//         lunghezza: 0

//     },

//     {

//         varieta: 'tipo8',
//         peso: 0,
//         lunghezza: 0

//     },

//     {

//         varieta: 'tipo9',
//         peso: 0,
//         lunghezza: 0

//     },

//     {

//         varieta: 'tipo10',
//         peso: 0,
//         lunghezza: 0

//     },

// ]

// var somma= 0;

// for(var i = 0; i < zucchine.length; i++){
//     zucchine[i].peso = randomVal(1, 15);
//     zucchine[i].lunghezza = randomVal(5, 30);

//     somma += zucchine[i].peso;

// }

// console.log(zucchine);
// console.log(somma);




// // FUNZIONE

// function randomVal(min, max){
//     return Math.floor(Math.random() * max - min + 1) + min;
// }



// *3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine




var zucchine = [

    {

        varieta: 'tipo1',
        peso: 0,
        lunghezza: 0

    },
    
    {

        varieta: 'tipo2',
        peso: 0,
        lunghezza: 0

    },

    {

        varieta: 'tipo3',
        peso: 0,
        lunghezza: 0

    },

    {

        varieta: 'tipo4',
        peso: 0,
        lunghezza: 0

    },

    {

        varieta: 'tipo5',
        peso: 0,
        lunghezza: 0

    },
    {

        varieta: 'tipo6',
        peso: 0,
        lunghezza: 0

    },

    {

        varieta: 'tipo7',
        peso: 0,
        lunghezza: 0

    },

    {

        varieta: 'tipo8',
        peso: 0,
        lunghezza: 0

    },

    {

        varieta: 'tipo9',
        peso: 0,
        lunghezza: 0

    },

    {

        varieta: 'tipo10',
        peso: 0,
        lunghezza: 0

    },

]

var lower = [];
var bigger = [];

for(var i = 0; i < zucchine.length; i++){
    zucchine[i].peso = randomVal(1, 15);
    zucchine[i].lunghezza = randomVal(5, 30);

    if(zucchine[i].lunghezza < 15){
        lower.push(zucchine[i]);
    } else {
        bigger.push(zucchine[i]);
    }

}

console.log(zucchine);
console.log(lower);
console.log(bigger);

var sumLower = 0;

for(var i = 0; i < lower.length; i++){
    sumLower += lower[i].peso;
}

var sumBigger = 0;

for(var i = 0; i < bigger.length; i++){
    sumBigger += bigger[i].peso;
}


console.log(sumLower);
console.log(sumBigger);

// FUNZIONE

function randomVal(min, max){
    return Math.floor(Math.random() * max - min + 1) + min;
}