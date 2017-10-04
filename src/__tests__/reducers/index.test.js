import reducers from '../../reducers'

describe('root reducer', () => {
    it('should combine all reducers', () => {
        expect(reducers({}, { type: '@@INIT' })).toEqual({
            routing: {
              location: null
            },
            search: {
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
            },
            tags: {
                countries: [],
                categories: []
            }
        });
    });
});
