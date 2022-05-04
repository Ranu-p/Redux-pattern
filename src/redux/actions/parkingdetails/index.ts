import {
  PARKINID, PARKINGADDRESS, PARKINGTIME, PARKINGINDEX, PARKINGLATLONG, CLEAR_PARKING_DETAILS
} from "./action-names";

const addId = (id: number) => {
  return {
    type: PARKINID,
    parkingid: id,
  };
}

const addTime = (time: any) => {
  return {
    type: PARKINGTIME,
    parkingtime: time,
  };
}
const addAddress = (address: string) => {
  return {
    type: PARKINGADDRESS,
    parkingAddress: address,
  };
}
const addIndex = (index: number) => {
  return {
    type: PARKINGINDEX,
    parkingindex: index,
  };
}
const addLatlong = (latlong: any) => {
  return {
    type: PARKINGLATLONG,
    parkinglatlong: latlong,
  };
}
const clearParkingDetails = () => {
  return {
    type: CLEAR_PARKING_DETAILS
  };
}

export const parkingActions = {
  addId,
  addTime,
  addAddress,
  addIndex,
  addLatlong,
  clearParkingDetails
};

