function printEmployees(people){

    people.map((person) => {
        return employee = {
            name: person,
            personalNumber: person.length,
        };
    }).forEach((employee) => 
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    );

}

printEmployees(['Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);