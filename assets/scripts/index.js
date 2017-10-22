'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// doc ready on html
$(document).ready(function () {
  setAPIOrigin(location, config)

  $('.Yogaclasses').hide()

  $('#schedule').on('click', function () {
    $('.Yogaclasses').show()
  })
  // CREATE
  $('#createAppoitment').on('click', events.onCreateAppoitments)
  $('#makeappoitment').on('click', events.onCreateMeetings)
  $('#showappointment').on('click', events.onShowAppointments)
})

// $(document).on('click', '.appoitmentEditButton', events.onUpdateLandlordSaveId)
// $(document).on('click', '.meetingEditButton', events.onUpdateCommentSaveId)
// $(document).on('click', '.show-all-appoitments', events.onGetAllappoitments)
// $(document).on('click', '.appoitmentDeleteButton', events.onDeleteComment)
// $(document).on('click', '.meetingDeleteButton', events.onDeleteLandlord)
// $(document).on('click', '.appoitmentEditButton', function () {
//   $('#update_appoitment').show()
// })
// $(document).on('click', '.mettingEditButton', function () {
//   $('#metting_landlord').show()
// })
//
// $('.appoitmentEditButton, .appoitmentDeleteButton').hide()
