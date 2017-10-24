import mongoose from '../mongoose';
import Categories from '../models/categories'
import Countries from '../models/countries'
import Markets from '../models/markets'

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
    ],
    markets: [
        {
            name: 'Ebay',
            markets: 'France',
            description: 'eBay connects sellers to buyers worldwide, including 22 million active users in the UK',
            logo: 'http://via.placeholder.com/300X300'
        },
        {
            name: 'Etsy',
            markets: 'Global',
            description: 'Etsy is a global marketplace for people who make, sell and buy unique goods both online and offline.',
            logo: 'http://via.placeholder.com/300X300'
        },
        {
            name: 'Amazon',
            markets: 'Germany',
            description: 'Amazon gives companies of all sizes an international sales channel with no upfront costs.',
            logo: 'http://via.placeholder.com/300X300'
        }
    ]
};


Categories.insertMany(data.categories).then((docs) => {
    console.log('categories Migrated', docs)
}).catch((e) => {
    console.log(e)
});


Countries.insertMany(data.countries).then((docs) => {
    console.log('countries Migrated', docs)
}).catch((e) => {
    console.log(e)
});

Markets.insertMany(data.markets).then((docs) => {
    console.log('markets Migrated', docs)
}).catch((e) => {
    console.log(e)
});


mongoose.connection.close();