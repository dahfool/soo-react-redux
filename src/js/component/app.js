import React, { Component} from 'react'
import {connect} from 'react-redux';
import Dropdown from '../containers/dropdown'
import Input from '../containers/input'



@connect((store) => {
    return {
      countries: store.search.country.countryList,
      categories: store.search.category.categoryList,
    }
})
export default class App extends Component {
  render () {
    return (
      <div>
        <form>
          <Input id='product' placeholder='Product type' aria='producthelp'>What do you sell ?</Input>
          <Dropdown data={this.props.categories}/>
          <Input id='country' placeholder='Country name' aria='countryhelp'>Where do you want to sell ?</Input>
          <Dropdown  data={this.props.countries}/>
          <button type='submit' className='btn btn-primary'>Find marketplaces</button>
        </form>
      </div>
    )
  }
}
