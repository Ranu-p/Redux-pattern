import { PARKINID, PARKINGADDRESS, PARKINGTIME, PARKINGLATLONG, PARKINGINDEX, CLEAR_PARKING_DETAILS } from "../../actions/parkingdetails/action-names";

interface ParkingState {
 isLoading: boolean;
 parkingid: any;
 parkingAddress: string;
 parkingtime: any;
 parkingindex: number;
 parkinglatlong: any;
}

const initialState: ParkingState = {
 isLoading: false,
 parkingid: 890,
 parkingAddress: "palasiya",
 parkingtime: "6:40",
 parkingindex: 0,
 parkinglatlong: null,
};

export default function parkingreducer(
 state: ParkingState = initialState,
 action: any
): ParkingState {
  console.log("actionuiuiuiuiu", action.type)
 switch (action.type) {
  case PARKINID:
   return {
    ...state,
     parkingid: action.parkingid,
    isLoading: false,
   };

  case PARKINGADDRESS:
   return {
    ...state,
    parkingAddress: action.parkingAddress,
    isLoading: false,
   };

  case PARKINGTIME:
   return {
    ...state,
    parkingtime: action.parkingtime,
    isLoading: false,
   };

  case PARKINGINDEX:
   return {
    ...state,
    parkingindex: action.parkingindex,
    isLoading: false,
   };

  case PARKINGLATLONG:
   return {
    ...state,
    parkinglatlong: action.parkinglatlong,
    isLoading: false,
   };

  case CLEAR_PARKING_DETAILS:
   return {
    ...initialState
   };
  default:
   return state;
 }
}
