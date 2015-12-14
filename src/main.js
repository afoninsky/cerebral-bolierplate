import React from 'react'
import ReactDOM from 'react-dom'
import controller from './controller'
import {Container} from 'cerebral-react'

import Home from './components/Home'
import './main.css';

window.THREE = require('three')

require('./components/ResourceSelectControl/signals')
require('./components/SphereSelectControl/signals')

require('react-tap-event-plugin')()

ReactDOM.render(<Container controller={controller}><Home/></Container>, document.querySelector('#root'));
