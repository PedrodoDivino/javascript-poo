class capitan {
    constructor(name, age, flihtHours){
this.name=  name;
this.age  = age;
this.flihtHours= flihtHours;
    }
}
class Spaceship {
constructor(name, quantidadeTripulantes, capitanName, capitanAge, capitanFlihtHours){
    this.name= name;
    this.capitanName= capitanName;
    this.quantidadeTripulantes  = quantidadeTripulantes;
    this.capitanFlihtHours = capitanFlihtHours;
    this.capitan = new capitan(capitanName,capitanAge,capitanFlihtHours)

    }
}
let spaceship = new Spaceship('Boeng','will',50, 15000)
console.log(spaceship)
