class mamiferos {
    constructor(especies, name ,idade){
        this.especies = especies;
        this.name = name;
        this.idade = idade;
        this.mamiferos = true;
    }
    incremetaIdade (){
        this.idade ++
    }
}

class Lion extends mamiferos{

    eatZebra(animais){

return animais.filter(animal => animal.especies !== 'zebra')
    }
    
}

const zeca = new mamiferos('zebra', 'zeca', 6);
const irineu = new mamiferos('gnu','irineu', 5);
const angus = new mamiferos('cavalo', ' angus',3);
const thor = new Lion('leao','thor',7);
const animais = ['zeca','irineu','angus'];

console.log(thor.eatZebra(animais))