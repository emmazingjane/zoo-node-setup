var db = require('./models');

var allAnimalsIWantToCreate = [
	{
	name: "Bella",
	species: "cat",
	hasOffSpring: false,
	age: 5
	},
	{
	name: "Dakota",
	species: "dog",
	hasOffSpring: false,
	age: 6
	},
	{
	name: "Bark",
	species: "turtle",
	hasOffSpring: true,
	age: 1
	}
];


db.Animal.remove({}, function (err, removedAnimals){
	db.Animal.create(allAnimalsIWantToCreate, function (err, createdAnimals){
		console.log('all'+ allAnimalsIWantToCreate.length + "animals")
		process.exit();
	})
})