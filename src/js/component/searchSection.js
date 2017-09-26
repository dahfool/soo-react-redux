import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../component/dropdown'
import Input from '../component/input'
import Tag from '../component/tag'

const SearchSection = ({props, onInputChange, onDropdownClick, onTagClick}) => {

    return (
       <div className="btn-group">
           <Input id={props.id} placeholder={props.placeholder} aria={props.aria} onChange={onInputChange}>{props.children}</Input>
           <Dropdown props={props.data} active={props.id} onClick={onDropdownClick}/>
           <Tag props={props.tags} active={props.id} onClick={onTagClick}/>
       </div>
    )
};

SearchSection.propTypes = {
    props: PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onDropdownClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
};

export default SearchSection;
