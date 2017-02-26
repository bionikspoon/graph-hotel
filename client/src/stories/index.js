import React from 'react'
import { storiesOf, action, addDecorator } from '@kadira/storybook'
import RoomCard from '../components/RoomCard'
import ThemeProvider from '../containers/ThemeProvider'
import init from '../init'

addDecorator((story) => (
  <ThemeProvider>{story()}</ThemeProvider>
))

storiesOf('RoomCard', module)
  .add('occupied', () => (
    <RoomCard
      name="101" floor={1}
      beds={1}
      pets
      smoking
      occupied
      expanded
      onToggleOccupied={action('toggleOccupied')}
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
      onToggleOccupied={action('toggleOccupied')}
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
      onToggleOccupied={action('toggleOccupied')}
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
      occupied
      expanded={false}
      onToggleOccupied={action('toggleOccupied')}
      onExpandChange={action('expandChange')}
    />
  ))


init()
