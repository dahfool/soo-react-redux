import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme';
import Tag from '../../component/tag'

const setup = (props=[], active= '') => {

    const actions = {
        onClick: jest.fn()
    };

    const component = shallow(<Tag props={props} active={active} {...actions} />)

    return {
        actions,
        buttons: component.find('button'),
        span: component.find('span')
    }

};

describe('Tag component', () => {

    it('should have not tags', () => {
        const { buttons, span } = setup();
        expect(buttons.length).toEqual(0);
        expect(span.length).toEqual(0);
    });

    it('should have 3 tags', () => {
        const { buttons, span } = setup(['food', 'drinks', 'technology']);
        expect(buttons.length).toEqual(3);
        expect(span.length).toEqual(3);
    });


    it('should fire delete tag action', () => {
        const { actions, span } = setup(['food']);
        span.simulate('click');
        expect(actions.onClick).toBeCalled();

    });


});