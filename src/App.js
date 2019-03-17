import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'
import { Log } from './services/Log'


class App extends Component {

  state = {
    areas: [],
    hosts: [],
    clickedHost: null,
    logs: []
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
    let log = selectHost.active ? Log.warn(`Activated ${selectHost.firstName}`) : Log.notify(`Decommissioned ${selectHost.firstName}`)
    this.addLog(log)
  }

  addLog = (log) => {
    console.log(log);
    let newArr = [log.msg, ...this.state.logs]
    this.setState({
      logs: newArr
    })
  }

  handleChangeArea = (newArea, host) => {
    let newArr = [...this.state.hosts]
    let selectHost = newArr.find(hostObj => hostObj.id === host.id)
    let areaObj = this.state.areas.find(area => area.name === newArea)
    let numHostsInArea = newArr.filter(host => host.area === newArea).length
    {numHostsInArea < areaObj.limit ? selectHost.area = newArea : null}
    let log = numHostsInArea < areaObj.limit ? Log.notify(`${host.firstName} set in area ${newArea}`) : Log.error(`Too many hosts. Cannot add ${host.firstName} to ${newArea}`)
    this.addLog(log)
    this.setState({
      hosts: newArr
    })
  }

  handleClickActivateAll = (activeState) => {
    let newArr = [...this.state.hosts]
    let newNewArr = newArr.map(host => host.active = activeState)
    this.setState({
      hosts: newArr
    })
    let log = activeState ? Log.warn(`Activating all hosts!`) : Log.notify(`Decommissioning all hosts.`)
    this.addLog(log)
  }

  render(){
    const decommissionedHosts = this.state.hosts.filter(host => !host.active)

    const activeHosts = this.state.hosts.filter(host => host.active)

    console.log(this.state);
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={activeHosts} clickedHost={this.state.clickedHost} handleClickHost={this.handleClickHost} />
        <Headquarters areas={this.state.areas} allHosts={this.state.hosts} decHosts={decommissionedHosts} handleClickHost={this.handleClickHost} clickedHost={this.state.clickedHost} handleActiveToggle={this.handleActiveToggle}
        handleChangeArea={this.handleChangeArea} handleClickActivateAll={this.handleClickActivateAll} addLog={this.addLog} logs={this.state.logs} />
      </Segment>
    )
  }
}

export default App;
