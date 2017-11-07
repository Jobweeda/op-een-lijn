import API from '../../api';

export const FETCHED_APPOINTMENTS = 'FETCHED_APPOINTMENTS'

const api = new API()

export default () => {

  return (dispatch) => {

    const backend = api.service('appointments')

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
        type: FETCHED_APPOINTMENTS,
        payload: result.data
      });
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
