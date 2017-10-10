import React from 'react'
import PropTypes from 'prop-types'

import SearchSection from '../component/searchSection'

const SearchWidget = ({categories, countries, countriesTags, categoriesTags, onSubmit, onInputChange, onDropdownClick, onTagClick }) => {


    return (
       <div>
         <form>
            <SearchSection
              id='categories'
              placeholder='Product type'
              aria='categorieshelp'
              data={categories}
              tags={categoriesTags}
              onInputChange={onInputChange}
              onDropdownClick={onDropdownClick}
              onTagClick={onTagClick}
            >
              What do you sell ?
            </SearchSection>
            <SearchSection
              id='countries'
              placeholder='Country name'
              aria='countrieshelp'
              data={countries}
              tags={countriesTags}
              onInputChange={onInputChange}
              onDropdownClick={onDropdownClick}
              onTagClick={onTagClick}
            >
              Where do you want to sell ?
            </SearchSection>
           <button type='submit' className='btn btn-primary' onClick={(e)=>onSubmit(e, 'markets')}>Find marketplaces</button>
         </form>
       </div>
    )
};

SearchWidget.propTypes = {
    categories: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    countriesTags: PropTypes.array.isRequired,
    categoriesTags: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SearchWidget;
