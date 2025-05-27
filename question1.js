// creating a  global variable variable age
let age = 20

//  create a function
function displayAge(){
    console.log("Display age - ",age)
}

function changeAge(){
    age = 23
    console.log("change the age - ",age)
}

//  dispaly age
displayAge()

// changed age
changeAge()

//  after changed age
displayAge()