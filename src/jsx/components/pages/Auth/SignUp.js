import { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../../../stores/auth/actions";
import TextInput from "../../layouts/shared/TextInput";
import { Link, useHistory } from "react-router-dom";

const SingUp = (props) => {
  const history = useHistory();
  //curent state
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [btnLoading, setBtnLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const SignUp = async () => {
    try {
      setBtnLoading(true);
      const response = await props.signUp(state);
      if (response.statusCode === 201) {
        history.push("/login");
      }
      setBtnLoading(false);
    } catch (error) {
      if (typeof error?.response?.data === "object") {
        if (typeof error.response.data?.error === "string")
          setErrMsg(error.response.data?.error);
        else setErrMsg("Something went wrong!");
      }
      setBtnLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-800">
        <div className="w-full max-w-md">
          <form className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl">
            <div className="px-10 py-12">
              <h1 className="text-3xl font-bold text-center">Sing Up</h1>
              {errMsg?.length > 0 && (
                <div
                  className="flex bg-red-100 rounded-lg p-4 mb-4 mt-2 text-sm text-red-700"
                  role="alert"
                >
                  <div>{errMsg}</div>
                </div>
              )}
              <div className="w-24 mx-auto mt-6 border-b-2" />
              <TextInput
                className="mt-10"
                label="Name"
                type="text"
                onchangeInput={(e) => setState({ ...state, name: e })}
                autofocus
                autocapitalize="off"
                inputId="name"
              />
              <TextInput
                className="mt-10"
                label="Email"
                type="email"
                onchangeInput={(e) => setState({ ...state, email: e })}
                autofocus
                autocapitalize="off"
                inputId="email"
              />
              <TextInput
                className="mt-6"
                label="Password"
                type="password"
                inputId="password"
                onchangeInput={(e) => setState({ ...state, password: e })}
              />
              <label
                className="flex items-center mt-6 select-none"
                htmlFor="remember"
              >
                <input
                  id="remember"
                  v-model="form.remember"
                  className="mr-1"
                  type="checkbox"
                />
                <span className="text-sm">Remember Me</span>
              </label>
            </div>
            <div className="flex px-10 py-4 bg-gray-100 border-t border-gray-100">
              <Link to="/login">
                <button className="btn-indigo flex " type="button">
                  Login
                </button>
              </Link>

              {btnLoading ? (
                <button
                  type="button"
                  className="btn-indigo ml-auto flex items-center"
                  disabled
                >
                  <svg
                    fill="white"
                    className="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.344 19.442l-1.186 1.628c-2.305-1.995-3.842-4.85-4.107-8.07h2c.255 2.553 1.48 4.819 3.293 6.442zm16.605-6.442c-.256 2.56-1.487 4.831-3.308 6.455l1.183 1.631c2.315-1.997 3.858-4.858 4.125-8.086h-2zm-19.898-2c.256-2.561 1.487-4.832 3.309-6.456l-1.183-1.631c-2.317 1.996-3.86 4.858-4.126 8.087h2zm4.927-7.633c1.477-.864 3.19-1.367 5.022-1.367 1.839 0 3.558.507 5.039 1.377l1.183-1.624c-1.817-1.105-3.941-1.753-6.222-1.753-2.272 0-4.39.644-6.201 1.741l1.179 1.626zm12.863-.438l-1.186 1.628c1.813 1.624 3.039 3.889 3.294 6.443h2c-.265-3.221-1.802-6.076-4.108-8.071zm-2.817 17.703c-1.478.864-3.192 1.368-5.024 1.368-1.84 0-3.56-.508-5.042-1.378l-1.183 1.624c1.818 1.106 3.943 1.754 6.225 1.754 2.273 0 4.392-.644 6.203-1.742l-1.179-1.626z" />
                  </svg>
                  Processing...
                </button>
              ) : (
                <button
                  className="btn-indigo ml-auto flex items-center"
                  type="button"
                  onClick={(e) => SignUp()}
                >
                  SignUp
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);
