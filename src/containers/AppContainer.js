import { connect } from "react-redux";
import App from "../components/App";
import Actions from "../actions/AppActions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleTodoAdd(value) {
            dispatch(Actions.addTodo(value));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));