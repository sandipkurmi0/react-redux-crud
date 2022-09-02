import { useState, useEffect } from "react";
import { connect } from "react-redux/es/exports";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../layouts/shared/TextInput";
import { addContact, updateContact } from "../../../stores/contact/action";
// useNavigate
const AddContact = (props) => {
  const history = useHistory();
  const [btnLoading, setBtnLoading] = useState(false);
  const [pageName, setPageName] = useState("Add Contact");
  const [btnName, setBtnName] = useState("Create");
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    groupId: props.match.params.id,
  });

  const addContact = async () => {
    setBtnLoading(true);
    if (props.match.params.contactId) {
      await props.updateContact(
        state,
        props.match.params.contactId,
        props.match.params.id
      );
    } else {
      await props.addContact(state, props.match.params.id);
    }
    history.push(`/group/${props.match.params.id}`);
    setBtnLoading(false);
  };

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    if (props.match.params.contactId) {
      setPageName("Edit Contact");
      setBtnName("Update");
    } else {
      setPageName("Add Contact");
      setBtnName("Create");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center h-full px-6 py-8">
        <div className="w-full mx-auto space-y-6 bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-800">{pageName}</h2>
              </div>
              <div>
                <button className="btn btn-danger" onClick={history.goBack}>
                  back
                </button>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <TextInput
                className="mt-0"
                label="Name"
                type="text"
                onchangeInput={(e) => setState({ ...state, name: e })}
                autofocus
                autocapitalize="off"
                inputId="ContactName"
              />
              <TextInput
                className="mt-0"
                label="Email"
                type="email"
                onchangeInput={(e) => setState({ ...state, email: e })}
                autofocus
                autocapitalize="off"
                inputId="ContactEmail"
              />
              <TextInput
                className="mt-0"
                label="Phone"
                type="text"
                onchangeInput={(e) => setState({ ...state, phone: e })}
                autofocus
                autocapitalize="off"
                inputId="ContactNumber"
              />
              <TextInput
                className="mt-0"
                label="Status"
                type="text"
                onchangeInput={(e) => setState({ ...state, status: e })}
                autofocus
                autocapitalize="off"
                inputId="ContactStatus"
              />
              <div className="flex px-10 py-4 border-t">
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
                    onClick={(e) => addContact()}
                  >
                    {btnName}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addContact,
  updateContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
