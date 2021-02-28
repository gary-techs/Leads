
const { Text, Checkbox ,Select,Integer} = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
    Name: {
      type: Text,
      isRequired: true,
    },
    Address: {
      type: Text,
      isRequired: false,
    },
    Phone: {
      type: Integer,
      isRequired: true,
    },
    PropertyDetails: {
      type: Wysiwyg,
      isRequired: true,
    },
    Email: {
      type: Text,
      isRequired: false,
    },
      type: { 
        type: Select,
         options: 'New,Oppurtunity,Customer' ,
         isRequired: true,
        },
  },
  labelResolver: item => item.Name,
};