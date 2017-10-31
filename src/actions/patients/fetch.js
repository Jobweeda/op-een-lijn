import API from '../../api'

export const FETCHED_PATIENTS = 'FETCHED_PATIENTS'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('patients')

    backend.find({
      query: {
        $limit: 50,
        $sort: {
          createdAt: -1
        }
      }
    })
      .then((result) => {
        console.log(result)
        dispatch({
          type: FETCHED_PATIENTS,
          payload: result.data
        });
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
