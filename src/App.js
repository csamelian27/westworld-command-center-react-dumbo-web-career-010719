import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

  state = {
    areas: [],
    hosts: [],
    clickedHost: null
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/areas')
      .then(resp => resp.json())
      .then(areas => this.setState({areas}))
    fetch('http://localhost:4000/hosts')
      .then(resp => resp.json())
      .then(hosts => this.setState({hosts}))
  }

  handleClickHost = (hostObj) => {
    let newArr = [...this.state.hosts]
    let selectedHost = newArr.find(host => host.id === hostObj.id)
    this.setState({
      clickedHost: selectedHost
    })
  }

  handleActiveToggle = (host) => {
    let newArr = [...this.state.hosts]
    let selectHost = newArr.find(hostObj => hostObj.id === host.id)
    selectHost.active = !selectHost.active
    this.setState({
      hosts: newArr
    })
  }

  handleChangeArea = (newArea, host) => {
    let newArr = [...this.state.hosts]
    let selectHost = newArr.find(hostObj => hostObj.id === host.id)
    let numHostsInArea = newArr.filter(host => host.area === newArea).length
    numHostsInArea > 6 ? null : selectHost.area = newArea
    this.setState({
      hosts: newArr
    })
  }

  render(){
    const decommissionedHosts = this.state.hosts.filter(host => !host.active)

    const activeHosts = this.state.hosts.filter(host => host.active)

    console.log(this.state);
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={activeHosts} clickedHost={this.state.clickedHost} handleClickHost={this.handleClickHost} />
        <Headquarters areas={this.state.areas} hosts={decommissionedHosts} handleClickHost={this.handleClickHost} clickedHost={this.state.clickedHost} handleActiveToggle={this.handleActiveToggle}
        handleChangeArea={this.handleChangeArea} />
      </Segment>
    )
  }
}

export default App;
