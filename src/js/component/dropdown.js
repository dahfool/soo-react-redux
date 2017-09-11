import React from 'react'

const Dropdown = ({results, onClick, active}) => {

  return (
      <div className="dropdown show">
        <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
          {results.map((result) => (<a className="dropdown-item" key={result.id} href="#" onClick={()=>onClick(result, active)}>{result.text}</a>))}
        </div>
      </div>
  )
};

export default Dropdown;
