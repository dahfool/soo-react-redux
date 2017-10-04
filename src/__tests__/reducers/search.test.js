import searchAction from '../../actions/searchActions'
import search from '../../reducers/search'

describe('search reducer', () => {
    it('Should handle initial state', () => {
        expect(search(undefined, { type: '@@INIT' })).toEqual({
                countries: {
                    searchTerm: '',
                    result: []
                },
                categories: {
                    searchTerm: '',
                    result: []
                },
                activeField: null,
                fetching: false,
                fetched: false,
                error: null
        });
    });


    it('Should be in pending state', () => {
        expect(search(undefined, searchAction.pending())).toEqual({
            countries: {
                searchTerm: '',
                result: []
            },
            categories: {
                searchTerm: '',
                result: []
            },
            activeField: null,
            fetching: true,
            fetched: false,
            error: null
        })
    });

    it('Should be fullfilled state', () => {
        expect(search(undefined, searchAction.fetched(['food','technology'], 'a', 'categories'))).toEqual({
            countries: {
                searchTerm: '',
                result: []
            },
            categories: {
                searchTerm: 'a',
                result: ['food','technology'],
            },
            activeField: 'categories',
            fetching: false,
            fetched: true,
            error: null
        })
    });

    it('Should be in rejected state', async () => {
        expect(search(undefined, searchAction.rejected('err'))).toEqual({
            countries: {
                searchTerm: '',
                result: []
            },
            categories: {
                searchTerm: '',
                result: []
            },
            activeField: null,
            fetching: false,
            fetched: false,
            error: { payload: 'err' }
        })
    });


});