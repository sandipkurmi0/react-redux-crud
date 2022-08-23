import { useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategory,
  deleteCategory,
} from "../../../stores/category/actions";

const CategoryIndex = (props) => {
  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    if (props.categories.length === 0) {
      await props.getAllCategory();
    }
  };

  const deleteCategory = async (id) => {
    await props.deleteCategory(id);
  };
  return (
    <>
      <div className="flex flex-col justify-center h-full px-6 py-8">
        <div className="w-full mx-auto space-y-6 bg-white border border-gray-200 shadow-lg rounded-xl">
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-800">Category</h2>
              </div>
              <div>
                <Link to="/category/add">
                  <button className="btn btn-indigo">Add Category</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="text-xs font-semibold text-gray-400 uppercase bg-gray-50 ">
                  <tr>
                    <th className="p-2 whitespace-nowrap ">
                      <div className="font-semibold text-center">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap ">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                {props.categories.map((category, index) => (
                  <tbody
                    className="text-sm divide-y divide-gray-100"
                    key={index}
                  >
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">
                          {category.Categoryname}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap flex item-center justify-center">
                        <Link to={`/category/edit/${category._id}`}>
                          <button className="mr-1 btn btn-indigo">Edit</button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => deleteCategory(category._id)}
                        >
                          Delete
                        </button>
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
  );
};

//coming from reducer
const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

//for action props
const mapDispatchToProps = {
  getAllCategory,
  deleteCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
