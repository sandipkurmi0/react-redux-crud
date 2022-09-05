import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllGroup,
  deleteGroupAndContact,
} from "../../../stores/group/action";
import LoadingOverlay from "react-loading-overlay";
//import BounceLoader from "react-spinners/BounceLoader";
import styled, { css } from "styled-components";
import "../../../index.css";

const GroupIndex = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deletItem, setDeletItem] = useState("test");

  console.log(props);
  const DarkBackground = styled.div`
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 999; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */

    ${(props) =>
      props &&
      css`
        display: block; /* show */
      `}
  `;

  useEffect(() => {
    getAllGroup();
  }, []);

  const getAllGroup = async () => {
    setLoaded(!false);
    await props.getAllGroup();
    setLoaded(!true);
  };

  const deleteGroup = async (id) => {
    setDeleteLoading(!false);
    setDeletItem(id);
    await props.deleteGroupAndContact(id);

    setDeleteLoading(!true);
  };

  return (
    <div>
      <>
        <div Name="flex flex-col justify-center h-full px-6 py-8">
          <div className="w-full mx-auto space-y-6 bg-white border border-gray-200 shadow-lg rounded-xl">
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-800">Groups</h2>
                </div>
                <div>
                  <Link to="group/add-group">
                    <button className="btn btn-indigo ">Add Group</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                {loaded ? (
                  <DarkBackground disappear={!loaded}>
                    {/* <Loader
                      loaded={false}
                      lines={13}
                      length={20}
                      width={10}
                      radius={30}
                      corners={1}
                      rotate={0}
                      direction={1}
                      color="#a5d8ff"
                      speed={1}
                      trail={60}
                      shadow={false}
                      hwaccel={false}
                      className="spinner"
                      zIndex={2e9}
                      top="50%"
                      left="50%"
                      scale={1.0}
                      loadedClassName="loadedContent"
                    />*/}
                    <LoadingOverlay
                      active={true}
                      // spinner={<BounceLoader />}
                      spinner={true}
                      text="Loading your content..."
                    >
                      {/* <p>Some content or children or something.</p> */}
                    </LoadingOverlay>
                  </DarkBackground>
                ) : (
                  ""
                )}
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
                      <th className="py-3 px-6 text-center">id</th>
                      <th className="py-3 px-6 text-center">Group name</th>
                      <th className="py-3 px-6 text-center">Total contacts</th>
                      <th className="py-3 px-6 text-center">Total pending</th>
                      <th className="py-3 px-6 text-center">Total paid</th>
                      <th className="py-3 px-6 text-center">Total approved</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  {props.groups.map((group, index) => (
                    <tbody
                      className="text-gray-600 text-sm font-light"
                      key={group._id}
                    >
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className=" flex justify-center"></div>
                            <span className="font-medium">{index + 1}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex justify-center">
                            <span>{group.groupName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex justify-center">
                            <span>{group.totalContact}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex justify-center">
                            <span>{group.totalPending}</span>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-center">
                          <div className="flex justify-center">
                            <span>{group.totalPaid}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex justify-center">
                            <span>{group.totalApproved}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <Link to={`group/${group._id}`}>
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </div>
                            </Link>
                            <Link to={`/group/edit/${group._id}`}>
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </div>
                            </Link>
                            {deleteLoading && deletItem === group._id ? (
                              <>
                                <svg
                                  class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                                <span class="sr-only">Loading...</span>
                              </>
                            ) : (
                              <div
                                className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                onClick={(e) => deleteGroup(group._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

//coming from reducer
const mapStateToProps = (state) => ({
  groups: state.group.groups,
});

//for action props
const mapDispatchToProps = {
  getAllGroup,
  deleteGroupAndContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
