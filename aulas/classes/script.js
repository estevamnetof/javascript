// ========= Constructor Function
function button(text, background) {
    this.text = text;
    this.background = background;
}

button.prototype = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}

// const blueButton = new button('Comprar', 'blue');


// ========= Class
// class Button {
//     constructor(text, background) {
//         this.text = text;
//         this.background = background;
//     }
//     element() {
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = this.text;
//         buttonElement.style.background = this.background;
//         return buttonElement;
//     }
// }

// const blueButton = new Button('Comprar', 'blue');


// Constructor
// class Button {
//     constructor(text, background, color) {
//         this.text = text;
//         this.background = background;
//         this.color = color;
//     }
// }

// const blueButton = new Button('Clique', 'blue', 'white');
// console.log(blueButton);


// Constructor Return
// class Button {
//     constructor(text) {
//         this.text = text;
//         return this.element(); // não fazer
//     }
//     element() {
//         document.createElement('button').innerText = this.text;
//     }
// }

// const btn = new Button('Clique');


// ========= This
// class Button {
//     constructor(text) {
//         this.text = text;
//     }
//     element() {
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = this.text;
//         return buttonElement;
//     }
//     appendElementTo(target) {
//         const targetElement = document.querySelector(target);
//         targetElement.appendChild(this.element());
//     }
// }

// const blueButton = new Button('Clique');
// blueButton.appendElementTo('body');


// Propriedades
// class Button {
//     constructor(options) {
//         this.options = options;
//     }
// }

// const blueOptions = {
//     backgroundColor: 'blue',
//     color: 'white',
//     text: 'Clique',
//     borderRadius: '4px',
// }

// const blueButton = new Button(blueOptions);
// blueButton.options


// ========= Static vs Prototype
// class Button {
//     constructor(text) {
//         this.text = text;
//     }
//     static create(background) {
//         const elementButton = document.createElement('button');
//         elementButton.style.background = background;
//         elementButton.innerText = 'Clique';
//         return elementButton;
//     }
// }

// const blueButton = Button.create('blue');


// ========= Static
class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element() {
        const elementButton = document.createElement('button');
        elementButton.innerText = this.text;
        elementButton.style.background = this.background;
        return elementButton;
    }
    static createBlue(text) {
        return new Button(text, 'blue');
    }
}

const blueButton = Button.createBlue('Comprar');