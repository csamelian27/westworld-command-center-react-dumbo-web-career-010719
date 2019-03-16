import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

class Host extends React.Component {

  render() {
    return(
      <Card
        className="host selected"
        onClick={() => this.props.handleClick(this.props.host)}
        image={this.props.host.imageUrl}
        raised
      />
    )
  }
}

export default Host
      // onClick={ /* On Click what? */}
// {/* NOTE: The className "host selected" renders a different style than simply "host". */}
