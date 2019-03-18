import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(hostObj => <Host key={hostObj.id} host={hostObj} clickedHost={props.clickedHost} handleClickHost={props.handleClickHost} clicked={props.clickedHost === hostObj ? "host selected" : "host"} />)}
    </Card.Group>
  )
}

export default HostList
