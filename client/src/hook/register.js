import axios from "axios";

const pullData = async (data) => {
  const pushData = {
    email: data.email,
    hp: data.phone,
    firstname: data.firstname,
    lastname: data.lastname,
    grup: data.group,
    role: data.role,
    tgl_lahir: data.birth,
    jenis_kelamin: parseInt(data.gender),
    password: data.password,
    referral_code: data.referral,
  };
  //console.log(pushData);
  const config = {
    method: "post",
    url: "http://202.157.184.201:8000/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: pushData,
  };

  try {
    //const res = await axios(config);
    const res = await axios(config)
      .then((response) => JSON.parse(JSON.stringify(response.data)))
      .catch((error) => JSON.parse(JSON.stringify(error.response.data)));
    //console.log(res);
    return { res };
  } catch (error) {
    return { error };
  }
};

export default pullData;
