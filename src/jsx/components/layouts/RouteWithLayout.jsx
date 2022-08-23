import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
const RouteWithLayout = (props) => {
    const {
        component: Component,
        restricted,
        access,
        ...rest
      } = props;

      console.log(props)
      if (access === "public")
      return (
        <Route
          {...rest}
          render={(matchProps) =>
            (props.token !== null) && restricted ? (
              <Redirect to="/dashboard" />
            ) : (
              <Component {...matchProps} />
            )
          }
        />
      );
    else if (access === "private")
      return (
        <Route
            {...rest}
            render={(matchProps) =>
            (props.token !== null) ? (
                <Component {...matchProps} />
            ) : (
                <Redirect to="/login" />
            )
            }
        />
      );
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
  });
  const mapDispatchToProps = {
    
  };
  export default connect(mapStateToProps, mapDispatchToProps)(RouteWithLayout);