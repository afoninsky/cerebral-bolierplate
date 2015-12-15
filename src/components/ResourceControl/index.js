import React from 'react';

import { Decorator as cerebral } from 'cerebral-react'

import Paper from 'material-ui/lib/paper'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'

@cerebral({
	selected: ['selected']
})

class ResourceControl extends React.Component {

	onPropertyChange(property, value) {
		this.props.signals.resourcePropertyChanged({
			key: property,
			value: value
		})
	}

  render() {

		if(this.props.selected.resource === null) {
      return null
    }

		const settings = this.props.selected.settings

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
             <Slider name="longituide" defaultValue={settings.longitude} step={1} min={0} max={360}
							 onChange={ (event, value) => this.onPropertyChange('longitude', value) } />
             <p>Latituide:</p>
             <Slider name="latutude" defaultValue={settings.longitude} step={1} min={-85} max={85}
							 onChange={ (event, value) => this.onPropertyChange('latitude', value) } />
						 <p>Scale:</p>
             <Slider name="scale" defaultValue={settings.scale} step={0.1} min={0.1} max={5}
							 onChange={ (event, value) => this.onPropertyChange('scale', value) } />
             <p>Opacity:</p>
             <Slider name="opacity" defaultValue={settings.opacity} step={0.1} min={0} max={1}
							 onChange={ (event, value) => this.onPropertyChange('opacity', value) } />
           </Tab>
           <Tab label="onClick"></Tab>
           <Tab label="onHover"></Tab>
         </Tabs>
       </Paper>
    )
  }
}

export default ResourceControl;
