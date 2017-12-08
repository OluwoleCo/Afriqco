import { combineReducers } from 'redux';

import { items, hasErrored, isLoading} from './companyReducer'

export default combineReducers({
  items,
  hasErrored,
  isLoading
})