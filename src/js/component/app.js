import React from 'react'
import PropTypes from 'prop-types'

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

App.propTypes = {
    categories: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    countriesTags: PropTypes.array.isRequired,
    categoriesTags: PropTypes.array.isRequired
};

export default App;
