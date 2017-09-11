import React from 'react'

const tag = ({buttons, onClick, active}) => {

  return (
    <div>
      {buttons.map((button) => (<button type="button" className="btn btn-light">{button}<span onClick={()=>onClick({button, active})}>x</span></button>))}
    </div>
  )
}

export default tag;
