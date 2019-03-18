import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

class LogPanel extends React.Component {

  state = {
    activated: false
  }

  handleToggle = () => {
    this.setState({
      activated: !this.state.activated
    })
    this.props.handleClickActivateAll(!this.state.activated)
  }

  render() {
    let messages = this.props.logs.map((log, i) => <p key={i} className={log.split('] ')[1].split(':')[0].toLowerCase()}>{log}</p>)

    return(
      <Segment className="HQComps" id="logPanel">
        <pre>
          {messages}
        </pre>

        <Button
          fluid
          color={this.state.activated === true ? "green" : "red"}
          onClick={this.handleToggle}
          content={this.state.activated === true ? "DECOMMISSION ALL" : "ACTIVATE ALL"}
        />
      </Segment>
    )
  }
}

export default LogPanel
