import React from 'react'
import PropTypes from 'prop-types'

const Input = ({id, aria, placeholder, children, onChange}) => {

  return (
    <div className='form-group'>
      <label htmlFor={id}>{children}</label>
      <input type='text' className='form-control' id={id} aria-describedby={aria} placeholder={placeholder}  autoComplete='off' onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    aria: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Input;
