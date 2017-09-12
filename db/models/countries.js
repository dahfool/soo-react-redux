import mongoose from '../mongoose';

const CountrySchema = mongoose.Schema({
    name: {
        type: String
    }
});

const Country = mongoose.model('Country', CountrySchema);

export default Country;