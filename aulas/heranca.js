class Spaceship {
    constructor(name, maxCrew, maxRecomendedVelocity){
this.name= name
this.maxCrew= maxCrew
this.maxRecomendedVelocity= maxRecomendedVelocity
this.currentVelocity = 0
    }
    speedUp(aceleration){
        this.currentVelocity+= aceleration
        if (this.currentVelocity > maxRecomendedVelocity){
            console.log('velocidade maxima ultrapassda! Diminua!')
        }
    }
}
class BattleSpaceship extends Spaceship{

stop(){
    this.currentVelocity=0
    console.log('recolhendo armas e parando nave de batalha')
}
}
class DiscoverySpaceship extends Spaceship{
stop(){
    this.currentVelocity =0
    console.log('recolhendo equipamentos de amostras e parando nave de descoberta')
    }
}
let darwin = new DiscoverySpaceship('darwin', 10, 200)

let thor = new BattleSpaceship ('thor', 8, 250)

darwin.speedUp(300)

thor.speedUp(300)

darwin.stop()
thor.stop()
console.log(darwin, thor)
