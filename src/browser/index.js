import React from 'react'
import { hydrate } from 'react-dom'
import App from '../App'

import '../styles/style.css'

hydrate(
  <App />,
  document.getElementById('root')
)

// if (module.hot) {
//   module.hot.accept()
// }