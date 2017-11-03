import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import updatePatient from '../../actions/patients/update';
import getPatient from '../../actions/patients/get';
import { Link } from 'react-router'


class EditPatient extends PureComponent {

  componentWillMount(){
    this.props.getPatient(this.props.params.patientId)
  }

  submitForm(event){
    event.preventDefault()
    const id = this.props.currentPatient._id
    const { firstName, lastName, email, phoneNumber } = this.refs
    const patientData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
    }
    this.props.updatePatient(id, patientData)
  }

  render() {
    const  {currentPatient}  = this.props
        if(!currentPatient) return null

    return(

      <div className='background'>
        <div className='wrapper patient-data'>
          <h1> Wijzig { currentPatient.firstName } { currentPatient.lastName }</h1>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className='form-group row'>
             <label className="col-2 col-form-label">Voornaam</label>
             <div className="col-10">
              <input
                className="form-control"
                type="text"
                ref="firstName"
                placeholder={currentPatient.firstName}

                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>Achternaam</label>
              <div className='col-10'>
                <input
                className='form-control'
                type='text'
                ref='lastName'
                placeholder={currentPatient.lastName}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>email</label>
              <div className='col-10'>
                <input
                className='form-control'
                type='text'
                ref='email'
                placeholder={currentPatient.email}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>Telefoon</label>
              <div className='col-10'>
                <input
                className='form-control'
                type='text'
                ref='phoneNumber'
                placeholder={currentPatient.phoneNumber}
                />
              </div>
            </div>
            <input className="btn-submit formItem" type="submit" value="Wijzig Patient" />

          </form>
          <button className="btn-back"><Link to={`/patients`}>Back to patients</Link></button>
        </div>
      </div>
    )

  }
}
const mapStateToProps = ({ currentPatient }) => ({ currentPatient })
export default connect(mapStateToProps, { getPatient, updatePatient })(EditPatient)
