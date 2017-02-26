import React, { PropTypes } from 'react'
import { green500, red500 } from 'material-ui/styles/colors'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import FontIcon from 'material-ui/FontIcon'
import Toggle from 'material-ui/Toggle'
import cx from 'classnames'
import debounce from 'lodash/fp/debounce'
import styles from './RoomCard.css'
import ordinalSuffix from '../../utils/ordinalSuffix'

const headerClass = (props) => cx(
  styles.header,
  props.occupied ? styles.occupied : styles.vacant,
)

const HeaderTitle = (props) => (
  <span className={headerClass(props)}>Room: {props.name}</span>
)
HeaderTitle.propTypes = {
  name: PropTypes.node.isRequired,
}

const SmokingDetails = (props) => {
  const icon = props.smoking
    ? <FontIcon className="material-icons">smoking_rooms</FontIcon>
    : <FontIcon className="material-icons">smoking_rooms</FontIcon>
  const text = props.smoking
    ? 'Non Smoking'
    : 'Smoking'
  return <div>{icon} {text}</div>
}
SmokingDetails.propTypes = {
  smoking: PropTypes.bool.isRequired,
}

const FloorDetails = (props) => (
  <div>
    <FontIcon className="material-icons">business</FontIcon>
    {` ${ordinalSuffix(props.floor)} Floor`}
  </div>
)
FloorDetails.propTypes = {
  floor: PropTypes.number.isRequired,
}

const PetsDetails = (props) => (
  <div>
    <FontIcon
      className="material-icons"
      style={{ color: props.pets ? green500 : red500 }}
    >pets</FontIcon>
    {props.pets ? ' Pets Allowed' : ' No Pets'}
  </div>
)
PetsDetails.propTypes = {
  pets: PropTypes.bool.isRequired,
}

const BedsDetails = (props) => (
  <div>
    <FontIcon className="material-icons">snooze</FontIcon>
    {` ${props.beds} Bed${props.beds === 1 ? '' : 's'}`}
  </div>
)
BedsDetails.propTypes = {
  beds: PropTypes.number.isRequired,
}

const RoomCard = (props) => (
  <Card expanded={props.expanded} onExpandChange={debounce(0, props.onExpandChange)}>
    <CardHeader actAsExpander showExpandableButton title={<HeaderTitle name={props.name} />} />
    <CardText>
      <Toggle
        toggled={props.occupied}
        onToggle={props.onToggleOccupied}
        labelPosition="right"
        label="Occupied"
      />
    </CardText>
    <CardText expandable style={{ fontSize: '2rem', lineHeight: '3rem' }}>
      <SmokingDetails smoking={props.smoking} />
      <FloorDetails floor={props.floor} />
      <PetsDetails pets={props.pets} />
      <BedsDetails beds={props.beds} />
    </CardText>
  </Card>
)
RoomCard.propTypes = {
  beds: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  floor: PropTypes.number.isRequired,
  name: PropTypes.node.isRequired,
  occupied: PropTypes.bool.isRequired,
  onExpandChange: PropTypes.func.isRequired,
  onToggleOccupied: PropTypes.func.isRequired,
  pets: PropTypes.bool.isRequired,
  smoking: PropTypes.bool.isRequired,
}
export default RoomCard
