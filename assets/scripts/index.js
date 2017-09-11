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
})

// $(document).ready(function () {
//   $('#makeappoitment').on('click', function () {
//     $('.createappoitment').show()
// })
//
// const makeappoitment = (data) => {
//   console.log(data)
//   console.log('Succeded')
//   console.log(data.appoitments.length)
//   $('#makeappointment').empty()
//   for (let i = 0; i < data.appoitments.length; i++) {
//     $('#makeappoitment').append(
//       '<tr class="Appoitment">' +
//         '<th>' + data.appoitments[i].title + '</th>' +
//       '</tr>' +
//       '<tr class="content">' +
//       '<td> <textarea>' + data.appoitments[i].content + '</textarea> </td>' +
//       '<td>' + '<button class="delete-appoitment" data-id="' + data.appoitments[i].id + '" type="button">' + 'Delete Appoitment' + '</button>' + '</td>' +
//       '</tr>' +
//       '<tr class="comment-button">' +
//       '<td>' +
//       '<input type="text" name="Name" form="appoitments-form" placeholder="Name" />' +
//       '<input type="text" name="appoitments" form="appoitments-form" placeholder="email" />' +
//       '<tr class="submit-comment">' +
//       '<td>' +
//       '<button type="button" form="appoitment-form" id="makeappointment">' + 'appoitments?' + '</button>' +
//       '</td>' +
//       '</tr>' +
//       '<tr hidden>' +
//       '<td id="NAme">' + data.appoitments[i].id +
//       '</td>' +
//       '</tr>' +
//       '</td>' +
//       '</tr>'
//     )
//   }
// }
