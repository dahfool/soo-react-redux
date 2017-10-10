import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme';
import SearchWidget from '../../component/searchWidget'

const setup = (categories=[], countries=[], countriesTags=[], categoriesTags=[]) => {

    const actions = {
        onSubmit: jest.fn(),
        onInputChange: jest.fn(),
        onDropdownClick: jest.fn(),
        onTagClick: jest.fn()
    };

    const component = shallow(<SearchWidget categories={categories} countries={countries} categoriesTags={categoriesTags} countriesTags={countriesTags} {...actions}/>)

    return {
        component,
        button: component.find('button')
    }

};

describe('App component', () => {

    it('should render app', () => {
        const { component } = setup()
        expect(component.length).toEqual(1)
    });

    it('should have a button', () => {
        const { button } = setup()
        expect(button.length).toEqual(1)
    })

});