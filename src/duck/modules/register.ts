
//action type
const UPDATE_REGISTER = "UPDATE_REGISTER";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function updateRegisterState(payload: { name: string, email: string }) {
 return {
  type: UPDATE_REGISTER,
  payload
 }
}


// export const todoActions = {
//   todoList,
// };


const initialState = {
 name: "",
 email: ""
};


//reducers
// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function reducer(state = initialState, action: any) {
 switch (action.type) {
  case UPDATE_REGISTER:
   return {
    ...state,
    name: action.payload.name,
    email: action.payload.email
   };

  default:
   return state;
 }
}

