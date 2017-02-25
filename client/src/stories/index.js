import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import Button from './Button';
import RoomCard from '../components/RoomCard';
import ThemeProvider from '../containers/ThemeProvider';
import init from '../init';

addDecorator(story => (
  <ThemeProvider>{story()}</ThemeProvider>
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('RoomCard', module)
  .add('with no text', () => (
    <RoomCard onClick={action('clicked')} />
  ))
  .add('with text', () => (
    <RoomCard text="I like Turtles." />
  ));

init();
