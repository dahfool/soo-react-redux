import React from 'react'
import SearchSection from '../containers/searchSection'

const App = (data) => {

    return (
       <div>
         <form>
            <SearchSection
              id='categories'
              placeholder='Product type'
              aria='categorieshelp'
              data={data.state.search.category.categoryList}
              tags={data.state.tags.categories}
            >
              What do you sell ?
            </SearchSection>
            <SearchSection
              id='countries'
              placeholder='Country name'
              aria='countrieshelp'
              data={data.state.search.country.countryList}
              tags={data.state.tags.countries}
            >
              Where do you want to sell ?
            </SearchSection>
           <button type='submit' className='btn btn-primary'>Find marketplaces</button>
         </form>
       </div>
    )
};

export default App;
