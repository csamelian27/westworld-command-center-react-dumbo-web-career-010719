import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.areas.map(areaObj => <Area key={areaObj.id} area={areaObj} hosts={props.hosts} />)}
    </Segment>
  )
}

export default WestworldMap
