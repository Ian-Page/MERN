class Ninja{
    constructor(name,health,speed = 3, strength =3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("Ninjas name is :" + this.name);
    }

    showStats(){
        console.log("stats for:" + this.name);
        console.log("Health:" + this.health);
        console.log("speed:" + this.speed);
        console.log("strength:" + this.strength);
    }

    drinkSake(){
        this.health += 10;
        console.log(this.name + " just drank sake health is now :" + this.health)
    }

}
class Sensei extends Ninja{
    constructor(name,health=200,speed =10, strength= 10,wisdom=10){
        super(name,health,speed,strength);
        this.wisdom =wisdom;
    }

    speakWisdom(){
        console.log("speaking words of wisdom")
        this.drinkSake();
        console.log ("let it be let it be let it be let it be speaking words of wisdom let it beeeeeeeeeeee!!!!!!")
    }
}

console.log("\n building ninja Ian ");
const ninja1 = new Ninja("Ian",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log("\n building ninja Sam");
const ninja2 = new Ninja("Sam", 20, 5, 7);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();

console.log("\n building sensei John");
const sensei1 = new Sensei("Sensei John");
sensei1.showStats();
sensei1.speakWisdom;
