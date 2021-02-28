
const { Text, Select } = require('@keystonejs/fields');

const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const fileAdapter = new LocalFileAdapter({
    /*...config */
});


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
        "Unit Detail": {
            type: Text,
            isRequired: true,
        },
        "Deal Start Date": {
            type: Text,
            isRequired: true,
        },
        "Deal Close Date": {
            type: Text,
            isRequired: true,
        },
        "Deal Type": {
            type: Select,
            options: 'Affordable, Commercial, Residential, Land',
            isRequired: true,
        },
        "Deal Total Amount": {
            type: Text,
            isRequired: true,
        },
        "Deal Total Profit": {
            type: Text,
            isRequired: true,
        },
        "Deal Net Profit": {
            type: Text,
            isRequired: true,
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
        "Commision Paid Date": {
            type: Text,
            isRequired: false,
        },
        "Sales Person": {
            type: Text,
            isRequired: true,
        },
        "Sales Person Contact": {
            type: Text,
            isRequired: true,
        },
        Comments: {
            type: Text,
            isRequired: true,
        },
        attachments1: {
            type: File,
            adapter: fileAdapter,
            isRequired: false,
        },
        attachments2: {
            type: File,
            adapter: fileAdapter,
            isRequired: false,
        },
        attachments3: {
            type: File,
            adapter: fileAdapter,
            isRequired: false,
        },
        attachments4: {
            type: File,
            adapter: fileAdapter,
            isRequired: false,
        },
    }
};