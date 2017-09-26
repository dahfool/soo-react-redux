import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme';
import SearchSection from '../../js/component/searchSection'
import Input from '../../js/component/input'
import Dropdown from '../../js/component/dropdown'
import Tag from '../../js/component/tag'

const setup = (props={}) => {

    const actions = {
        onInputChange: jest.fn(),
        onDropdownClick: jest.fn(),
        onTagClick: jest.fn()
    };

    const component = shallow(<SearchSection props={props} {...actions} />)

    return {
        actions,
        Input: component.find(Input),
        Dropdown: component.find(Dropdown),
        Tag: component.find(Tag)
    }

};

let initialProps;
describe('SearchSection component', () => {

    beforeEach(() => {
        initialProps = {
            id: '',
            placeholder: '',
            aria: '',
            children: '',
            data: [],
            tags: []
        }
    });

    it('should have a Input component', () => {
        const { Input } = setup(initialProps);
        expect(Input.length).toEqual(1);
    });

    it('should have a Dropdown component', () => {
        const { Dropdown } = setup(initialProps);
        expect(Dropdown.length).toEqual(1);
    });

    it('should have a Tag component', () => {
        const { Tag } = setup(initialProps);
        expect(Tag.length).toEqual(1);
    });


});