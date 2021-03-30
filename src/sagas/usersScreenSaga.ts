import { call, put } from 'redux-saga/effects'
import { USERS_SCREEN_SAGA } from './constants'
import { takeLatest } from 'redux-saga/effects'
import { setDatasetListToReducer, setDatasetToReducer, setMultipleDatasetsToReducer } from '../redux/actions'
import { usersRoute } from '../api/routes'
import request from './utils/request'

export function* saga({ page, per_page }: any = {}) {
  yield put(setDatasetToReducer(true, 'users_screen_is_loading'))

  var { error, data } = yield call(request, {
    url: usersRoute,
    show_message: true,
    params: {
      page,
      per_page,
    },
  })
  let users = []
  if (!error) users = data?.['data']

  yield put(setMultipleDatasetsToReducer([setDatasetToReducer(false, 'users_screen_is_loading'), setDatasetListToReducer(users, 'users')]))
}

export default function* () {
  yield takeLatest(USERS_SCREEN_SAGA, saga)
}
