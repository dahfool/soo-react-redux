import React from 'react'
import PropTypes from 'prop-types'

const Input = ({id, aria, placeholder, children, onChange}) => {

  return (
    <div className='form-group'>
      <label for={id}>{children}</label>
      <input type='text' className='form-control' id={id} aria-describedby={aria} placeholder={placeholder}  autoComplete='off' onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
};

Input.PropTypes = {
    inputField: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;
