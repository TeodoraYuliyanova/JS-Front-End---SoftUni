function storesPersonInfo(array){
      let phoneBook = {};

      for (const element of array) {
          const line = element.split(" ");
          let name = line[0];
          let number = line[1];

          phoneBook[name] = number;
      }

      for (const key in phoneBook) {
          console.log(`${key} -> ${phoneBook[key]}`)
      }
}

storesPersonInfo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);