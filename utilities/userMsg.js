const userSms = function (data) {
  return {
    body: `      (Bella Party Bus)
 THANK YOU ${data.user_firstName} FOR YOUR "${data.ride_type}" RESERVATION, YOUR REQUEST IS IN PENDING STAGE, WE WILL LET YOU KNOW ONCE IT APPROVED

Rate: $${data.price_rate}

Location From: ${data.location_from}

Location To: ${data.location_to}

Car Type: ${data.car.car_name}

Pick-up Time: ${data.pick_up_time}

Distance: ${data.distance}

Duration Time: ${data.duration}

Ride Status: ${data.status}`,
  };
};
module.exports = {
  userSms,
};
