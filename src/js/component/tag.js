import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({props, active, onClick}) => {

  return (
    <div>
      {props.map((button, i) => (<button key={i} type="button" className="btn btn-secondary">{button}<span onClick={()=>onClick({button, active})}>x</span></button>))}
    </div>
  )
};

Tag.propTypes = {
  props : PropTypes.array.isRequired,
  active : PropTypes.string.isRequired,
  onClick : PropTypes.func.isRequired
};

export default Tag;
