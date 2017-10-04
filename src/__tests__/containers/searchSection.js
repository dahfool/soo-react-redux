import searchSection from '../../containers/searchSection'
import { dispatch, dispatchProps, props, state } from 'react-redux'

jest.mock('react-redux', () => {
    const mock = {
        dispatch: jest.fn(),
        dispatchProps: {},
        props: {},
        connect: (mapState, mapDispatch) => {
            mock.state = mapState({}, mock.props);
            mock.dispatchProps = mapDispatch(mock.dispatch, {});
            return jest.fn()
        }
    }
    return mock;
})

describe('searchSection container', () => {
    it('should map state', () => {
        expect(state).toEqual({props})
    })

    xit('should map onInputChange', () => {
        dispatchProps.onInputChange(123)
        expect(dispatch).toHaveBeenCalledWith({})
    })
})
