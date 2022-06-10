import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchData from "../hook/login.js";
import pullData from "../hook/register.js";
import { Otp, stampOTP } from "../hook/resendotp.js";
import { ModalLogin } from "./partials/ModalLogin.js";
import { ModalRegister } from "./partials/ModalRegister.js";

const Home = (props) => {
  const date = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString("id-ID")
    .split("T")[0];
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [group, setGroup] = useState("");
  const [role, setRole] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [userOTP, setUserOTP] = useState("");
  const [message, setMessage] = useState(false);

  const defaultState = () => {
    setEmail("");
    setPhone("");
    setFirstname("");
    setLastname("");
    setGroup("member");
    setRole("");
    setBirth(date);
    setGender("");
    setPassword("");
    setReferral("");
    setUserOTP("");
    setMessage(false);
  };

  useEffect(() => {
    setEmail((prev) => prev);
    setPhone((prev) => prev);
    setFirstname((prev) => prev);
    setLastname((prev) => prev);
    setGroup((prev) => prev);
    setRole((prev) => prev);
    setBirth((prev) => prev);
    setGender((prev) => prev);
    setPassword((prev) => prev);
    setReferral((prev) => prev);
    setUserOTP((prev) => prev);
    setMessage((prev) => prev);
    setData({
      email,
      phone,
      firstname,
      lastname,
      group,
      role,
      birth,
      gender,
      password,
      referral,
    });
  }, [
    email,
    phone,
    firstname,
    lastname,
    group,
    role,
    birth,
    gender,
    password,
    referral,
    userOTP,
    message,
  ]);

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPhone = (e) => {
    setPhone(e.target.value);
  };
  const getFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const getLastname = (e) => {
    setLastname(e.target.value);
  };
  const getGroup = (e) => {
    setGroup(e.target.value);
  };
  const getRole = (e) => {
    setRole(e.target.value);
  };
  const getBirth = (e) => {
    setBirth((prevDate) => (e.target.value === "" ? prevDate : e.target.value));
  };

  const getGender = (e) => {
    setGender(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getReferral = (e) => {
    setReferral(e.target.value);
  };
  const getUserOTP = (e) => {
    setUserOTP(e.target.value);
  };

  const getAuth = async () => {
    if (email == "" || password == "")
      return setMessage("Email dan Password tidak boleh kosong");

    const { redirect } = await fetchData(email, password);
    //return;
    if (!redirect) return setMessage("Email atau Password salah");

    switch (redirect.grup) {
      case "admin":
        navigate("/admin", { state: redirect });
        break;
      case "member":
        navigate("/member", { state: redirect });
        break;
    }
  };

  const getRegister = async () => {
    const pattern = /^[\w\.]+@\w+(\.\w+)$/gm;

    if (!phone || !password || !email || !firstname || !lastname) {
      setMessage("tidak boleh kosong!");
    } else if (email.match(pattern) === null) {
      setMessage("email tidak valid!");
    } else {
      const { res } = await pullData(data);

      setMessage(res.status.keterangan);
    }
  };

  const resendOTP = async () => {
    const { statusOTP } = await Otp({ email });

    if (statusOTP.kode === "failed") {
      setMessage("check your email, or waiting 10 mnt resend OTP");
    } else {
      setMessage("please check your email");
    }
  };

  const doVerifyOTP = async () => {
    const { res } = await stampOTP(email, userOTP);

    if (res?.status?.kode == "success") return await getAuth();
    setMessage(res.response.data.status.keterangan);
  };

  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <div className="navbar dark:bg-slate-800 rounded-b-lg">
        <div className="navbar-start">
          <a className="MS_customClass text-2xl">
            KoffieSoft Test
            <span onClick={() => navigate("/testing")}>®</span>
          </a>
        </div>

        <div className="navbar-end gap-2">
          <label
            htmlFor="login-modal"
            className="btn modal-button"
            onClick={defaultState}
          >
            Sign in
          </label>
          <label
            htmlFor="register-modal"
            className="btn modal-button"
            onClick={defaultState}
          >
            Register
          </label>
        </div>
      </div>

      {/* List */}
      <div className="mockup-code mt-3">
        <pre data-prefix="">
          <code>npm install</code>
        </pre>
        <pre data-prefix="1" className="bg-warning text-warning-content">
          <code>npm start</code>
        </pre>
        <pre data-prefix="2">
          <code>
            <span className="text-green-500">✔</span> ready daisyUi
          </code>
        </pre>
        <pre data-prefix="3">
          <code>
            <span className="text-green-500">✔</span> ready nodemailer
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            <span className="text-green-500">✔</span> ready redux
          </code>
        </pre>
        <pre data-prefix="5">
          <code>
            <span className="text-green-500">✔</span> ready axios
          </code>
        </pre>
        <pre data-prefix="6">
          <code>
            <span className="text-green-500">✔</span> ready react-router-dom
          </code>
        </pre>
        <pre data-prefix="7">
          <code>
            <span className="text-green-500">✔</span> ready tailwind.config.js
            (theme)
          </code>
        </pre>
      </div>

      <ModalLogin
        id="login-modal"
        message={message}
        val1={getEmail}
        val2={getPassword}
        auth={getAuth}
      />
      <ModalRegister
        id="register-modal"
        message={message}
        val3={getEmail}
        val1={getPhone}
        val4={getFirstname}
        val5={getLastname}
        val6={getGroup}
        val7={getRole}
        val8={getBirth}
        val10={getGender}
        val2={getPassword}
        val9={getReferral}
        reg={getRegister}
        otp={resendOTP}
        verifyotp={getUserOTP}
        doverifyotp={doVerifyOTP}
      />
    </div>
  );
};

export default Home;
