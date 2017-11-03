import React, { PureComponent } from 'react';
import './HomePage.css'
import { Link } from 'react-router'

class HomePage extends PureComponent {

// renderMonthButton(date, index){
//   return(
//     <div key={index} className="artist col-md-4 col-sm-6">
//     <div className='patient-fullname'>
//     <button className="btn-patient"><Link to={`/dates/${date._id}`} className="link">{date.month}</Link></button>
//     </div>
//     </div>
//     {dates.map(this.renderMonthButton.bind(this))} <--- THIS SHOULD GO INSIDE RETURN ONCE READY
//   )
// }

  render() {
    // const dates = this.props.dates
    //  if(!dates) return null
    return(
      <div className='home-page'>
        <div className='row'>
        <h1 className='homepage-title'> COPD schema Op één Lijn </h1>
        <button className='btn-back'><Link to={`/create-patient`}>Voeg een patient toe!</Link></button>
        <button className='btn-back'><Link to={`/patients`}>Toon alle patienten</Link></button>
        </div>

      </div>
    )
  }
}

export default HomePage
