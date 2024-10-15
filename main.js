class fightingGames {

    constructor(name, year, studio, protagonist) {

        this.name = name;
        this.year = year;
        this.studio = studio;
        this.protagonist = protagonist;


    }

    game() {
        console.log(`${this.name} was released in North America in ${this.year}.`)
    }

    studioName() {
        console.log(`${this.name} was produced by ${this.studio}.`)
    }

    mainCharacter() {
        console.log(`${this.name}'s main character is ${this.protagonist}.`)
    }

}

let dragonballFighterz = new fightingGames('Dragonball FighterZ', 2018, 'Bandi-Namco', 'Goku')


dragonballFighterz.game();
dragonballFighterz.studioName();
dragonballFighterz.mainCharacter();