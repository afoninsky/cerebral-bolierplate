import React from 'react';
import HeaderToolbar from '../HeaderToolbar';
import Scene from '../Scene';
import ResourceControl from '../ResourceControl';

import MyRawTheme from '../../theme.js'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import themeDecorator from 'material-ui/lib/styles/theme-decorator'


@themeDecorator(ThemeManager.getMuiTheme(MyRawTheme))

class App extends React.Component {

  render() {
		return (
      <div>
			     <HeaderToolbar />
           <Scene />
           <ResourceControl />
      </div>
    )
  }
}

export default App;
