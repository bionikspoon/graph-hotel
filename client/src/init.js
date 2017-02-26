import injectTapEventPlugin from 'react-tap-event-plugin'
import WebFont from 'webfontloader'

export default () => {
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin()

  WebFont.load({
    google: {
      families: ['Roboto'],
    },
  })
}
