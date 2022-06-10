import axios from "axios";

export const Otp = async ({ email }) => {
  const data = JSON.stringify({
    credential: email,
    tujuan: "email",
    zona_waktu: "Asia/Jakarta",
  });

  const config = {
    method: "post",
    url: "http://202.157.184.201:8000/users/otp",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const res = await axios(config).then((response) =>
      JSON.stringify(response.data)
    );
    const statusOTP = await res.data.status;
    return { statusOTP };
  } catch (error) {
    const statusOTP = await error.response.data.status;
    return { statusOTP };
  }
};

export const stampOTP = async (email, userOTP) => {
  console.log(email, userOTP);
  const axios = require("axios");
  const data = JSON.stringify({
    credential: email,
    otp: userOTP,
  });

  const config = {
    method: "post",
    url: "http://202.157.184.201:8000/users/verifikasi",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios(config)
    .then(function (response) {
      return JSON.parse(JSON.stringify(response.data));
    })
    .catch(function (error) {
      return error;
    });
  //  console.log(res);
  return { res };
};
