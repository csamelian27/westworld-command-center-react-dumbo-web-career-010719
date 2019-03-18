import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return(
    <Card
      className={props.clicked}
      onClick={() => props.handleClickHost(props.host)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
// {/* NOTE: The className "host selected" renders a different style than simply "host". */}
