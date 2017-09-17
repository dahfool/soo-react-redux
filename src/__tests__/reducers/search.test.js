import searchAction from '../../js/actions/searchActions'
import search from '../../js/reducers/search'

describe('search reducer', () => {
    it('Should handle initial state', () => {
        expect(search(undefined, { type: '@@INIT' })).toEqual({
                country: {
                    searchTerm: '',
                    countryList: []
                },
                category: {
                    searchTerm: '',
                    categoryList: []
                },
                activeField: null,
                fetching: false,
                fetched: false,
                error: null
        });
    });
});