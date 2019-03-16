import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

class HostList extends React.Component {

  render() {
    let decommissionedHosts = this.props.hosts.filter(host => !host.active).map(hostObj => <Host key={hostObj.id} host={hostObj} handleClick={this.props.handleClick} />)

    console.log(decommissionedHosts);

    return(
      <Card.Group itemsPerRow={6}>
        {decommissionedHosts}
      </Card.Group>
    )
  }
}

export default HostList
