import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({props, active, onClick}) => {

  return (
    <div>
      {props.map((button, i) => (<button key={i} type="button" className="btn btn-light">{button}<span onClick={()=>onClick({button, active})}>x</span></button>))}
    </div>
  )
};

Tag.PropTypes = {
  buttons : PropTypes.array.isRequired,
  onClick : PropTypes.func.isRequired,
  active : PropTypes.string.isRequired

}

export default Tag;
