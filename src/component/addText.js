import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function BasicTextFields({ availableImageTypes, onCancel, onDone }) {
 console.log("availableImageTypes", availableImageTypes);
 console.log("onCancel", onCancel);
 console.log("onDone", onDone);

 let selectedImage = "long";
 let imageType = "mg3";

 const validateData = () => {
  onDone(selectedImage, imageType)
 }

 return (
  <>
   <form noValidate autoComplete="off">
    <TextField id="standard-basic" label="Standard" />
   </form>
   <Button variant="contained" color="primary" onClick={validateData}
   >
    Primary
   </Button>
   <Button variant="contained" color="secondary" onClick={onCancel}>
    Secondary
   </Button>
  </>
 );
}

export default BasicTextFields;