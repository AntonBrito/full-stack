'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const app = require('../app.js')
const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('signed up Successfully')
  // console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
  console.log('failed to signUp')
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(signUpSuccess)
    .catch(signUpFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  console.log('tryin to sign out')
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

const onCreateAppointment = function (event) {
  console.log('createAppointment Succefull')
  event.preventDefault()
  api.createAppointment()
    .then(ui.createAppointmentSuccess)
    .catch(ui.createAppointmentFailure)
}
const onGetAppointments = function (event) {
  console.log('showAppointments Succefull')
  event.preventDefault()
  api.showAppointments()
    .then(ui.showAppointmentSuccess)
    .catch(ui.showAppointmentFailure)
}

const onGetAllAppointments = function (event) {
  event.preventDefault()
  api.getAllproviders()
    .then(ui.getAllAppointmentsSuccess)
    .catch(ui.getAllAppointmentsFailure)
}

const onUpdateAppointment = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.updateGame(data, dataId)
    .then(ui.updateAppointmentSuccess)
    .catch(ui.updateAppointmentFailure)
}

const onUpdateAppointmentSaveId = function (event) {
  const dataId = this.getAttribute('data-id')
  console.log('onUpdateAppointmentSaveId = ' + dataId)
  event.preventDefault()
  $('#update_Appointment_form').attr({
    'data-id': dataId
  })
}

const onGetHistory = function (event) {
  event.preventDefault()
  api.getHistory()
    .then(ui.getHistorySuccess)
    .catch(ui.getHistoryFailure)
}

const onCreateProvider = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createprovider(data)
    .then(ui.createProviderSuccess)
    .catch(ui.createProviderFailure)
}

const onUpdateProvider = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  console.log('onUpdateProvider dataId = ' + dataId)
  event.preventDefault()
  api.updateProvider(data, dataId)
    .then(ui.editProviderSuccess)
    .catch(ui.editProviderSuccessFailure)
}

const onUpdateProviderSaveId = function (event) {
  const dataId = this.getAttribute('data-id')
  console.log('onUpdateProviderSaveId = ' + dataId)
  event.preventDefault()
  $('#update_provider_form').attr({
    'data-id': dataId
  })
}

const onDeleteProvider = function (event) {
  const data = this.getAttribute('data')
  event.preventDefault()
  api.deleteProvider(data)
    .then(ui.deleteProviderSuccess)
    .catch(ui.deleteProviderFailure)
}

const onGetProvider = function (event) {
  console.log(app.user)
  event.preventDefault()
  api.getProvider()
    .then(ui.getProviderSuccess)
    .catch(ui.getProviderFailure)
}

const onGetAllProviders = function (event) {
  event.preventDefault()
  api.getAllProviders()
    .then(ui.getAllProvidersSuccess)
    .catch(ui.getAllProvidersFailure)
}

const onCreateEvent = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onGetEvent = function (event) {
  console.log(app.user)
  event.preventDefault()
  api.getProvider()
    .then(ui.getEventSuccess)
    .catch(ui.getEventFailure)
}

const onDeleteEvent = function (event) {
  const data = this.getAttribute('data')
  event.preventDefault()
  api.deleteEvent(data)
    .then(ui.deleteEventSuccess)
    .catch(ui.deleteEventFailure)
}

$('#makeAppointment').on('submit', onCreateAppointment)
$('#sign-up').on('submit', onSignUp)
$('#sign-in').on('submit', onSignIn)
$('#sign-out').on('submit', onSignOut)
$('#change-password').on('submit', onChangePassword)

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreateAppointment,
  onGetAppointments,
  onGetAllAppointments,
  onUpdateAppointment,
  onUpdateAppointmentSaveId,
  onGetHistory,
  onCreateProvider,
  onGetProvider,
  onUpdateProvider,
  onGetAllProviders,
  onDeleteProvider,
  onCreateEvent,
  onGetEvent,
  onDeleteEvent,
  onUpdateProviderSaveId
}
