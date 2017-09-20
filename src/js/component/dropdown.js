import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({props, active, onClick}) => {

  return (
      <div className="dropdown show">
        <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
          {props.map((result, i) => (<a className="dropdown-item" key={i} href="#" onClick={()=>onClick(result, active)}>{result}</a>))}
        </div>
      </div>
  )
};

Dropdown.propTypes = {
    props: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Dropdown;
