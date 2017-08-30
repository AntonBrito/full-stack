'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')

$(document).ready(function () {
  $('.Yogaclasses').hide()
  $('#sign-up').on('submit', events.onSignUp)
})
$(document).ready(function () {
  $('#schedule').on('click', function () {
    $('.Yogaclasses').show()
  })
  $('#sign-in').on('submit', events.onSignIn)
})

$('#makeappoitment').on('click', events.createAppoitment)

const makeappoitment = (data) => {
  console.log(data)
  console.log('Succeded')
  console.log(data.appoitments.length)
  $('#makeappointment').empty()
  for (let i = 0; i < data.appoitments.length; i++) {
    $('#makeappointment').append(
      '<tr class="title">' +
        '<th>' + data.appoitments[i].title + '</th>' +
      '</tr>' +
      '<tr class="content">' +
      '<td> <textarea>' + data.appoitments[i].content + '</textarea> </td>' +
      '<td>' + '<button class="delete-appoitment" data-id="' + data.appoitments[i].id + '" type="button">' + 'Delete Appoitment' + '</button>' + '</td>' +
      '</tr>' +
      '<tr class="comment-button">' +
      '<td>' +
      '<input type="text" name="title" form="comment-form" placeholder="Title" />' +
      '<input type="text" name="comment" form="comment-form" placeholder="Comment" />' +
      '<tr class="submit-comment">' +
      '<td>' +
      '<button type="button" form="comment-form" id="commentButton">' + 'Comments?' + '</button>' +
      '</td>' +
      '</tr>' +
      '<tr hidden>' +
      '<td id="postId">' + data.appoitments[i].id +
      '</td>' +
      '</tr>' +
      '</td>' +
      '</tr>'
    )
  }
}
