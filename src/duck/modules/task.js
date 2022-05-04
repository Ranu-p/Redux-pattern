
//action type
const TODO_LIST = "TODO_LIST";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function todoListUpDateID(payload) {
  return {
    type: TODO_LIST,
    payload
  }
}


// export const todoActions = {
//   todoList,
// };


const initialState = {
  id: 2,
};


//reducers
// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function reducer(state = initialState, action,) {
  switch (action.type) {
    case TODO_LIST:
      return {
        ...state,
        id: action.payload
      };

    default:
      return state;
  }
}

