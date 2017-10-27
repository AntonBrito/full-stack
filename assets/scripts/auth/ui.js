'use strict'
const app = require('../app.js')
const template = require('../handlebars-data')
// const events = require('./events.js')

const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('signed up Successfully')
  $('#update_appointment_form').hide()
  // console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
  console.log('failed to signUp')
  $('#update_appoitment_hide').hide()
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('sign in succes!')
  $('.schedule').show()
  $('.newAppointment').show()
  $('#signfo').hide()
  $('#message').html('You are Signed In!')
  $('#providers_page').hide()
  $('#appointments_page #update_appoitment').hide()
  if (app.user.provider === true) {
    console.log('this is a provider')
  }
}

const signInFailure = (error) => {
  console.log(error)
  $('#message').html('Invalid password')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('sign out success!')
  $('#newAppointment').addClass('hide')
  $('.Yogaclasses').hide()
  $('.schedule').hide()
}

const changePasswordSuccess = (data) => {
  console.log(data)
  $('#message').html('Successfully changed password!')
}

const changePasswordFailure = (error) => {
  console.log(error)
  $('#message').html('Invalid OLD password.')
}

const createAppointmentSuccess = (data) => {
  app.Appointment = data.Appointment
  app.Appointment.id = data.Appointment.id
  console.log(data)
  console.log('Succeded')
  $('textare').val('')
}
const createAppointmentFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const updateAppointmentSuccess = (data) => {
  console.log(data)
  console.log('Succeded in updateAppointmentSuccess')
  $('#ppointment-div').empty()
  template.AppointmentsHandlebars(name, lastname, email, date, providerId)
}

const getMyAppointmentsSuccess = (data) => {
  console.log('succeeded in getOneAppoitmentSuccess')
  // assign for edit or delete
  app.appoitment = data.appoitment
  console.log(app.appoitment)
  $('#appoitments-div').empty()
  const name = data.appoitment.name
  const lastname = data.appoitment.lastname.email
  const email = data.appoitment.email
  const providerId = data.appoitment.provider_id
  console.log('name + lastname + email + provider_id')
  template.appoitmentsHandlebars(name, lastname, email, providerId)
}

const getMyAppointmentsFailure = (error) => {
  console.log(error)
  console.log('Failed in getAllMyAppointmentsFailure')
}

const getAppoitmentsFailure = (error) => {
  console.log(error)
  console.log('Failed in getAllAppoitmentsFailure')
}

const getAppointmentsSuccess = (data) => {
  console.log('succeeded in getOneAppoitmentSuccess')
  // assign for edit or delete
  app.appoitment = data.appoitment
  console.log(app.appoitment)
  $('#appoitments-div').empty()
  const name = data.appoitment.name
  const lastname = data.appoitment.lastname
  const email = data.appoitment.email
  const providerId = data.appoitment.provider_id
  console.log('name + lastname + email + provider_id')
  template.appoitmentsHandlebars(name, lastname, email, providerId)
}

const updateAppointmentFailure = (error) => {
  console.log(error)
  console.log('Failed in updateAppointmentFailure')
}
const deleteAppointmentSuccess = (data) => {
  console.log(data)
  console.log('Succeded in delete Appointment Success')
  $('#Appointments-div').empty()
}

const deleteAppointmentFailure = (error) => {
  console.log(error)
  console.log('Failed in delete Appointment Failure')
}

const createProviderSuccess = (data) => {
  console.log(data)
  console.log('Succeded in create Provider Success')
  $('textarea').val('')
}

const createProviderFailure = (error) => {
  console.log(error)
  console.log('Failed in create Provider Failure')
}

const deleteProviderSuccess = (data) => {
  console.log(data)
  console.log('Succeded in delete Provider Success')
  $('#provider-div').empty()
}

const deleteProviderFailure = (error) => {
  console.log(error)
  console.log('Failed in delete Provider Failure')
}

const updateProviderSuccess = (data) => {
  console.log(data)
  console.log('Succeded in updateProviderSuccess')
  $('#provider-div').empty()
  template.providersHandlebars(given_name, family_name, email, specialty)
}

const updateProviderFailure = (error) => {
  console.log(error)
  console.log('Failed in deleteproviderFailure')
}

const getProviderSuccess = (data) => {
  console.log(data)
  console.log('Successfully retrieved all MY provider')
  $('#providers-div').empty()
  $('#empty-appointments-div').show()
  for (let i = 0; i < data.providers.length; i++) {
    const givenName = data.providers[i].given_name
    const familyName = data.providers[i].family_name
    const email = data.providers[i].email
    const specialty = data.providers[i].specialty
    template.providersHandlebars(givenName, familyName, email, specialty)
  }
}
const getProviderFailure = (error) => {
  console.log('Failed')
  $('#providers-div').html('These Are Not The providers You Are Looking For')
  console.log(error)
}

const getAllProviderSuccess = (data) => {
  console.log(data)
  console.log('Successfully retrieved all MY provider')
  $('#providers-div').empty()
  $('#empty-appointments-div').show()
  for (let i = 0; i < data.providers.length; i++) {
    const givenName = data.providers[i].given_name
    const familyName = data.providers[i].family_name
    const email = data.providers[i].email
    const specialty = data.providers[i].specialty
    template.providersHandlebars(givenName, familyName, email, specialty)
  }
}

const getAllProviderFailure = (err) => {
  console.log(err)
  console.log('Failed retieving all provider by all users')
  $('#providers-div').html('These Are Not The provider You Are Looking For')
}

const getEventSuccess = (data) => {
  console.log(data)
  console.log('Successfully retrieved all MY event')
  $('#events-div').empty()
  $('#empty-events-div').show()
  for (let i = 0; i < data.events.length; i++) {
    const name = data.pevents[i].name
    const startDate = data.events[i].start_date
    const endDate = data.events[i].end_date
    const info = data.events[i].info
    template.eventsHandlebars(name, startDate, endDate, info)
  }
}

const getEventFailure = (err) => {
  console.log(err)
  console.log('Failed retieving all provider by all users')
  $('#events-div').html('These Are Not The event You Are Looking For')
}
const createEventSuccess = (data) => {
  console.log(data)
  console.log('Succeded in create event Success')
  $('textarea').val('')
}

const createEventFailure = (error) => {
  console.log(error)
  console.log('Failed in delete event Failure')
}

const updateEventSuccess = (data) => {
  console.log(data)
  console.log('Succeded in updateEventSuccess')
  $('#event-div').empty()
  template.eventsHandlebars(name, start_date, end_date, info)
}

const updateEventFailure = (error) => {
  console.log(error)
  console.log('Failed in updateEventFailure')
}

const getHistorySuccess = (data) => {
  $('.oldAppointments').html('You have made Appointments before user ' + app.user.id)
  console.log('look here')
  console.log(data.id)
  console.log('Succeded')
}
const getHistoryFailure = (error) => {
  console.log(error)
  console.log('Failed')
}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  createAppointmentSuccess,
  createAppointmentFailure,
  getAppointmentsSuccess,
  getMyAppointmentsFailure,
  getMyAppointmentsSuccess,
  getAllProviderSuccess,
  getAppoitmentsFailure,
  getAllProviderFailure,
  // getAllAppoitmentFailure,
  // getAllAppoitmentsSuccess,
  // getEventsFailure,
  getHistorySuccess,
  getHistoryFailure,
  createProviderSuccess,
  createProviderFailure,
  createEventFailure,
  createEventSuccess,
  getProviderSuccess,
  getProviderFailure,
  getEventFailure,
  getEventSuccess,
  deleteProviderSuccess,
  deleteProviderFailure,
  deleteAppointmentSuccess,
  deleteAppointmentFailure,
  updateEventFailure,
  updateAppointmentFailure,
  updateAppointmentSuccess,
  updateProviderSuccess,
  updateProviderFailure,
  updateEventSuccess
}
