const ownerSms = function (data) {
  return {
    body: `         (Bella Party Bus)
${data.user_firstName} ${data.user_lastName} WANTS TO BOOK A "${data.ride_type}" RIDE, HERE IS THE INFORMATION

Phone No: ${data.user_phoneNumber}

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
  ownerSms,
};
