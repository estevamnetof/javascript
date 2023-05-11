// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
// }

function Dom() {
    this.element = function() {
        return document.querySelector(seletor);
    }
    this.ativar = function() {
        this.element().classList.add('ativar');
    }
}


// Dom.seletor = 'ul';
// Dom.ativar();

const li = new Dom('li');