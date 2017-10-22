'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const app = require('../app.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.success)
    .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
}

const onCreateAppoitment = function (event) {
  console.log('createAppoitment Succefull')
  event.preventDefault()
  api.createAppoitment()
    .then(ui.createAppoitmentSuccess)
    .catch(ui.createAppoitmentFailure)
}
const onShowAppointments = function (event) {
  console.log('showAppointments Succefull')
  event.preventDefault()
  api.showAppointments()
    .then(ui.showAppointmentsSuccess)
    .catch(ui.showAppointmentsFailure)
}

const onUpdateAppoitment = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.updateGame(data, dataId)
    .then(ui.updateAppoitmentSuccess)
    .catch(ui.updateAppoitmentFailure)
}
const onGetHistory = function (event) {
  event.preventDefault()
  api.getHistory()
    .then(ui.getHistorySuccess)
    .catch(ui.getHistoryFailure)
}
// const onGetappoitments = function (event) {
//   event.preventDefault()
//
//   booksApi.index()
//     .then(appoitmentsUi.onSuccess)
//     .catch(appoitmentsUi.onError)
// }

//   if (appoitment.id.length !== 0) {
//     appoitmentApi.show(appoitment.id)
//       .then(appoitmentUi.onSuccess)
//       .catch(appoitmentUi.onError)
//   } else {
//     console.log('Please provide a appoitment id!')
//   }
// }
$('#makeappoitment').on('submit', onCreateAppoitment)
$('#sign-up').on('submit', onSignUp)
$('#sign-in').on('submit', onSignIn)
$('#sign-out').on('submit', onSignOut)
$('#change-password').on('submit', onChangePassword)

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreateAppoitment,
  onShowAppointments,
  onUpdateAppoitment,
  onGetHistory
}
