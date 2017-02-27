import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import rooms from './roomCardStories'
import RoomCardList from '../components/RoomCardList'


export default () => {
  storiesOf('RoomCardList', module)
    .add('default', () => (
      <RoomCardList />
    ))
}
