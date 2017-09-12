'use strict'
// remove signIn and signOut
const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('sign in succes!')
  $('.schedule').show()
  $('.newappoitment').show()
  if (app.user.provider === true) {
    console.log('this is a provider')
  }
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('sign out success!')
  $('#newappoitment').addClass('hide')
  $('.Yogaclasses').hide()
  $('.schedule').hide()
}

const changePasswordSuccess = (data) => {
  console.log('Password Successfully Changed.')
}
const changePasswordFailure = (error) => {
  console.log(error)
}

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
  console.log('something is wrong with!')
}
const createAppoitmentSuccess = (data) => {
  app.appoitment = data.appoitment
  app.appoitment.id = data.appoitment.id
  console.log(data)
  console.log('Succeded')
}
const createAppoitmentFailure = (error) => {
  console.log(error)
  console.log('Failed')
}
const getHistorySuccess = (data) => {
  $('.oldAppoitments').html('You have made appoitments before user ' + app.user.id)
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
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  createAppoitmentSuccess,
  createAppoitmentFailure,
  getHistorySuccess,
  getHistoryFailure
}
