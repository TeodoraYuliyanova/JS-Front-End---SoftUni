function createRegisterForHeroes(input){

    const heroesRegister = [];

    for (let line of input) {
        let [hero,level,items] = line.split(" / ");

        level = Number(level);

        heroesRegister.push({hero,level,items});
    }

    const sortedHeroes = heroesRegister.sort((heroA,heroB) => heroA.level - heroB.level);

    for (const {hero, level, items} of sortedHeroes) {
        console.log(`Hero: ${hero}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    }

}

createRegisterForHeroes([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);