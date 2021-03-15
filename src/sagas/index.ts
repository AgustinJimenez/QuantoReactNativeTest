import { all } from 'redux-saga/effects'
import changeLanguageSagas from './changeLanguageSagas'
import loginSagas from './loginSagas'
import updateNetworkStatusSagas from './updateNetworkStatusSagas'
import checkNetworkStatusSaga from './checkNetworkStatusSaga'
import logoutSaga from './logoutSaga'
import callbackVoidSaga from './callbackVoidSaga'
import registerSaga from './registerSaga'
import homeSaga from './homeSaga'
import requestBudgetSaga from './requestBudgetSaga'
import usersScreenSaga from './usersScreenSaga'
import usersDetailsScreenSaga from './usersDetailsScreenSaga'

export default function* rootSaga() {
  yield all([
    logoutSaga(),
    checkNetworkStatusSaga(),
    updateNetworkStatusSagas(),
    loginSagas(),
    changeLanguageSagas(),
    callbackVoidSaga(),
    registerSaga(),
    homeSaga(),
    requestBudgetSaga(),
    usersScreenSaga(),
    usersDetailsScreenSaga(),
  ])
}
