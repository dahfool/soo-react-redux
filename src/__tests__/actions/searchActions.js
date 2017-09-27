import searchAction from '../../js/actions/searchActions'

const response = ({json: jest.fn(() => 123)})
window.fetch = jest.fn(() => Promise.resolve(response))
describe('search action creator', () => {
    it('should return pending action', async () => {
        const dispatch = jest.fn()
        await searchAction.search('a', 'cat')(dispatch)
        expect(dispatch).toHaveBeenCalledWith(searchAction.pending())
    })

    it('should return fetched action', async () => {
        const dispatch = jest.fn()
        await searchAction.search('a', 'cat')(dispatch)
        expect(dispatch).toHaveBeenCalledWith(searchAction.fetched(123, 'a', 'cat'))
    })

    it('should return rejected action', async () => {
        window.fetch = jest.fn(() => Promise.reject('err'))
        const dispatch = jest.fn()
        await searchAction.search('a', 'cat')(dispatch)
        expect(dispatch).toHaveBeenCalledWith(searchAction.rejected('err'))
    })
})

