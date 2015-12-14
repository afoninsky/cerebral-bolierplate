import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import Title from './components/Title';

@Cerebral({
  title: ['title'],
  color: ['color']
})

class App extends React.Component {

	test() {
		console.log(this.props.color)
		// console.log(this.props.signals.colorChanged)
	}
  render() {
    return (
      <div>{this.test()}
        <Title color={this.props.color}>{this.props.title}</Title>
        <button onClick={() => this.props.signals.colorChanged({color: 'red'})}>Red</button>
        {' | '}
        <button onClick={() => this.props.signals.colorChanged({color: 'blue'})}>Blue</button>
      </div>
    );
  }
}

export default App;
