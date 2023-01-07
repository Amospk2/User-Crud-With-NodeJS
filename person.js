// Aprendendo a exportar modulos no node
class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `My Name is ${this.name}!!!!`;
    }

}

module.exports = {
    Person,
};