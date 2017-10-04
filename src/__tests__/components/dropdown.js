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
        links: component.find('a')
    }

};

describe('Dropdown component', () => {

    it('should have no link in dropdown', () => {
        const { links } = setup();
        expect(links.length).toEqual(0)
    });

    it('should render 2 links in dropdown', () => {
        const { links } = setup(['jewellery', 'technology']);
        expect(links.length).toEqual(2)
    });

    it('Should call action on link click',() => {
        const { links, actions } = setup(['jewellery'], 'categories');
        links.at(0).simulate('click');
        expect(actions.onClick).toBeCalled();
    });

});