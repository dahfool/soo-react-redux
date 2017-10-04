import tag from '../../actions/tagActions'
import tags from '../../reducers/tags'

describe('tags reducer', () => {
    it('should handle initial state', () => {
        expect(tags(undefined, { type: '@@INIT' })).toEqual({ countries: [], categories: [] });
    });

    it('should ADD_TAG countries', () => {
        expect(tags({ countries: [], categories: [] }, tag.addTag({result: "France", active: "countries"}))).toEqual(
            { countries: ["France"], categories: [] }
        )
    });

    it('should REMOVE_TAG countries', () => {
        expect(tags({ countries: ["France"], categories: [] }, tag.deleteTag({button: "France", active: "countries"}))).toEqual(
            { countries: [], categories: [] }
        )
    });

    it('should ADD_TAG categories', () => {
        expect(tags({ countries: [], categories: [] }, tag.addTag({result: "Music", active: "categories"}))).toEqual(
            { countries: [], categories: ["Music"] }
        )
    });

    it('should REMOVE_TAG categories', () => {
        expect(tags({ countries: [], categories: ["Music"] }, tag.deleteTag({button: "Music", active: "categories"}))).toEqual(
            { countries: [], categories: [] }
        )
    });
});
