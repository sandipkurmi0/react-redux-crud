import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getAllContactByGroup,
  deleteContatAndGroup,
} from "../../../stores/contact/action";

const ContactIndex = (props) => {
  const history = useHistory();

  useEffect(() => {
    getAllContactByGroup();
  }, []);

  const getAllContactByGroup = async () => {
    await props.getAllContactByGroup(props.match.params.id);
  };

  const deleteContcactAndGroup = async (id) => {
    const groupId = props.match.params.id;
    await props.deleteContatAndGroup(id, groupId);
  };

  return (
    <div>
      <>
        <div className="flex flex-col justify-center h-full px-6 py-8">
          <div className="w-full mx-auto space-y-6 bg-white border border-gray-200 shadow-lg rounded-xl">
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-800">Contact</h2>
                </div>
                <div>
                  <Link to={`/group/${props.match.params.id}/contact-add`}>
                    <button className="btn btn-indigo mr-4">Add Contact</button>
                  </Link>
                  <button className="btn btn-danger" onClick={history.goBack}>
                    back
                  </button>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Id</th>
                      <th className="py-3 px-6 text-left">Name </th>
                      <th className="py-3 px-6 text-left">Email</th>
                      <th className="py-3 px-6 text-left">Phone</th>
                      <th className="py-3 px-6 text-center">Status</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  {props.contacts.map((contact, index) => (
                    <tbody
                      className="text-gray-600 text-sm font-light"
                      key={contact._id}
                    >
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">{index + 1}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <span>{contact.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <span>{contact.email}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <span>{contact.phone}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                            {contact.status}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <Link
                              to={`/group/${props.match.params.id}/contact-edit/${contact._id}`}
                            >
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
                            <div
                              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                              onClick={() =>
                                deleteContcactAndGroup(contact._id)
                              }
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
  contacts: state.contact.contacts,
});

//for action props
const mapDispatchToProps = {
  getAllContactByGroup,
  deleteContatAndGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactIndex);
