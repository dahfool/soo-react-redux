import React, { Component} from 'react'
import {connect} from 'react-redux';
import Dropdown from '../containers/dropdown'
import Input from '../containers/input'
import Tag from '../containers/tag'


const App = (data) => {

    return (
       <div>
         <form>
           <Input id='product' placeholder='Product type' aria='producthelp'>What do you sell ?</Input>
           <Dropdown data={data.categories} active="categories"/>
           <Tag data={data.categoriesTag} active="categories"/>
           <Input id='country' placeholder='Country name' aria='countryhelp'>Where do you want to sell ?</Input>
           <Dropdown  data={data.countries} active="countries"/>
           <Tag data={data.countriesTag} active="countries"/>
           <button type='submit' className='btn btn-primary'>Find marketplaces</button>
         </form>
       </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.search.country.countryList,
    categories: state.search.category.categoryList,
    countriesTag: state.tags.countries,
    categoriesTag: state.tags.categories,
})

export default connect(mapStateToProps)(App);
