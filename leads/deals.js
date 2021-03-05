
const { Text, Select, File } = require('@keystonejs/fields');

const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
    src: 'public/uploads',
    path: '/public/uploads'
});


module.exports = {
    fields: {
        SName: {
            label: "Seller Name",
            type: Text,
            isRequired: true,
        },

        "SContact": {
            label: "Seller Contact",
            type: Text,
            isRequired: true,
        },
        "SAInfo": {
            label: "Seller Additional Info",
            type: Text,
            isRequired: false,
        },
        BName: {
            label: "Buyer Name",
            type: Text,
            isRequired: true,
        },
        "BContact": {
            label: "Buyer Contact",
            type: Text,
            isRequired: true,
        },
        "BAInfo": {
            label: "Buyer Additional Info", type: Text,
            isRequired: false,
        },
        "Project_Name": {
            label: "", type: Text,
            isRequired: true,
        },
        "Unit_Detail": {
            label: "", type: Text,
            isRequired: true,
        },
        "Deal_Start_Date": {
            label: "Deal Start Date", type: Text,
            isRequired: true,
        },
        "Deal_Close_Date": {
            label: "Deal Close Date", type: Text,
            isRequired: true,
        },
        "Deal_Type": {
            label: "Deal Type",
            type: Select,
            options: 'Affordable, Commercial, Residential, Land',
            isRequired: true,
        },
        "Deal_Total_Amount": {
            label: "Deal Total Amount",
            type: Text,
            isRequired: true,
        },
        "Deal_Total_Profit": {
            label: "Deal Total Profit",
            type: Text,
            isRequired: true,
        },
        "Deal_Net_Profit": {
            label: "Deal Net Profit",
            type: Text,
            isRequired: true,
        },
        "Commision_Amount": {
            label: "Commision Amount",
            type: Text,
            isRequired: true,
        },
        "Commision_Status": {
            label: "Commision Status",
            type: Select,
            options: [{ value: "Pending", label: "Pending" }, { value: "Partially", label: "Partially Paid" }, { value: "Fully", label: "Fully Paid" }],
            isRequired: true,
        },
        "Commision_Paid_Date": {
            label: "Commision Paid Date",
            type: Text,
            isRequired: false,
        },
        "Sales_Person": {
            label: "Sales Person",
            type: Text,
            isRequired: true,
        },
        "Sales_Person_Contact": {
            label: "Sales Person Contact",
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
    },
    labelResolver: item => item.BName,
};