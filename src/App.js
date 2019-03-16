import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

  state = {
    areas: [],
    hosts: []
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/areas')
      .then(resp => resp.json())
      .then(areas => this.setState({areas}))
    fetch('http://localhost:4000/hosts')
      .then(resp => resp.json())
      .then(hosts => this.setState({hosts}))
  }

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    console.log(this.state);
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts} />
        <Headquarters areas={this.state.areas} hosts={this.state.hosts} handleClick={this.handleClick} />
      </Segment>
    )
  }
}

export default App;
