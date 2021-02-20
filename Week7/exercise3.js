var animals = [
    {name: 'Cuddles', species: 'dog'},
    {name: 'Pookie', species: 'guinia pig'},
    {name: 'Squirt', species: 'dog'},
    {name: 'Rascal', species: 'dog'},
    {name: 'Fred', species: 'fish'},
    {name: 'George', species: 'fish'},
    {name: 'Bandit', species: 'dog'}
]

var isDog = function(animals) {
    return animals.species === 'dog'
}

var notDog = function(animals) {
    return animals.species !== 'dog'
}

var dogs = animals.filter(isDog)
console.log(dogs)

var notDogs = animals.filter(notDog)
console.log(notDogs)