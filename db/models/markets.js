import mongoose from '../mongoose';

const MarketSchema = mongoose.Schema({
    name: {
        type: String
    },
    markets: {
        type: String
    },
    description: {
        type: String
    },
    logo: {
        type: String
    }
});

const Market = mongoose.model('Market', MarketSchema);

export default Market;
