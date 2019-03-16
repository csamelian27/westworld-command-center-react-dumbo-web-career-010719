import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

class HostList extends React.Component {

  render() {
    console.log(this.props.hosts);
    return(
      <Card.Group itemsPerRow={6}>
        {this.props.hosts.map(hostObj => <Host key={hostObj.id} host={hostObj} clickedHost={this.props.clickedHost} handleClickHost={this.props.handleClickHost} clicked={this.props.clickedHost === hostObj ? "host selected" : "host"} />)}
      </Card.Group>
    )
  }
}

export default HostList
