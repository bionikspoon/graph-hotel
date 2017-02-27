import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import RoomCard from '../components/RoomCard'

export default () => {
  storiesOf('RoomCard', module)
    .add('occupied', () => (
      <RoomCard
        name="101" floor={1}
        beds={1}
        pets
        smoking
        occupied
        expanded
        onSetOccupied={action('setOccupied')}
        onExpandChange={action('expandChange')}
      />
    ))
    .add('vacant', () => (
      <RoomCard
        name="101"
        floor={1}
        beds={1}
        pets
        smoking
        occupied={false}
        expanded
        onSetOccupied={action('setOccupied')}
        onExpandChange={action('expandChange')}
      />
    ))
    .add('newDetails', () => (
      <RoomCard
        name="201"
        floor={2}
        beds={2}
        pets={false}
        smoking={false}
        occupied={false}
        expanded
        onSetOccupied={action('setOccupied')}
        onExpandChange={action('expandChange')}
      />
    ))
    .add('collapsed', () => (
      <RoomCard
        name="101"
        floor={1}
        beds={1}
        pets
        smoking
        occupied={false}
        expanded={false}
        onSetOccupied={action('setOccupied')}
        onExpandChange={action('expandChange')}
      />
    ))
}
