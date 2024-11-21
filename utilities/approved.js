const { formatTime } = require("../utilities/formatDate");
const approval = function (data) {
  // console.log("data in approval html function: ", data);
  return {
    subject: `${
      data?.status == "approved"
        ? "REQUEST APPROVED (INFO)"
        : "Pending Ride (INFO)"
    }`,
    html: `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
      <!--<![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        @media (max-width:640px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .row-content {
            width: 100% !important;
          }
    
          .mobile_hide {
            display: none;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    
    <body style="margin: 0; background-color: #000000  !important; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000  !important;">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000  !important; color: #333  !important; width: 620px;" width="620">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:5px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img src="https://www.bellapartybus.com/static/media/logo_white.7a005ee3.png" style="display: block; height: auto; border: 0; width: 290px; max-width: 100%;" width="290"></div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:15px;padding-top:40px;">
                                    <div style="font-family: 'Times New Roman', Georgia, serif">
                                      <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; mso-line-height-alt: 14.399999999999999px; color: #f7ef9d; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; text-align: center;"><em>Bella Party Bus Service</em></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              

                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000  !important; color: #000000  !important; width: 620px;" width="620">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #222222;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000  !important; color: #000000  !important; width: 620px;" width="620">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff !important; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;">
                                        <p style="margin: 0; font-size: 12px; text-align: center;"><span style="font-size:14px; color:white"><strong>THANK YOU ${
                                          data.user_firstName
                                        } FOR YOUR "${
      data.ride_type
    }" RESERVATION,${
      data.status == "approved"
        ? ""
        : "YOUR REQUEST IS IN PENDING STAGE, WE WILL LET YOU KNOW ONCE IT APPROVED!"
    } </strong></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff !important; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;">
                                        <p style="margin: 0; font-size: 14px;color:white"><strong>HERE ARE THE DETAILS OF YOUR RIDE:</strong></p>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
                                        <p style="margin: 0; font-size: 14px;"><span style="font-size:14px;color:white">Total:&nbsp; &nbsp;$${
                                          data.price_rate
                                        }</span></p>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
                                        <p style="margin: 0; font-size: 14px;"><span style="font-size:14px;color:white">Location From:&nbsp; &nbsp;${
                                          data.location_from
                                        }</span></p>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>

                                        <p style="margin: 0; font-size: 14px;"><span style="font-size:14px;color:white">Event :&nbsp; &nbsp;${
                                          data.selected_event
                                        }</span></p>
                                     
                                        ${
                                          data?.location_to
                                            ? `
                                              <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">
                                                &nbsp;
                                              </p>
                                              <p style="margin: 0; font-size: 14px;">
                                                <span style="font-size:14px;color:white">
                                                  Location To:&nbsp; &nbsp;
                                                  ${data.location_to}
                                                </span>
                                              </p>
                                            `
                                            : ``
                                        }


                                        ${
                                          data?.flight_no
                                            ? `<>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
                                        <p style="margin: 0; font-size: 14px;"><span style="font-size:14px; color:white">Flight No:&nbsp; &nbsp;&nbsp;${data.flight_no}</span></p>
                                        </>`
                                            : ``
                                        }
                                      <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>

                                        <p style="margin: 0; font-size: 14px;"><span style="font-size:14px; color:white">Car Type:&nbsp; &nbsp;&nbsp;${
                                          data.car.car_name
                                        }</span></p>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>

                                        <p style="margin: 0; font-size: 14px;"><span style="font-size:14px; color:white">Pick-up Time:&nbsp; &nbsp;&nbsp;${formatTime(
                                          data.pick_up_time
                                        )}</span></p>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>

                                        ${
                                          data?.distance
                                            ? `
                                              <p style="margin: 0; font-size: 14px;">
                                                <span style="font-size:14px;color:white">
                                                  Distance:&nbsp; &nbsp;&nbsp;
                                                  ${data.distance}
                                                </span>
                                              </p>
                                            `
                                            : ``
                                        }
                                        ${
                                          data?.duration
                                            ? `
                                              <p style="margin: 0; font-size: 14px;">
                                                <span style="font-size:14px;color:white">
                                                  Duration Time:&nbsp;
                                                  &nbsp;&nbsp; ${data.duration}
                                                </span>
                                              </p>
                                            `
                                            : ``
                                        }
                                        <p style="margin: 0; font-size: 14px;"><span style="font-size:14px;color:#ffffff !important;">Ride Status:</span>&nbsp; &nbsp;&nbsp; ${
                                          data.status
                                        }</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000  !important; color: #000000  !important; width: 620px;" width="620">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:30px;">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dotted #CCCCCC;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: sans-serif">
                                      <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #f7ef9d  !important; line-height: 1.5; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;">
                                        <p style="margin: 0; mso-line-height-alt: 18px;">&nbsp;</p>
                                        <p style="margin: 0; text-align: center; color:white">Have Any Question?<br>Need Help.</p>
                                        <p style="margin: 0; text-align: center;"><a href="https://bella-bus-party.vercel.app/" style="color: #3c75ad;">info@bellapartybus.com</a></p>
                                        <p style="margin: 0; text-align: center;"><a href="tel:973-979-0159" style="color: #3c75ad;">973-979-0159</a></p>
                                        <p style="margin: 0; text-align: center; color:white">Thank you ${
                                          data.user_firstName
                                        } for being a part of BELLA PARTY BUS.</p>
                                        <p style="margin: 0; text-align: left; mso-line-height-alt: 18px;">&nbsp;</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000  !important; color: #000000  !important; width: 620px;" width="620">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dotted #CCCCCC;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000  !important; color: #000000  !important; width: 620px;" width="620">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="alignment" style="vertical-align: middle; text-align: center;">
                                          <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                          <!--[if !vml]><!-->
                                          <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                            <!--<![endif]-->
                                            
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><!-- End -->
    </body>
    
    </html>
`,
  };
};
module.exports = {
  approval,
};
