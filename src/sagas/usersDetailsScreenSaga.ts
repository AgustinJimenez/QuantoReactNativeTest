import { call, put } from 'redux-saga/effects'
import { USERS_DETAILS_SCREEN_SAGA } from './constants'
import { takeLatest } from 'redux-saga/effects'
import { setDatasetToReducer, setMultipleDatasetsToReducer } from '../redux/actions'
import { userDetailsRoute } from '../api/routes'
import request from './utils/request'

export function* saga({ id = 0 } = {}) {
  yield put(setDatasetToReducer(true, 'users_details_screen_is_loading'))

  var { error, data } = yield call(request, {
    url: userDetailsRoute(id),
  })
  let user = null
  if (!error) {
    user = data?.['data']
    yield put(setMultipleDatasetsToReducer([setDatasetToReducer(false, 'users_details_screen_is_loading'), setDatasetToReducer(user, 'users', { key: id })]))
  }
}

export default function* () {
  yield takeLatest(USERS_DETAILS_SCREEN_SAGA, saga)
}
