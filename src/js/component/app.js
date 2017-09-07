import React, { Component} from 'react'
import Input from '../containers/input'

export default class App extends Component {
  render () {
    return (
      <div>
        <form>
          <Input id='product' placeholder='Product type' aria='producthelp'>What do you sell ?</Input>
          <Input id='country' placeholder='Country name' aria='countryhelp'>Where do you want to sell ?</Input>
          <button type='submit' className='btn btn-primary'>Find marketplaces</button>
        </form>
      </div>
    )
  }
}
