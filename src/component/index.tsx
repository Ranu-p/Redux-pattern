import React, { useEffect } from 'react';
import {
 Button,
 TextField,
 Grid,
 Box,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegisterState } from '../duck/modules/register';
import { Xyz } from '../duck';
import ModalX from './modal';




export default function Register(): JSX.Element {
 const [seq, setSeq] = React.useState(0);

 const { register, handleSubmit, errors, setValue } = useForm<{ name: string, email: string }>({
  mode: 'onBlur',
 });
 const dispatch = useDispatch();
 const registerState = useSelector((state: Xyz) => state.register);

 useEffect(() => {
  console.log("====registerState====", registerState);
 }, [registerState])



 /**
  * This.function is used for submitform data to DB.
  * @param data (form data)
  * @param event
  */
 const handleFormSubmit = (data: any, event: any) => {
  event.preventDefault();
  const paylaod = {
   ...data
  };
  console.log("====register obj===", paylaod);
  dispatch(updateRegisterState(paylaod))
 };




 return (
  <React.Fragment>
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
          <Grid item className="left-align-css">
           <PermIdentityOutlinedIcon style={errors.name ? { marginBottom: 20 } : {}} />
          </Grid>
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
          <Grid item className="left-align-css">
           <MailOutlineIcon style={errors.email ? { marginBottom: 20 } : {}} />
          </Grid>
          <Grid item xs={10} md={11} lg={11}>
           <TextField
            key={seq}
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
   <ModalX />
  </React.Fragment>
 );
}
