import React from 'react'
import { storiesOf, action, addDecorator } from '@kadira/storybook'
import ThemeProvider from '../containers/ThemeProvider'
import init from '../init'
import roomCardStories from './roomCardStories'
import roomCardListStories from './roomCardListStories'

init()

addDecorator((story) => (
  <ThemeProvider>{story()}</ThemeProvider>
))

roomCardStories()
roomCardListStories()
