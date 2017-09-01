'use strict'

const app = require('./../app')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: { // this are the datas
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_comfirmation': data.credentials.password
      }
    }
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}
const createAppoitment = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/appoitment/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
const updateAppoitment = (index, val, over) => {
  return $.ajax({
    url: app.host + '/appoitment/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': val
        },
        'over': over
      }
    }
  })
}
const getHistory = (data) => {
  return $.ajax({
    url: app.host + '/appoitments',
    method: 'GET',
    headers: {
      Authorization: 'Token token' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createAppoitment,
  updateAppoitment,
  getHistory
}
