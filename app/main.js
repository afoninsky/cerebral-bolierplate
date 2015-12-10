import React from 'react';
import ReactDOM from 'react-dom';
import controller from './controller';
import {Container} from 'cerebral-react';

import Home from './modules/Home';
import _Home from './modules/_Home';

require('./modules/ObjectMenu/signals')
require('./modules/_Home/signals')

require('react-tap-event-plugin')()

ReactDOM.render(<Container controller={controller}><Home/></Container>, document.querySelector('#root'));
