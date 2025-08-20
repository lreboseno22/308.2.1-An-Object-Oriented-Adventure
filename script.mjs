// Class Fantasy
class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.companion = {
            name: this.name,
            type: this.type,
            inventory: this.inventory
        };
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion,", "artifact"];
const leo = robin.companion = new Character("Leo");
robin.companion.type = "Cat";
const frank = robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];


leo.roll();
frank.roll();