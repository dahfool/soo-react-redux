import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme';
import Dropdown from '../../component/dropdown'

const setup = (props=[], active='') => {

    const actions = {
        onClick: jest.fn()
    };

    const component = shallow(<Dropdown props={props} active={active} {...actions} />);

    return {
        actions,
        buttons: component.find('button')
    }

};

describe('Dropdown component', () => {

    it('should have no buttons in dropdown', () => {
        const { buttons } = setup();
        expect(buttons.length).toEqual(0)
    });

    it('should render 2 buttons in dropdown', () => {
        const { buttons } = setup(['jewellery', 'technology']);
        expect(buttons.length).toEqual(2)
    });

    it('Should call action on link click',() => {
        const { buttons, actions } = setup(['jewellery'], 'categories');
        buttons.at(0).simulate('click');
        expect(actions.onClick).toBeCalled();
    });

});