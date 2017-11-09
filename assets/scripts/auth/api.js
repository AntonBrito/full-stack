'use strict'
const app = require('./../app.js')
const config = require('./../config.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}
const createAppointment = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/Appointments/',
    method: 'POST',
    data: {
      'Appointment': {
        'name': data.name,
        'lastname': data.lastname,
        'email': data.email,
        'date': data.date,
        'provider_id': data.provider_id
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
const updateAppointment = (data, datId) => {
  return $.ajax({
    url: config.apiOrigin + '/appointments/' + app.Appointment.id,
    method: 'PATCH',
    data: {
      'Appointment': {
        'name': data.name,
        'lastname': data.lastname,
        'email': data.email,
        'date': data.date,
        'provider_id': data.provider_id
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
//
// const getAllAppointments = function (data) {
//   console.log('Here is the Appointment' + app.user)
//   return $.ajax({
//     url: config.apiOrigin + '/appointments/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     }
//   })
// }

const getMyAppointments = function (data) {
  console.log('Here is the Appointment' + app.user)
  return $.ajax({
    url: config.apiOrigin + '/appointments/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllAppointments = () => {
  return $.ajax({
    url: config.apiOrigin + '/appointments',
    method: 'GET'
  })
}

const deleteAppointment = (dataId) => {
  return $.ajax({
    url: config.apiOrigin + '/appointments/' + dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createProvider = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/providers',
    method: 'POST',
    data: {
      'provider': {
        'given_name': data.given_name,
        'family_name': data.family_name,
        'email': data.email,
        'specialty': data.specialty
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateProvider = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/providers',
    method: 'PATCH',
    data: {
      'provider': {
        'given_name': data.given_name,
        'family_name': data.family_name,
        'email': data.email,
        'specialty': data.specialty
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteProvider = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/providers/' + data.provider.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllProviders = () => {
  return $.ajax({
    url: config.apiOrigin + '/providers/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getProvider = (dataId) => {
  console.log('api.js dataId =' + dataId)
  return $.ajax({
    url: config.apiOrigin + '/providers/' + dataId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createEvent = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'POST',
    data: {
      'event': {
        'name': data.name,
        'start_date': data.start_date,
        'end_date': data.end_date,
        'info': data.specialty
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateEvent = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'PATCH',
    data: {
      'event': {
        'name': data.name,
        'start_date': data.start_date,
        'end_date': data.end_date,
        'info': data.specialty
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getEvent = (dataId) => {
  console.log('api.js dataId =' + dataId)
  return $.ajax({
    url: config.apiOrigin + '/events/' + dataId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteEvent = (dataId) => {
  return $.ajax({
    url: config.apiOrigin + '/events/' + dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getFormFields,
  createAppointment,
  updateAppointment,
  // getAppointments,
  getAllAppointments,
  getMyAppointments,
  deleteAppointment,
  createProvider,
  updateProvider,
  getProvider,
  deleteProvider,
  getAllProviders,
  createEvent,
  updateEvent,
  getEvent,
  deleteEvent
}
