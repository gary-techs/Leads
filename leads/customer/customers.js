
const { Text, Select } = require('@keystonejs/fields');

const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const fileAdapter = new LocalFileAdapter({
    /*...config */
  });

/*
Seller Info		Buyer Info		Deal Information						Commision Information			
Seller Name	Seller Contact	Buyer Name	Buyer Contact	Deal Date	Project Name	Type	Booking Amount	Total Amount	Builder Final Payout Date (Tentative)	Commision Percent	Commision Amount	Commision Status	Commision Status
 Phone: {
      type: Text,
      isRequired: true,
      isUnique:true
    },
    Comments: {
      type: Wysiwyg,
      isRequired: false,
    },
*/
module.exports = {
    fields: {
        "Seller Name": {
            type: Text,
            isRequired: true,
        },
        "Seller Contact": {
            type: Text,
            isRequired: true,
        },
        "Seller Additional Info": {
            type: Text,
            isRequired: false,
        },

        "Buyer Name": {
            type: Text,
            isRequired: true,
        },
        "Buyer Contact": {
            type: Text,
            isRequired: true,
        },
        "Buyer Additional Info": {
            type: Text,
            isRequired: false,
        },
        "Project Name": {
            type: Text,
            isRequired: true,
        },
        "Deal Date": {
            type: Text,
            isRequired: true,
        },
        "Deal Date": {
            type: Text,
            isRequired: false,
        },
        "Deal Type": {
            type: Text,
            isRequired: true,
        },
        "Deal Amount": {
            type: Text,
            isRequired: true,
        },
        "Buyer Additional Info": {
            type: Text,
            isRequired: false,
        },
        "Commision Amount": {
            type: Text,
            isRequired: true,
        },
        "Commision Status": {
            type: Select,
            options: 'Pending, Partially Paid, Fully Paid',
            isRequired: true,
        },
        "Sales Person": {
            type: Text,
            isRequired: true,
        },
        "Sales Person Contact": {
            type: Text,
            isRequired: true,
        },
        "Deal Profit": {
            type: Text,
            isRequired: true,
        },
        attachments: {
            type: File,
            adapter: fileAdapter,
            isRequired: true,
          },
    }
};