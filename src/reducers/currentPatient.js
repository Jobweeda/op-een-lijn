import { GET_PATIENT } from '../actions/patients/get'

export default (state = null, { type, payload } = {}) => {

switch (type){
  case GET_PATIENT :
    return payload

  default :
    return state
  }
}
