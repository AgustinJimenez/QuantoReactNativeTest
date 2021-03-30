import { all } from 'redux-saga/effects'
import usersScreenSaga from './usersScreenSaga'
import usersDetailsScreenSaga from './usersDetailsScreenSaga'

export default function* rootSaga() {
  yield all([usersScreenSaga(), usersDetailsScreenSaga()])
}
