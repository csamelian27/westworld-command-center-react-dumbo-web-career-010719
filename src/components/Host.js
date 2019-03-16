import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

class Host extends React.Component {


  render() {
    return(
      <Card
        className={this.props.clicked}
        onClick={() => this.props.handleClickHost(this.props.host)}
        image={this.props.host.imageUrl}
        raised
      />
    )
  }
}

export default Host
// {/* NOTE: The className "host selected" renders a different style than simply "host". */}
