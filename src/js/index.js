import "babel-polyfill";
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route }  from 'react-router'
import {  ConnectedRouter, push } from 'react-router-redux'
import App from './containers/app'
import Markets from './component/markets'

import {store, history} from './store'

render (
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <div className='container'>
              <div class="mt-3">
                  <Route exact={true} path="/" component={App}/>
                  <Route path="/markets" component={Markets}/>
              </div>
          </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
