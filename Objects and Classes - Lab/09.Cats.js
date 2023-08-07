function createCat(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        };

        meow() {
            console.log(this.name + ', age ' + this.age + ' says Meow');
        }
    }

    let cats = [];

    for (let element of array) {

        let [name, age] = element.split(' ');
        cats.push(new Cat(name, age));

    }

    cats.forEach(cat => cat.meow());

}

createCat(['Mellow 2', 'Tom 5']);