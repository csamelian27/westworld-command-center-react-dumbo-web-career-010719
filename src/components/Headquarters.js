import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

const Headquarters = (props) => {
  return(
    <Grid celled='internally'>
      <Grid.Column width={8}>
        <ColdStorage hosts={props.decHosts} handleClickHost={props.handleClickHost} clickedHost={props.clickedHost} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details
        areas={props.areas} hosts={props.decHosts} clickedHost={props.clickedHost} handleActiveToggle={props.handleActiveToggle} handleChangeArea={props.handleChangeArea} cleanName={props.cleanName} />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel handleClickActivateAll={props.handleClickActivateAll} logs={props.logs} />
      </Grid.Column>
    </Grid>
  )
}

export default Headquarters;
