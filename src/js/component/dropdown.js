import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({results, onClick, active}) => {

  return (
      <div className="dropdown show">
        <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
          {results.map((result, i) => (<a className="dropdown-item" key={i} href="#" onClick={()=>onClick(result, active)}>{result}</a>))}
        </div>
      </div>
  )
};

Dropdown.PropTypes = {
    results: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired
};

export default Dropdown;
