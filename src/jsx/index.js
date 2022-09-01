import React from "react";
/// React router dom
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";
//components
import RouteWithLayout from "../jsx/components/layouts/RouteWithLayout";
import Todo from "../Todo";
import Login from "./components/pages/Auth/Login";
import SignUp from "./components/pages/Auth/SignUp";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Home from "./components/dashboard/Home";
import CategoryIndex from "./components/category/CategoryIndex";
import AddCategory from "./components/category/AddCategory";
import BlogIndex from "./components/blog/BlogIndex";
import AddBlog from "./components/blog/AddBlog";
import GroupIndex from "./components/group/GroupIndex";
import AddGroup from "./components/group/AddGroup";

const Markup = (props) => {
  const routes = [
    { url: "login", component: Login, access: "public", restricted: true },
    { url: "signup", component: SignUp, access: "public", restricted: true },

    { url: "todo", component: Todo, access: "private", restricted: false },
    { url: "dashboard", component: Home, access: "private", restricted: false },
    //category
    {
      url: "category",
      component: CategoryIndex,
      access: "private",
      restricted: false,
    },
    {
      url: "category/add",
      component: AddCategory,
      access: "private",
      restricted: false,
    },
    {
      url: "category/edit/:id",
      component: AddCategory,
      access: "private",
      restricted: false,
    },
    //blog
    { url: "Blog", component: BlogIndex, access: "private", restricted: false },
    {
      url: "Blog/add",
      component: AddBlog,
      access: "private",
      restricted: false,
    },
    {
      url: "Blog/edit/:id",
      component: AddBlog,
      access: "private",
      restricted: false,
    },

    //group
    {
      url: "group",
      component: GroupIndex,
      access: "private",
      restricted: false,
    },
    {
      url: "group/add",
      component: AddGroup,
      access: "private",
      restricted: false,
    },
    {
      url: "group/edit/:id",
      component: AddGroup,
      access: "private",
      restricted: false,
    },
  ];
  return (
    <Router basename="/">
      {props.token ? <Sidebar /> : ""}
      {/* {props.token ? <Nav /> : ""} */}
      {props.token ? (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <Header />
          <Switch>
            <Redirect exact from="/" to="/login" />
            {routes.map((data, i) => (
              <RouteWithLayout
                key={i}
                exact
                path={`/${data.url}`}
                component={data.component}
                access={data.access}
                restricted={data.restricted}
              />
            ))}
          </Switch>
        </div>
      ) : (
        <Switch>
          <Redirect exact from="/" to="/login" />
          {routes.map((data, i) => (
            <RouteWithLayout
              key={i}
              exact
              path={`/${data.url}`}
              component={data.component}
              access={data.access}
              restricted={data.restricted}
            />
          ))}
        </Switch>
      )}
    </Router>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Markup);
