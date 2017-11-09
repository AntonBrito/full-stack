const providersHandlebars = function (giveName, familyName, email, specialty) {
  const providerHandlebarsTemplate = require('./provider-template.handlebars')
  const context = {
    'given_name': giveName,
    'family_name': familyName,
    'email': email,
    'specialty': specialty
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

const dropdownHandlebars = function (name, dataId) {
  const appointmentHandlebarsTemplate = require('./appointments-dropdown-list.handlebars')
  const context = {
    'name': name
  }
  const templateFilled = appointmentHandlebarsTemplate(context)
  $('#listOfappointments').append(templateFilled)
}

module.exports = {
  providersHandlebars,
  appointmentsHandlebars,
  dropdownHandlebars
}
