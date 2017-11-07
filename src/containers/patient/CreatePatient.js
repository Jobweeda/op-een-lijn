import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import createPatient from '../../actions/patients/create';
import { Link } from 'react-router';




class CreatePatient extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }


  submitForm(event){
    event.preventDefault()

    const { firstName, lastName, email, phoneNumber } = this.refs
    const newPatient = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
    }
    this.props.createPatient(newPatient)
  }

  render() {
    return(
      <div className='background'>
        <div className='wrapper patient-data'>
          <h1> Voeg een patient toe</h1>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className='form-group row'>
             <label className="col-2 col-form-label">Voornaam</label>
             <div className="col-10">
              <input
                className="form-control"
                type="text"
                ref="firstName"
                placeholder="voornaam patient"/>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>Achternaam</label>
              <div className='col-10'>
                <input
                className='form-control'
                type='text'
                ref='lastName'
                placeholder='achternaam patient'/>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>email</label>
              <div className='col-10'>
                <input
                className='form-control'
                type='text'
                ref='email'
                placeholder='email-adres(optioneel)'/>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-2 col-form-label'>Telefoon</label>
              <div className='col-10'>
                <input
                className='form-control'
                type='text'
                ref='phoneNumber'
                placeholder='Telefoon nummer'/>
              </div>
            </div>
            <input className="btn-submit formItem" type="submit" value="Add Patient" />
          </form>
        </div>
        <button className="btn-back"><Link to={`/`}>Back to Home</Link></button>
      </div>
    )

  }

}
const mapStateToProps = ({ newPatient }) => ({ newPatient })
export default connect(mapStateToProps, { createPatient })(CreatePatient)
