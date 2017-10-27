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
  $('#allproviders').on('click', events.onGetAllproviders)
  $('#get-every-providers').on('click', events.onGetAllproviders)
  $('#get-my-providers').on('click', events.onGetMyproviders)
  $('#provider_name').on('submit', events.onCreateprovider)
  $('#appoitment_form').on('submit', events.onCreateappoitment)
  // $('#random').on('click',
  //   events.onGetAllMyappoitments)
  $('#get-every-appoitments').on('click', events.onGetAllMyappoitments)
  $('#update_provider_form').on('submit', events.onUpdateprovider)
  $('#update_appoitment_form').on('submit', events.onUpdateappoitment)
  $('#allproviders').on('click', function () {
    $('#providers_page').hide()
  })
  $('form').on('submit', function () {
    $('input').val('')
    $('#message').empty()
  })

  $('#providers_page, #appoitments_page, #create_provider, #create_appoitment, #update_provider, #update-appoitments-subject').hide()

  // providers view
  $('#get-every-providers').on('click', function () {
    $('#providers_page').show()
    $('#message').empty()
    $('#appoitments_page, #create_provider, #create_appoitment, #update_provider, #update-appoitments-subject').hide()
  })
  $('#get-my-providers').on('click', function () {
    $('#providers_page').show()
    $('#message').empty()
    $('#appoitments_page, #create_provider, #create_appoitment, #update_provider, #update-appoitments-subject').hide()
  })
  // appoitments view
  $('#get-every-appoitments').on('click', function () {
    $('#appoitments_page').show()
    $('#message').empty()
    $('#providers_page, #create_provider, #create_appoitment, #update_providers, #update-appoitments-subject').hide()
  })
  // create providers view
  $('#show-provider-create').on('click', function () {
    $('#create_provider').show()
    $('#message').empty()
    $('#providers_page, #appoitments_page, #create_appoitment, #update_provider, #update-appoitments-subject').hide()
  })

  // create appoitments view
  $('#show-appoitment-create').on('click', function () {
    $('#create_appoitment').show()
    $('#message').empty()
    $('#appoitments_page, #appoitments_page, #create_provider, #update_provider, #update_provider').hide()
  })
})

$(document).on('click', '.providerEditButton', events.onUpdateprovidersaveId)
$(document).on('click', '.appoitmentEditButton', events.onUpdateappoitmentsaveId)
$(document).on('click', '.show-appoitment-create', events.onGetAllappoitments)
$(document).on('click', '.appoitmentsDeleteButton', events.onDeleteappoitment)
$(document).on('click', '.providerDeleteButton', events.onDeleteprovider)
$(document).on('click', '.appoitmentEditButton', function () {
  $('#update_appoitments-subject').show()
})
$(document).on('click', '.providerEditButton', function () {
  $('#update_provider').show()
})

$('.providersEditButton, .providersDeleteButton').hide()
