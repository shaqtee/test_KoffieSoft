import { useRef } from "react";

export const ModalRegister = (props) => {
  const inputElement1 = useRef("");
  const inputElement2 = useRef("");
  const inputElement3 = useRef("");
  const inputElement4 = useRef("");
  const inputElement5 = useRef("");
  const inputElement6 = useRef("");
  const inputElement7 = useRef("");
  const inputElement8 = useRef("");
  const inputElement9 = useRef("");
  const inputElement10 = useRef("");
  const kosong = () => {
    inputElement1.current.value = "";
    inputElement2.current.value = "";
    inputElement3.current.value = "";
    inputElement4.current.value = "";
    inputElement5.current.value = "";
    inputElement6.current.value = "";
    inputElement7.current.value = "";
    inputElement8.current.value = "";
    inputElement9.current.value = "";
    inputElement10.current.value = "";
  };

  return (
    <>
      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-black">
          <label
            htmlFor={props.id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={kosong}
          >
            ✕
          </label>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col w-70 m-auto">
              {/* EMAIL */}
              <div className="ml-auto ">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Email</span>
                    <input
                      ref={inputElement3}
                      type="text"
                      placeholder="youraccount@site.com"
                      className="input input-bordered"
                      onChange={props.val3}
                    />
                  </label>
                </div>
              </div>
              {/* endEMAIL */}
              {/* PHONE */}
              <div className="ml-auto mt-4">
                <div className="form-control">
                  <label className="input-group">
                    <span className="w-[6.5rem]">No.HP</span>
                    <input
                      ref={inputElement1}
                      type="text"
                      placeholder="Ex : 081234567890"
                      className="input input-bordered"
                      onChange={props.val1}
                    />
                  </label>
                </div>
              </div>
              {/* endPHONE */}
              {/* FIRSTNAME */}
              <div className="ml-auto ">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">First Name</span>
                    <input
                      ref={inputElement4}
                      type="text"
                      className="input input-bordered"
                      onChange={props.val4}
                    />
                  </label>
                </div>
              </div>
              {/* endFIRSTNAME */}
              {/* LASTNAME */}
              <div className="ml-auto ">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Last Name</span>
                    <input
                      ref={inputElement5}
                      type="text"
                      className="input input-bordered"
                      onChange={props.val5}
                    />
                  </label>
                </div>
              </div>
              {/* endLASTNAME */}
              {/* GROUP */}
              <input
                ref={inputElement6}
                type="hidden"
                placeholder="abdullah@site.com"
                className="input input-bordered"
                onChange={props.val6}
              />
              {/* endGROUP */}
              {/* ROLE */}
              <input
                ref={inputElement7}
                type="hidden"
                placeholder="abdullah@site.com"
                className="input input-bordered"
                onChange={props.val7}
              />
              {/* endROLE */}
              {/* BIRTH */}
              <div className="mr-auto ">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Birth</span>
                    <input
                      type="date"
                      className="input input-bordered"
                      onChange={props.val8}
                    />
                  </label>
                </div>
              </div>
              {/* endBIRTH */}
              {/* GENDER */}
              <div className="m-auto mt-4">
                <select
                  className="select select-bordered select-sm w-full max-w-xs"
                  defaultValue={"DEFAULT"}
                  onChange={props.val10}
                >
                  <option value={"DEFAULT"} disabled>
                    Gender
                  </option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              {/* endGENDER */}
              {/* PASSWORD */}
              <div className="ml-auto ">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Password</span>
                    <input
                      ref={inputElement2}
                      type="text"
                      placeholder="*********"
                      className="input input-bordered"
                      onChange={props.val2}
                    />
                  </label>
                </div>
              </div>
              {/* endPASSWORD */}
              {/* REFERRAL */}
              <div className="ml-auto ">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Referral</span>
                    <input
                      ref={inputElement9}
                      type="text"
                      placeholder="optional"
                      className="input input-bordered"
                      onChange={props.val9}
                    />
                  </label>
                </div>
              </div>
              {/* endREFERRAL */}
            </div>
          </div>
          <div className="modal-action flex flex-col justify-center">
            {props.message ? (
              <div className="flex flex-col gap-2 mb-3 m-auto">
                <input
                  type="text"
                  placeholder="Type here your OTP ..."
                  className="input w-full m-auto text-center text-2xl max-w-xs"
                  onChange={props.verifyotp}
                />
                <button
                  className="btn btn-sm btn-outline btn-info mb-3"
                  onClick={props.doverifyotp}
                >
                  Verify OTP
                </button>
                <div className="flex gap-2 m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-center">{props.message}</span>
                </div>
                <button
                  className="btn btn-outline btn-sm btn-error my-3"
                  onClick={props.otp}
                >
                  Resend OTP
                </button>
              </div>
            ) : (
              ""
            )}
            <button onClick={props.reg} htmlFor={props.id} className="btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
