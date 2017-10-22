'use strict'
const app = require('./../app.js')
const config = require('./../config.js')
const getFormFields = require('../../../lib/get-form-fields.js')
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
    url: config.apiOrigin + '/appoitments/',
    method: 'POST',
    data: {
      'appoitment': {
        'date': data.date,
        'user_id': data.user_id
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
const updateAppoitment = (index, val, over) => {
  return $.ajax({
    url: app.host + '/appoitment/' + app.appoitment.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'appoitment': {
        'id': {
          'index': index,
          'value': val
        },
        'over': over
      }
    }
  })
}

const showAppointments = function (data) {
  console.log('Here is the appoitment' + app.user)
  return $.ajax({
    url: config.apiOrigin + '/appointments/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
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

const createApp = function () {
  console.log('The data is ' + app.user.providers)
  return $.ajax({
    url: app.host + '/meetings/',
    method: 'POST',
    data: { // this are the datas
      'meeting': {
        'name': '2012-10-23',
        'user_id': app.user.id,
        'provider_id': 1
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getFormFields,
  createAppoitment,
  updateAppoitment,
  getHistory,
  showAppointments,
  createApp
}
