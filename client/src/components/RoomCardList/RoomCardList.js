import React, { Component, PropTypes } from 'react'
import {
  applySpec,
  path,
} from 'ramda'
import { connect } from 'react-redux'
import rooms from './RoomCardList.json'
import RoomCard from '../RoomCard'
import styles from './RoomCardList.css'
import * as RoomActions from '../../actions/rooms'

export class RoomCardList extends Component {

  componentDidMount() {
    this.props.setRooms({ rooms })
  }
  handleExpandChange(id) {
    return (expanded) => {
      this.props.expandCard({ id, expanded })
    }
  }
  handleSetOccupied(id) {
    return (event, occupied) => {
      this.props.setOccupied({ id, occupied })
    }
  }


  renderRooms() {
    return this.props.rooms.map((room) => (
      <RoomCard
        className={styles.card}
        key={room.id}
        onExpandChange={this.handleExpandChange(room.id)}
        onSetOccupied={this.handleSetOccupied(room.id)}
        {...room}
      />
    ))
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderRooms()}
      </div>
    )
  }
}
RoomCardList.propTypes = {
  expandCard: PropTypes.func.isRequired,
  setOccupied: PropTypes.func.isRequired,
  setRooms: PropTypes.func.isRequired,
  rooms: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  ).isRequired,
}
const mapStateToProps = applySpec({
  rooms: path(['rooms', 'rooms']),
})
const mapDispatchToProps = {
  ...RoomActions,
}
export default connect(mapStateToProps, mapDispatchToProps)(RoomCardList)
