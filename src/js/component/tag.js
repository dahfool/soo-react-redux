import React from 'react'

const tag = ({buttons}) => {

  return (
    <div>
      {buttons.map((button) => (<button type="button" className="btn btn-light">{button}</button>))}
    </div>
  )
}

export default tag;
