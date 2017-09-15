import React from 'react'
import SearchSection from '../containers/searchSection'

const App = ({categories, countries, countriesTags, categoriesTags}) => {

    return (
       <div>
         <form>
            <SearchSection
              id='categories'
              placeholder='Product type'
              aria='categorieshelp'
              data={categories}
              tags={categoriesTags}
            >
              What do you sell ?
            </SearchSection>
            <SearchSection
              id='countries'
              placeholder='Country name'
              aria='countrieshelp'
              data={countries}
              tags={countriesTags}
            >
              Where do you want to sell ?
            </SearchSection>
           <button type='submit' className='btn btn-primary'>Find marketplaces</button>
         </form>
       </div>
    )
};

export default App;
