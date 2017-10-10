import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../component/dropdown'
import Input from '../component/input'
import Tag from '../component/tag'

const SearchSection = ({...props}) => {



    return (
       <div className="btn-group">
           <Input id={props.id} placeholder={props.placeholder} aria={props.aria} onChange={(e)=>props.onInputChange(e, props.id)}>{props.children}</Input>
           <Dropdown props={props.data} active={props.id} onClick={props.onDropdownClick}/>
           <Tag props={props.tags} active={props.id} onClick={props.onTagClick}/>
       </div>
    )
};

SearchSection.propTypes = {
    props: PropTypes.object,
    onInputChange: PropTypes.func.isRequired,
    onDropdownClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
};

export default SearchSection;
