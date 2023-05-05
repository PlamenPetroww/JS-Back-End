const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You need a name!!!']
    },
    age: Number,
    breed: String,
});

//Method
catSchema.methods.sayMeow = function() {
    console.log(`Hello, my name is ${this.name}, and meow`)
};

//Virtual property
catSchema.virtual('info').get(function() {
    return `${this.name} - ${this.age} age, ${this.breed}`;
});

const Cat = mongoose.model('Cat', catSchema);

async function main() {

    console.log('Database connected')
    await mongoose.connect('mongodb://127.0.0.1:27017/catShelter');

    const cats = await readCats();
    cats.forEach(cat => {
        cat.sayMeow();
        console.log(cat.info);
    })
    await saveCat(null, 4, 'Dog');


};

async function saveCat(name, age, breed){

await Cat.create({
    name,
    age,
    breed
});

    // const cat = new Cat({
    //     name,
    //     age,
    //     breed,
    // });

    // await cat.save();
}
async function readCats() {
    const cats = await Cat.find();
    console.log(cats);
    return cats;
}


main()