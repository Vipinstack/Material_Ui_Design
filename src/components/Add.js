import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
  Container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  from:{
      padding:theme.spacing(2),
  },
  items:{
      marginBottom:theme.spacing(3),
  },
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const [openAlert, setOpenAlert] = useState();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.Container}>
          <from className={classes.from} autoComplete="off">
            <div className={classes.items}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.items}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Default Value"
                label="Description"
                variant="outlined"
                style={{ width: "100%" }}
              />

              <div className={classes.items}>
                <TextField select label="Visibility" value="Public">
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Service">Service</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                </TextField>
              </div>
            </div>
            <RadioGroup aria-label="gender" name="Every Body">
              <FormControlLabel
                value="Every Body"
                control={<Radio />}
                label="Every Body"
              />
              <FormControlLabel value="male" control={<Radio />} label="No Body" />
              <FormControlLabel
                value="No Body"
                control={<Radio />}
                label="No Body"
              />
              <FormControlLabel
                value="Anything"
                disabled
                control={<Radio />}
                label="(Anything option)"
              />
            </RadioGroup>
            <div className={classes.items}>
                <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={()=> setOpenAlert(true)}>Create</Button>
                <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
            </div>
          </from>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
