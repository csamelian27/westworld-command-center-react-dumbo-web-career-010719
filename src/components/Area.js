import React from 'react';
import '../stylesheets/Area.css'
import Host from './Host'

class Area extends React.Component {

  render(){
    let activeHosts = this.props.hosts.filter(host => host.active)

    let hostCards = activeHosts.map(hostObj => <Host key={hostObj.id} host={hostObj} />)

    console.log(activeHosts);

    let cleanedName = this.props.area.name.replace("_", " ").toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return(
      <div className='area' id={this.props.area.name}>
        <h3 className='labels'>{cleanedName}</h3>
        {activeHosts.length ? {hostCards} : null }
      </div>
    )
  }
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
