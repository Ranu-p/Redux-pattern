import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Xyz } from '../duck';
import Modal from '@material-ui/core/Modal';
import {
 Button,
 TextField,
 Grid,
 Box,
} from '@material-ui/core';
import { updateRegisterState } from '../duck/modules/register';
import { useForm } from 'react-hook-form';

export default function ModalX() {
 const [open, setOpen] = React.useState(false);
 const { register, handleSubmit, errors, setValue } = useForm<{ name: string, email: string }>({
  mode: 'onBlur',
 });
 const dispatch = useDispatch();
 const registerState = useSelector((state: Xyz) => state.register);
 const handleOpen = () => {
  setOpen(true);
 };

 useEffect(() => {
  if (open) {
   setValue("name","PAnkaj")
  }
 },[open])

 const handleClose = () => {
  setOpen(false);
 };

 const handleFormSubmit = (data: any, event: any) => {
  event.preventDefault();
  const paylaod = {
   ...data
  };
  console.log("====register obj===", paylaod);
  dispatch(updateRegisterState(paylaod))
 };

 return (
  <div>
   <button type="button" onClick={handleOpen}>
    Open Modal
   </button>
   <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
   >
    <form onSubmit={handleSubmit(handleFormSubmit)}>
     <div>
      <Grid container className="v100">


       <Grid item xs={12} md={7} lg={7}>
        <Box className="right-side">


         <div className="margin">
          <Grid
           container
           spacing={1}
           alignItems="flex-end"
           className="mb-30"
          >

           <Grid item xs={10} md={11} lg={11}>
            <TextField
             fullWidth
             label={"Name"}
             name="name"
             id="register-name"
             type="text"
             error={errors.name ? true : false}
             inputRef={register({
              required: "name",
             })}
             inputProps={{ maxLength: 50 }}
             helperText={errors.name && errors.name.message}
            />
           </Grid>
          </Grid>
         </div>

         <div className="margin">
          <Grid
           container
           spacing={1}
           alignItems="flex-end"
           className="mb-30"
          >

           <Grid item xs={10} md={11} lg={11}>
            <TextField
             fullWidth
             type="email"

             label={'Email id'}
             id="register-email"
             name="email"

             error={errors.email ? true : false}
             inputProps={{ maxLength: 100 }}
             inputRef={register({
              required: "email",

             })}
             helperText={errors.email && errors.email.message}
            />
           </Grid>
          </Grid>
         </div>
         <Box>
          <Button
           variant="outlined"
           className="primary-outline-btn mt-30"
           color="primary"
           type="submit"
          >
           Submit
          </Button>
         </Box>

        </Box>
       </Grid>
      </Grid>
     </div>
    </form>
   </Modal>
  </div>
 )
}
