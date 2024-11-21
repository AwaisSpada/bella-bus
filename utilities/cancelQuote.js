const cancelQuote = function (data) {
  // console.log("data in approval html function: ", data);
  return {
    subject: "REQUEST REJECTED (INFO)",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    * {
      padding: 0 !important;
      margin: 0 !important;
    }

    .container {
      width: 100% !important;
      height: auto !important;
      background-color: #0f1113 !important;
    }

    .logo-parent {
      width: 100% !important;
      height: auto !important;
      padding-top: 80px !important;
      padding-bottom: 80px !important;
      justify-content: center !important;
      display: flex !important;
      align-items: center !important;
    }

    .logo-child {
      width: 300px !important;
      height: auto !important;
    }
    .heading-parent {
      width: 100% !important;
      padding-top: 10px !important;
      padding-bottom: 10px !important;
      text-align: center !important;
    }
    .heading-child {
      font-style: normal !important;
      font-weight: 800 !important;
      font-size: 18px !important;
      text-align: center !important;
      color: #dac683 !important;
      letter-spacing: 2px !important;
      padding-top: 50px !important;
    }

    .heading-childd {
      font-style: normal !important;
      font-weight: 800 !important;
      font-size: 22px !important;
      text-align: center !important;
      color: #ffffff !important;
      letter-spacing: 2px !important;
      padding-top: 5px !important;
      padding-top: 15px !important;
    }

    @media (max-width: 425px) {
      .heading-child {
        font-size: 20px !important;
      }
      .heading-childd {
        font-size: 20px !important;
      }
    }

    .heading-2-parent {
      width: 100% !important;
      padding-top: 10px !important;
      padding-bottom: 10px !important;
      text-align: center !important;
    }

    .heading-2-child {
      font-style: normal !important;
      font-weight: 800 !important;
      font-size: 24px !important;
      text-align: center !important;
      color: #ffffff !important;
      letter-spacing: 2px !important;
      padding-top: 20px !important;
    }

    .heading-3-child {
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 20px !important;
      line-height: 24px !important;
      text-align: center !important;
      color: #ffffff !important;
      padding-top: 10px !important;
      text-transform: capitalize !important;
    }

    .heading-4-child {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      padding-top: 20px !important;
      text-align: center;
      color: #ffffff !important;
      padding-bottom: 40px !important;
    }
    .card-parent {
      width: 100% !important;
      justify-content: center !important;
      display: flex !important;
      height: auto !important;
      align-items: center !important;
      padding-top: 70px !important;
      padding-bottom: 70px !important;
    }

    .card-child {
      width: 600px !important;
      height: auto !important ;
      background-color: #1d2024 !important;
      background-size: contain !important;
      padding-bottom: 30px !important;
      background-repeat: no-repeat !important;
    }

    @media (max-width: 425px) {
      .card-child {
        transform: scale(0.9) !important;
      }
    }

    .wait-image {
      justify-content: center !important;
      margin-top: 40px !important;
    }

    .wait-image-child {
      width: 220px !important;
    }
  </style>
  <body>
    <div class="container">
      <div class="logo-parent">
        <img src="logo.png" class="logo-child" alt="" />
      </div>
      <div class="heading-parent">
        <div class="card-parent">
          <div class="card-child">
            <h3 class="heading-child">THANK YOU FOR BOOKING RIDE</h3>
            <h3 class="heading-childd">
              BUT UNFORTUNATELY, YOUR RIDE HAS BEEN REJECTED
            </h3>

            <div class="wait-image">
              <img src="wait.png" class="wait-image-child" alt="" />
            </div>
          </div>
        </div>

        <div class="heading-2-parent">
          <div class="heading-3-child">have any question? <br />need help.</div>
        </div>
        <div class="heading-2-parent">
          <div class="heading-4-child">Thank you for being a part of BELLA PARTY BUS.</div>
        </div>
      </div>
    </div>
  </body>
</html>`,
  };
};
module.exports = {
  cancelQuote,
};
