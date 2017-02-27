import React, { Component } from 'react'
import {
  adjust,
  assoc,
  findIndex,
  map,
  propEq,
} from 'ramda'
import rooms from './RoomCardList.json'
import RoomCard from '../RoomCard'
import styles from './RoomCardList.css'

class RoomCardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: map(assoc('expanded', false), rooms),
    }
  }
  handleExpandChange(id) {
    return (expanded) => {
      const index = findIndex(propEq('id', id), this.state.rooms)
      this.setState({ rooms: adjust(assoc('expanded', expanded), index, this.state.rooms) })
    }
  }
  handleSetOccupied(id) {
    return (event, occupied) => {
      console.log('this,id, occupied', this, id, occupied)
    }
  }


  renderRooms() {
    return this.state.rooms.map((room) => (
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

export default RoomCardList
