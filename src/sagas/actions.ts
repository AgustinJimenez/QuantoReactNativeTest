import { USERS_SCREEN_SAGA, USERS_DETAILS_SCREEN_SAGA } from './constants'

export const usersScreenSagaAction = ({ page = 1, per_page = 6 }: any = {}) => ({
  type: USERS_SCREEN_SAGA,
  page,
  per_page,
})
export const usersDetailsScreenSagaAction = ({ id }: any = {}) => ({
  type: USERS_DETAILS_SCREEN_SAGA,
  id,
})
