import { handleActions } from 'redux-actions'
import {
   __,
   merge,
} from 'ramda'
import adjustId from '../utils/adjustId'

const initialState = {
  rooms: [],
}

export default handleActions({
  'set rooms': (state, { payload: { rooms } }) => ({
    ...state,
    rooms,
  }),
  'expand card': (state, { payload: { id, expanded } }) => ({
    ...state,
    rooms: adjustId(id, merge(__, { expanded }), state.rooms),
  }),
  'set occupied': (state, { payload: { id, occupied } }) => ({
    ...state,
    rooms: adjustId(id, merge(__, { occupied }), state.rooms),
  }),
}, initialState)
