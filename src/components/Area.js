import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

class Area extends React.Component {

  render(){
    console.log(this.props);

    let cleanedName = this.props.area.name.replace("_", " ").toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    let currentHosts = this.props.hosts.filter(host => host.area === this.props.area.name)

    console.log(currentHosts);

    return(
      <div className='area' id={this.props.area.name}>
        <h3 className='labels'>{cleanedName}</h3>
        <HostList hosts={currentHosts} handleClickHost={this.props.handleClickHost} clickedHost={this.props.clickedHost} />
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
