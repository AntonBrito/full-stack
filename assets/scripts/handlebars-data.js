const providersHandlebars = function (giveName, familyName, email) {
  const providerHandlebarsTemplate = require('./provider-template.handlebars')
  const context = {
    'given_name': giveName,
    'family_name': familyName,
    'email': email
  }
  const providerTemplate = providerHandlebarsTemplate(context)
  $('#providers-div').append(providerTemplate)
}

// template context for appointments

const appointmentsHandlebars = function (name, lastname, email, date, providerId) {
  const appointmentHandlebarsTemplate = require('./appointments-template.handlebars')
  const context = {
    'name': name,
    'lastname': lastname,
    'email': email,
    'date': date,
    'provider_id': providerId
  }
  const templateFilled = appointmentHandlebarsTemplate(context)
  $('#empty-appointments-div').append(templateFilled)
}

const dropdownHandlebars = function (name, lastname, date, dataId) {
  const appointmentHandlebarsTemplate = require('./appointments-dropdown-list.handlebars')
  const context = {
    'name': name,
    'lastname': lastname,
    'date': date
  }
  const templateFilled = appointmentHandlebarsTemplate(context)
  $('#listOfappointments').append(templateFilled)
}

module.exports = {
  providersHandlebars,
  appointmentsHandlebars,
  dropdownHandlebars
}
