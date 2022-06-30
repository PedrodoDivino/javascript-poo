class spaceship {
    constructor(nome, crew){
        this.nome = nome;
        this.crew = crew;
        this.hitched = false;
        this.doors = false;
    }

    hitch(){
        this.hitched = true
        this.doors = true
    }
}

let hitched = []

function registerShip() {
    let nome_nave = prompt('Informe o nome da nave')
    let tripulante_nave = prompt('Informe a quantidade de tripulantes')
    
    let spaceshipC = new spaceship(nome_nave, tripulante_nave)
    return spaceshipC
}

function printShip(element) {
    let list = '';
    element.forEach(function(element, index) {
        list += (index + 1) + '- ' + element.nome + " (" + element.crew + " Tripulantes)\n";
    })
    alert(list)
}

function showMenu() {
    let option
    while(option != 3){
        option = prompt('O que deseja fazer?\n1- Engatar nave\n2- Imprimir naves\n3- Sair do programa')
        
        switch (option) {
            case '1':
                let rn = registerShip()
                rn.hitch()
                hitched.push(rn)
                break;
            case '2':
                printShip(hitched)
                break;
            case '3':
                break;
            default:
                alert('Esta opção não existe.')
                break;
        }
    }
}

showMenu()