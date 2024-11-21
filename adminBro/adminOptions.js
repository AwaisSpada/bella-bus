const AdminJS = require("adminjs");
const AdminJSMongoose = require("@adminjs/mongoose");
const quoteservice = require("../services/quoteservice");
const userservice = require("../services/userservice");
const { approval } = require("../utilities/approved");
const { cancelQuote } = require("../utilities/cancelQuote");

const { emailSender } = require("../utilities/emailSender");
AdminJS.registerAdapter(AdminJSMongoose);
const quote = require("../model/quoteSchema");
const conntatUs = require("../model/contactUsSchema");
const car = require("../model/carSchema");
const payments = require("../model/paymentsSchema");
const user = require("../model/userSchema");
const { completed } = require("../utilities/completed");

const locale = {
  translations: {
    labels: {
      loginWelcome: "Bella",
    },
    messages: {
      loginWelcome: "Welcome to Bella Admin panel",
    },
  },
};

const options = {
  locale,
  resources: [
    {
      resource: quote,

      options: {
        properties: {
          status: { isVisible: false },
          createdAt: { isVisible: false },
          updatedAt: { isVisible: false },
          flight_no: { isVisible: false },
        },
        listProperties: [
          "location_from",
          // "location_to",
          "selected_event",
          "price_rate",
          "status",
          "payments",
        ],
        sort: {
          sortBy: "createdAt",
          direction: "desc",
        },
        actions: {
          Approved: {
            actionType: "record",
            icon: "View",
            guard: "Confirm Approved",
            isVisible: (context) =>
              context.record.param("status") === "pending",
            handler: async (context) => {
              let data = await quoteservice.updatequote(
                {
                  _id: context.params.recordId,
                },
                { status: "approved" }
              );

              let getData = await quoteservice.getquotebyId({
                _id: context.params.recordId,
              });

              let values = approval(getData);

              let sendTo = [
                "zaka@mailinator.com",
                "waleedsaifi@spadasoft.com",
                getData.payments.user_email,
              ];
              for (let item of sendTo) {
                await emailSender(
                  item,
                  process.env.EMAIL_FROM,
                  values.subject,
                  values.html
                );
              }
            },
            component: false,
          },
          Reject: {
            actionType: "record",
            icon: "View",
            guard: "Confirm Reject",
            isVisible: (context) =>
              context.record.param("status") === "pending",
            handler: async (context) => {
              let data = await quoteservice.updatequote(
                {
                  _id: context.params.recordId,
                },
                { status: "cancelled" }
              );

              let getData = await quoteservice.getquotebyId({
                _id: context.params.recordId,
              });

              let values = cancelQuote(getData);
              let sendTo = [
                "zaka@mailinator.com",
                "waleedsaifi@spadasoft.com",
                getData.payments.user_email,
              ];
              for (let item of sendTo) {
                await emailSender(
                  item,
                  process.env.EMAIL_FROM,
                  values.subject,
                  values.html
                );
              }
            },
            component: false,
          },
          Complete: {
            actionType: "record",
            icon: "View",
            guard: "Confirm Compelete",
            isVisible: (context) =>
              context.record.param("status") === "approved",
            handler: async (context) => {
              let data = await quoteservice.updatequote(
                {
                  _id: context.params.recordId,
                },
                { status: "completed" }
              );

              let getData = await quoteservice.getquotebyId({
                _id: context.params.recordId,
              });

              let values = completed(getData);

              let sendTo = [
                "zaka@mailinator.com",
                "waleedsaifi@spadasoft.com",
                getData.payments.user_email,
              ];
              for (let item of sendTo) {
                await emailSender(
                  item,
                  process.env.EMAIL_FROM,
                  values.subject,
                  values.html
                );
              }
            },
            component: false,
          },
        },
      },
    },
    {
      resource: car,
    },
    {
      resource: payments,
    },
    {
      resource: conntatUs,
    },
    {
      resource: user,
      options: {
        listProperties: ["first_name", "email", "role", "status"],
        actions: {
          Approved: {
            actionType: "record",
            icon: "View",
            guard: "Confirm Approve",
            isVisible: (context) =>
              context.record.param("status") === "pending",
            handler: async (context) => {
              console.log("Action perform on admin Bro", context.params);

              let data = userservice.updateUserById(
                {
                  _id: context.params.recordId,
                },
                { status: "approved" }
              );
            },
            component: false,
          },
        },
      },
    },
  ],
  dashboard: {
    component: AdminJS.bundle("./myDashboardComponent"),
  },
  branding: {
    companyName: "Bella",
    softwareBrothers: false,
    logo: "",
  },
};
module.exports = options;
