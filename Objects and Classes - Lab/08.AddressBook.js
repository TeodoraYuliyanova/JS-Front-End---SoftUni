function storesPersonInfo(array){
    let addressBook = {};

    for (const element of array) {
        const line = element.split(":");
        let name = line[0];
        let address = line[1];

        addressBook[name] = address;
    }

    Object.keys(addressBook).sort((a,b) => a.localeCompare(b))
    .forEach((key) => {
        console.log(key + ' -> ' + addressBook[key])
    });
}

storesPersonInfo(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);
