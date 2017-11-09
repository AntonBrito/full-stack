'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events.js')
require('./handlebars-data')
$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#show-all-providers').on('click', events.onGetAllproviders)
  $('#get-every-providers').on('click', events.onGetAllproviders)
  $('#my-provider').on('click', events.onGetMyproviders)
  $('#create_provider_form').on('submit', events.onCreateprovider)
  $('#create_appointment_form').on('submit', events.onCreateAppointment)
  // $('#random').on('click',
  //   events.onGetAllMyAppointments)
  $('#get-every-appointments').on('click', events.onGetAllMyAppointments)
  $('#update_provider_form').on('submit', events.onUpdateprovider)
  $('#update_appointment_form').on('submit', events.onUpdateAppointment)
  $('#allproviders').on('click', function () {
    $('#providers_page').hide()
  })
  $('form').on('submit', function () {
    $('input').val('')
    $('#message').empty()
  })

  $('#providers_page, #appointments_page, #create_provider, #create_appointment, #update_provider, #update-appointments-subject').hide()

  // providers view
  $('#show-all-providers').on('click', function () {
    $('#providers_page').show()
    $('#message').empty()
    $('#appointments_page, #create_provider, #create_appointment, #update_provider, #update-appointments').hide()
  })
  $('#my-provider').on('click', function () {
    $('#providers_page').show()
    $('#message').empty()
    $('#appointments_page, #create_provider, #create_appointment, #update_provider, #update-appointments').hide()
  })
  // Appointments view
  $('#get-every-appointments').on('click', function () {
    $('#appointments_page').show()
    $('#message').empty()
    $('#providers_page, #create_provider, #create_appointment, #update_providers, #update-appointments').hide()
  })
  // create providers view
  $('#show-provider-create').on('click', function () {
    $('#create_provider', '#create_provider_form').show()
    $('#message').empty()
    $('#providers_page, #appointments_page, #create_appointment, #update_provider, #update-appointments').hide()
  })

  // $('#get_sign_up_form').on('click', function () {
  //   $('#sign-up-form').show()
  //   $('#message').empty()
  // })
  // $('.sign-in-nav').on('click', function () {
  //   $('#sign-in-form').show()
  // })
  // create Appointments view
  $('#show-appointment-create').on('click', function () {
    $('#create_appointment').show()
    $('#message').empty()
    $('#appointments_page, #appointments_page, #create_provider, #update_appointment, #update_provider').hide()
  })
})
// $(document).on('click', '.sign-up-nav', events.onSignUp)
$(document).on('click', '.providerEditButton', events.onUpdateProviderSaveId)
$(document).on('click', '.appointmentEditButton', events.onUpdateAppointmentSaveId)
$(document).on('click', '.show-all-Appointments', events.onGetAllAppointments)
$(document).on('click', '.appointmentDeleteButton', events.onDeleteAppointment)
$(document).on('click', '.providersDeleteButton', events.onDeleteProvider)
$(document).on('click', '.appointmentEditButton', function () {
  $('#update_appointment').show()
})
$(document).on('click', '.providerEditButton', function () {
  $('#update_provider').show()
})

$('.providerEditButton, .providersDeleteButton').hide()
