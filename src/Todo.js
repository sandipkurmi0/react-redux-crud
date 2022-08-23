import { connect } from "react-redux";
import { counterPluse } from "./stores/todo/actions";
function Todo(props) {
  const CountChange = async () => {
    await props.counterPluse(props.counts + 1);
  };

  const resetCount = async () => {
    await props.counterPluse(0);
  };

  const minusCount = async () => {
    await props.counterPluse(parseInt(props.counts) - 1);
  };
  return (
    <>
      <div>
        <h2>{props.counts}</h2>
        <div className="grid grid-cols-3 gap-x-6 pt-3">
          <button className="btn btn--success" onClick={() => CountChange()}>
            COUNT++
          </button>
          <button className="btn btn--danger" onClick={() => minusCount()}>
            COUNT--
          </button>
          {/* <button className="btn btn--primary">Accept</button> */}
          <button className="btn btn--warn" onClick={() => resetCount()}>
            RESET COUNT
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  counts: state.todo.counter,
});

const mapDispatchToProps = {
  counterPluse,
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
