import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({props, active, onClick}) => {

    let dropdown = props.length > 0 ? 'dropdown-menu show' : 'dropdown-menu';

    return (
        <div className={dropdown} aria-labelledby="dropdownMenuButton">
          {props.map((result, i) => (<button className="dropdown-item" key={i} onClick={()=>onClick(result, active)}>{result}</button>))}
        </div>
    )
};

Dropdown.propTypes = {
    props: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Dropdown;
