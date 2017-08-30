'use strict'
// remove signIn and signOut
const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('sign in succes!')
  $('.Yogaclasses').show()
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('sign out success!')
  $('#newappoitment').addClass('hide')
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
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
  console.log('Succeded')
}
const createAppoitmentFailure = (error) => {
  console.log(error)
  console.log('Failed')
}
const getHistorySuccess = (data) => {
  $('.oldGames').html('You have played gsmes before user ' + app.user.id)
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
