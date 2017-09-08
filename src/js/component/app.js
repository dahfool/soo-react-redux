import React, { Component} from 'react'
import {connect} from 'react-redux';
import Dropdown from '../containers/dropdown'
import Input from '../containers/input'


const App = (data) => {

    return (
       <div>
         <form>
           <Input id='product' placeholder='Product type' aria='producthelp'>What do you sell ?</Input>
           <Dropdown data={data.categories}/>
           <Input id='country' placeholder='Country name' aria='countryhelp'>Where do you want to sell ?</Input>
           <Dropdown  data={data.countries}/>
           <button type='submit' className='btn btn-primary'>Find marketplaces</button>
         </form>
       </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.search.country.countryList,
    categories: state.search.category.categoryList
})

export default connect(mapStateToProps)(App);
