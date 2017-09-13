import mongoose from '../mongoose';
import Categories from '../models/categories'
import Countries from '../models/countries'

const data = {
    categories: [
        {name: 'pets'},
        {name: 'Tools'},
        {name: 'Gardening'},
        {name: 'Kitchen'},
        {name: 'Technology'}
    ],
    countries: [
        {name: 'United kingdom'},
        {name: 'France'},
        {name: 'America'},
        {name: 'Mexico'},
        {name: 'Brazil'},
    ]
};


Categories.insertMany(data.categories).then((docs) => {
    console.log('categories Migrated', docs)
}).catch((e) => {
    console.log(e)
});


Countries.insertMany(data.countries).then((docs) => {
    console.log('categories Migrated', docs)
}).catch((e) => {
    console.log(e)
});

mongoose.connection.close();