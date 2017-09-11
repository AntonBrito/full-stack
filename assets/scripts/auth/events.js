'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

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

const onCreateAppoitments = function (event) {
  console.log('createAppoitment Succefull')
  event.preventDefault()
  api.createAppoitment()
    .then(ui.createAppoitmentSuccess)
    .catch(ui.createAppoitmentFailure)
}

const onUpdateAppoitment = function (index, val, over) {
  api.updateGame(index, val, over)
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
$('#makeappoitment').on('submit', onCreateAppoitments)
$('#sign-up').on('submit', onSignUp)
$('#sign-in').on('submit', onSignIn)
$('#sign-out').on('submit', onSignOut)
$('#change-password').on('submit', onChangePassword)

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreateAppoitments,
  onUpdateAppoitment,
  onGetHistory
}
