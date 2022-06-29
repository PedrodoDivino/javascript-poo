class Spaceship {
    constructor (name){
        this.name = name;
        this.vel = 0;
    }
    speedUp(aceleration){
        this.vel+= aceleration;
    }
}

let artemis = new Spaceship('artemis');

console.log(artemis);

artemis.speedUp(10);
artemis.speedUp(15);

console.log(artemis);