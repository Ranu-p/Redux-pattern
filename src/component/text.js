import { randomUUID } from 'crypto';
import * as React from 'react';
//import AddText from './addText';
import AddText from './addText';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function BasicTextFields() {

 const imageWidget = (imageData, subtype) => {
  console.log("imageData", imageData);
  console.log("subtype", subtype);
 }
 const images = ["ranu", "mahima", "priyamnka"]
 
 return (
  <div>
   <h5>passing value to props</h5>
   <AddText
    availableImageTypes={images}
    onCancel="imagetoggle"
    onDone={(imageData, subtype) => imageWidget(imageData, subtype)}
   />

   {/* <Modal isOpen={imagemodal} toggle={imagetoggle}>
    <ModalHeader toggle={imagetoggle}>
     {"Add New  Image widget"}
    </ModalHeader>
    <ModalBody>
     <AddImageWidget
      availableImageTypes={images}
      onCancel={imagetoggle}
      onDone={(imageData, subtype) => imageWidget(imageData, subtype)}
     />
    </ModalBody>
   </Modal> */}
  </div>
 );
}

export default BasicTextFields;