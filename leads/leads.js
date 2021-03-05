
const { Text, Select, Relationship, DateTime } = require('@keystonejs/fields');
const { byTracking, atTracking } = require('@keystonejs/list-plugins');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
    Name: {
      type: Text,
      isRequired: true,
    },
    Phone: {
      type: Text,
      isRequired: true,
      isUnique: true
    },
    Comments: {
      type: Wysiwyg,
      isRequired: false,
    },
    type: {
      type: Select,
      _label_: 'Test',
      options: 'New, Oppurtunity',
      isRequired: true,
    },
    Address: {
      type: Text,
      isRequired: false,
    },
    City: {
      type: Select,
      options: 'Gurgaon,Faridabad,Noida,Delhi,Ghaziabad,Rewari',
      isRequired: false,
    },
    Source: {
      type: Text,
      isRequired: false,
    },
    Email: {
      type: Text,
      isRequired: false,
    },
    Budget: {
      type: Text,
      isRequired: false,
    },
    Occupation: {
      type: Text,
      isRequired: false,
    },

  },
  labelResolver: item => item.type,
  plugins: [
    byTracking(),
    atTracking(),
  ],
};