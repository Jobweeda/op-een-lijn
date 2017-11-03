import { PATIENT_CREATED } from '../actions/patients/create'
import { FETCHED_PATIENTS } from '../actions/patients/fetch'
import { PATIENT_UPDATED } from '../actions/patients/update'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

  case FETCHED_PATIENTS :
    return [ ...payload ]

  case PATIENT_CREATED :
    const newPatient = {...payload}
    return [newPatient].concat(state)

  case PATIENT_UPDATED :
    const newState = state.filter(patient => patient._id !== payload._id)
    newState.concat(payload)
    return newState

  default :
    return state
}

}
