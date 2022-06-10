import axios from "axios";

const fetchData = async (email, passwd) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "");
  urlencoded.append("username", email);
  urlencoded.append("password", passwd);
  urlencoded.append("scope", "");
  urlencoded.append("client_id", "");
  urlencoded.append("client_secret", "");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  try {
    const res = await fetch("http://202.157.184.201:8000/login", requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .catch((error) => console.log("error", error));
    

    const redirect = res.data;
    return { redirect };
  } catch (err) {
    const error = err;
    return { error };
  }
};

export default fetchData;
