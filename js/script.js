// *1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//* Stampare a schermo la bici con peso minore.

var bici = [

    {

      nome: 'Tiger',
      peso: 86
        
    },

    {

        nome: 'Lion',
        peso: 80
          
      },

      {

        nome: 'Kobra',
        peso: 16
          
      },

      {

        nome: 'Bmx',
        peso: 15
          
      },

      {

        nome: 'Hurricane',
        peso: 121
          
      },
]

var peso = bici[0].peso;

for(var i = 1; i < bici.length; i++){
    console.log(bici[i]);

    if(bici[i].peso < peso){
        peso = bici[i].peso;
    }


}

console.log(peso);


//* 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
//* Calcola quanto pesano tutte le zucchine.







// *3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine