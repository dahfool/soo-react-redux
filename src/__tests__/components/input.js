import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme';
import Input from '../../js/component/input'

const setup = (id='', aria= '', placeholder='', children='') => {

    const actions = {
        onChange: jest.fn()
    };

    const component = shallow(<Input id={id} aria={aria} placeholder={placeholder} children={children} {...actions} />)

    return {
        actions,
        label: component.find('label'),
        input: component.find('input')
    }

};

describe('Input component', () => {

    it('should have a label', () => {
        const { label } = setup('categories','','','What do you sell ?');
        expect(label.length).toEqual(1);
        expect(label.prop('for')).toEqual('categories');
        expect(label.prop('children')).toEqual('What do you sell ?');
    });


    it('should have an input field', () => {
        const { input } = setup('categories','categorieshelp','Product type', '');
        expect(input.length).toEqual(1);
        expect(input.prop('id')).toEqual('categories');
        expect(input.prop('aria-describedby')).toEqual('categorieshelp');
        expect(input.prop('placeholder')).toEqual('Product type');
    });

    it('should fire onchange action', () => {
        const { actions , input } = setup();
        input.simulate('change', {target: ''});
        expect(actions.onChange).toBeCalled()
    })


});