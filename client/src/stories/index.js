import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import RoomCard from '../components/RoomCard'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('RoomCard', module)
  .add('with no text', () =>(
    <RoomCard onClick={action('clicked')} />
  ))
  .add('with text', () =>(
    <RoomCard text='I like Turtles.' />
  ))
