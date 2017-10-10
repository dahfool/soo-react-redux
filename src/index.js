import "babel-polyfill";
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {  ConnectedRouter } from 'react-router-redux'
import App from './component/app'

import {store, history} from './store'

render (
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <div className='container'>
              <div className="mt-3">
                    <App />
              </div>
          </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
