import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

const useStyles = makeStyles(theme=>({
  right:{
    display:"none",
    [theme.breakpoints.up('sm')]:{
      display:"block"
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
     <Navbar />
     <Grid container >
       <Grid items sm={2} xs={2}>
         <Leftbar />
       </Grid>
       <Grid items sm={7} xs={10}>
         <Feed />
       </Grid>
       <Grid items sm={3} className={classes.right}>
         <Rightbar />
       </Grid>
     </Grid>
     <Add />
    </>
  );
}

export default App;
