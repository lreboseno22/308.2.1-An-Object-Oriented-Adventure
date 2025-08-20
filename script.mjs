// Class Fantasy
class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.companion = null;
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// Create an Adventurer class extending from Character class
class Adventurer extends Character {
    constructor (name, role){
        super(name);
        // Adventures have specialized roles
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them
    scout(){
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character {
    constructor(name, ability){
        super(name);
        this.abliity = ability
    }
    useAbility(){
        console.log(`${this.name} is using it's ability: ${this.abliity}!`);
        super.roll();
    }
}

const robin = new Adventurer("Robin", "swordsman");

const leo = new Companion("Leo", "nap");
robin.companion = leo;

const frank = new Companion("Frank", "itch");
frank.inventory = ["small hat", "sunglasses"];
robin.companion.companion = frank;

console.log(robin);
console.log(leo);
console.log(frank);
