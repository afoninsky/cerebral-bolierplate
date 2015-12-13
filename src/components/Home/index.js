import React from 'react';
import HeaderToolbar from '../HeaderToolbar';
import Scene from '../Scene';

const MyRawTheme = require('../../theme.js');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const themeDecorator = require('material-ui/lib/styles/theme-decorator');

@themeDecorator(ThemeManager.getMuiTheme(MyRawTheme))

class App extends React.Component {

  render() {
		return (
      <div>
			     <HeaderToolbar />
           <Scene />
      </div>
    )
  }
}

export default App;
