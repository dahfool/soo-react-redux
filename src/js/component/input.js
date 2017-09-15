import React from 'react'
import PropTypes from 'prop-types'

const Input = ({inputField, children, onChange}) => {

  return (
    <div className='form-group'>
      <label for={inputField.id}>{children}</label>
      <input type='text' className='form-control' id={inputField.id} aria-describedby={inputField.aria} placeholder={inputField.placeholder} onChange={(e)=>onChange(e.target.value)} autoComplete='off' />
    </div>
  )
};

Input.PropTypes = {
    inputField: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;
