import { connect } from "react-redux";

const TextInput = (props) => {
  const changeInput = (e) => {
    props.onchangeInput(e.target.value);
  };
  return (
    <>
      <div className={props.className}>
        <label v-if="label" className="form-label" htmlFor={props.inputId}>
          {props.label}:
        </label>
        <input
          id={props.inputId}
          className="form-input"
          type={props.type}
          value={props.modelValue}
          onChange={(e) => changeInput(e)}
        />
        {/* <div v-if="error" className="form-error">{{ error }}</div> */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
