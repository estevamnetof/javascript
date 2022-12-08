// ========= Subclasses
// class Veiculo {
//     constructor(rodas) {
//         this.rodas = rodas;
//     }
//     acelerar() {
//         console.log('Acelerou');
//     }
// }

// class Moto extends Veiculo {
//     empinar() {
//         console.log('Empinou com ' + this.rodas + ' rodas');
//     }
// }

// const honda = new Moto(2);
// honda.empinar();


// ========= Métodos
// class Veiculo {
//     constructor(rodas) {
//         this.rodas = rodas;
//     }
//     acelerar() {
//         console.log('Acelerou');
//     }
// }

// class Moto extends Veiculo {
//     acelerar() {
//         console.log('Acelerou Muito');
//     }
// }

// const honda = new Moto(2);
// honda.acelerar();


// ========= Super
// class Veiculo {
//     constructor(rodas) {
//         this.rodas = rodas;
//     }
//     acelerar() {
//         console.log('Acelerou');
//     }
// }

// class Moto extends Veiculo {
//     acelerar() {
//         super.acelerar();
//         console.log('Muito');
//     }
// }

// const honda = new Moto(2);
// honda.acelerar();


// ========= Super e Constructor
class Veiculo {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
}

class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
    }
}

const honda = new Moto(4, 'Gasolina', true);