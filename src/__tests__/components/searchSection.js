import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme';
import SearchSection from '../../component/searchSection'
import Input from '../../component/input'
import Dropdown from '../../component/dropdown'
import Tag from '../../component/tag'

const setup = (id='', placeholder='', aria='', data=[], tags=[]  ) => {

    const actions = {
        onInputChange: jest.fn(),
        onDropdownClick: jest.fn(),
        onTagClick: jest.fn()
    };

    const component = shallow(<SearchSection id={id} placeholder={placeholder} aria={aria} data={data} tags={tags}  {...actions}>test</SearchSection>)

    return {
        actions,
        Input: component.find(Input),
        Dropdown: component.find(Dropdown),
        Tag: component.find(Tag)
    }

};

let initialProps;
describe('SearchSection component', () => {

    it('should have a Input component', () => {
        const { Input } = setup();
        expect(Input.length).toEqual(1);
    });

    it('should have a Dropdown component', () => {
        const { Dropdown } = setup();
        expect(Dropdown.length).toEqual(1);
    });

    it('should have a Tag component', () => {
        const { Tag } = setup(initialProps);
        expect(Tag.length).toEqual(1);
    });


});