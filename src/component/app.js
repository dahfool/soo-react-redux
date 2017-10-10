import React from 'react'
import { Route }  from 'react-router'
import Markets from '../containers/markets'
import SearchWidget from '../containers/searchWidget'

const App = () => (
        <main>
            <Route exact={true} path="/" component={SearchWidget}/>
            <Route path="/markets" component={Markets}/>
        </main>
);

export default App;
