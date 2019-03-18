import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  handleChange = (e, {value}) => {
    this.props.handleChangeArea(value, this.props.host)
    this.props.areas.find(area => area.name === value)
  }

  toggle = () => {
    console.log("The radio button fired");
    this.props.handleActiveToggle(this.props.host)
  }

  render(){
    let optionsArr = this.props.areas.map(areaObj => {return {key: areaObj.name, text: this.props.cleanName(areaObj.name), value: areaObj.name}})

    let currentArea = optionsArr.find(area => area.key === this.props.host.area)

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName} | { this.props.host.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.host.active ? "Active" : "Decommissioned"}
                  checked={this.props.host.active ? true : false}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={currentArea.value}
                options={optionsArr}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
