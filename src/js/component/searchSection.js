import React from 'react'
import Dropdown from '../containers/dropdown'
import Input from '../containers/input'
import Tag from '../containers/tag'


const SearchSection = (data) => {

    return (
       <div>
           <Input id={data.id} placeholder={data.placeholder} aria={data.aria}>{data.children}</Input>
           <Dropdown data={data.data} active={data.id}/>
           <Tag data={data.tags} active={data.id}/>
       </div>
    )
};

export default SearchSection;
