class Spaceship {
  constructor(name, quantidadeTripulantes, maxRecomendedVelocity) {
    this.name = name;
    this.quantidadeTripulantes = quantidadeTripulantes;
    this.maxRecomendedVelocity = maxRecomendedVelocity;
    this.currentVelocity = 0;
  }
  speedUp() {
    this.currentVelocity += aceleration;
    if (this.currentVelocity > this.maxRecomendedVelocity) {
      console.log("Velocidade máxima ultrapassada! Diminua!");
    }
  }
}
class TrasnportSpaceship extends Spaceship {
  constructor(
    name,
    quantidadeTripulantes,
    maxRecomendedVelocity,
    maxLoadWeigt
  ) {
    super(name, quantidadeTripulantes, maxRecomendedVelocity);
    this.maxLoadWeigt = maxLoadWeigt;
  }
  speedUp(aceleration) {
    aceleration /= 2;
    console.log("incrementando velocidade em " + aceleration + "km/s");
    super.speedUp(aceleration);
  }
}



let trasnportSpaceship = new TrasnportSpaceship("CargoBob", 5, 50, 20000);

console.log(trasnportSpaceship);
trasnportSpaceship.speedUp(210);
console.log(trasnportSpaceship);
