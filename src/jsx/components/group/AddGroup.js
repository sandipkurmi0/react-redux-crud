import React from "react";
import { useState } from "react";
import { connect } from "react-redux/es/exports";
import { useHistory } from "react-router-dom";
import { addGroup } from "../../../stores/group/action";

const AddGroup = (props) => {
  const history = useHistory();
  const [btnLoading, setBtnLoading] = useState(false);
  const [handleOnSubmitBtnSave, setHandleOnSubmitBtnSave] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const csvArray = [...array];
  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = () => {
    setHandleOnSubmitBtnSave(!false);
    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const createGroup = async () => {
    setBtnLoading(true);
    try {
      if (csvArray !== []) {
        const data = {
          groupName,
          csvArray,
        };
        const response = await props.addGroup(data);
        setBtnLoading(false);
        if (response) {
          history.push("/group");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center h-full px-6 py-8">
        <div className="w-full mx-auto space-y-6 bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-800">Add Group</h2>
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
              <div className="mb-6">
                <label
                  htmlFor="test"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Group Name
                </label>
                <input
                  type="text"
                  id="test"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Group Name"
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </div>
              <div className="flex justify-evenly mb-5">
                <label>
                  <span className="sr-only">Choose your csv File</span>
                  <input
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100
                    "
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleOnChange}
                  />
                </label>

                {handleOnSubmitBtnSave ? ( // <button
                  <button
                    type="button"
                    className="btn-indigo ml-auto flex items-center cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    disabled=""
                  >
                    Saved
                  </button>
                ) : (
                  <button
                    className="btn-indigo ml-auto flex items-center"
                    type="button"
                    onClick={handleOnSubmit}
                  >
                    IMPORT CSV
                  </button>
                )}
              </div>
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
                    onClick={createGroup}
                  >
                    Create Group
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
  addGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);
