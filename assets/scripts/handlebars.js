const appointmentsHandlebars = function (email, dateTime, id) {
  const appointmentsHandlebarsTemplate = require('./templates/appointment.handlebars')
  const context = {
    'email': email,
    'dateTime': dateTime,
    'id': id
  }
  const appointmentsTemplate = appointmentsHandlebarsTemplate(context)
  $('#appointment-table').append(appointmentsTemplate)
}

module.exports = {
  appointmentsHandlebars
}
