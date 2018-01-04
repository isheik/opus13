const initialState = {
    tasks: [],
    text: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTASK': {
            return {
                tasks: state.tasks.concat(action.value),
            };
        }
        case 'ENDTASK': {
            return {
                tasks: action.value,
            };
        }
        case 'UPDTASK': {
            return {
                tasks: action.value,
            };
        }
        case 'DELTASK': {
            return {
                tasks: action.value,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;