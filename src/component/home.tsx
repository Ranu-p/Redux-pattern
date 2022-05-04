
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";
import { parkingActions } from '../redux/actions';
import { RootState } from "../redux/reducers";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const parkingState = useSelector((state: RootState) => state.Parkingdetails);

  console.log("parkingState", parkingState);

  const SubmitData = () => {

    dispatch(parkingActions.addAddress("vijaynager"));
    dispatch(parkingActions.addLatlong("7878778"));
    dispatch(parkingActions.addIndex(4));
    dispatch(parkingActions.addTime("9:00"));
    dispatch(parkingActions.addId(77));

  }

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={1}>


        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>1</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>parking id </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{parkingState.parkingid}</Paper>
          </Grid>
        </Grid>


        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>2</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>parking address</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{parkingState.parkingAddress}</Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>3</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>parking Time</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{parkingState.parkingtime}</Paper>
          </Grid>
        </Grid>
      </Grid> */}

    </div>
  );
}

