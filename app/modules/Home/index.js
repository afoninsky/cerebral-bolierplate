import React from 'react';
import HeaderToolbar from '../HeaderToolbar';
import Canvas from '../Canvas';

class App extends React.Component {

  render() {
		return (
      <div>
			     <HeaderToolbar />
           <Canvas />
      </div>
    )
  }
}

export default App;
