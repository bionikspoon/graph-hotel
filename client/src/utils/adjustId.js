import {
  adjust,
  curry,
  findIndex,
  propEq,
} from 'ramda'

export default curry((id, fn, collection) => {
  const index = findIndex(propEq('id', id), collection)
  return adjust(fn, index, collection)
})
