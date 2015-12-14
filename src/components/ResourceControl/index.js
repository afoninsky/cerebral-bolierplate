import React from 'react';

import Paper from 'material-ui/lib/paper'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'


class ResourceControl extends React.Component {

  render() {
		return (
       <Paper zDepth={4} rounded={false}
         style={{
           position: 'absolute',
           right: 0,
           top: 0,
           width: '300px',
           height: '100%',
           padding: '8px'
         }}>
         <Tabs>
           <Tab label="Settings">
             <p>Longitude:</p>
             <Slider name="longituide" defaultValue={5} step={0.1} min={0} max={10} />
             <p>Latituide:</p>
             <Slider name="latutude" defaultValue={5} step={0.1} min={0} max={10} />
             <p>Size:</p>
             <Slider name="size" defaultValue={5} step={0.1} min={0} max={10} />
             <p>Rotation:</p>
             <Slider name="rotation" defaultValue={5} step={0.1} min={0} max={10} />
             <p>Opacity:</p>
             <Slider name="opacity" defaultValue={5} step={0.1} min={0} max={10} />
           </Tab>
           <Tab label="onClick"></Tab>
           <Tab label="onHover"></Tab>
         </Tabs>
       </Paper>
    )
  }
}

					// <Slider name="rotateZ" defaultValue={5} step={0.1} min={0} max={10} />
					// <Toggle name="alwaysOnCamera" />
					// <Slider name="rotateX" defaultValue={5} step={0.1} min={0} max={10} />
					// <Slider name="rotateY" defaultValue={5} step={0.1} min={0} max={10} />

export default ResourceControl;
