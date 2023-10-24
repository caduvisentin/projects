type ActionType = {
    type: string,
    payload: number,
}

const INITIAL_STATE = {
    count: 0,
    click: 10,
}

const counterReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                count: state.count+action.payload,
            }

        case "INCREMENT_CLICK":
            return {
                ...state,
                click: state.click+1,
            }

        default: return state;
    }
};

export default counterReducer;