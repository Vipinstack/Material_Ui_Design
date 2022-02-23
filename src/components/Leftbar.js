import { Container, makeStyles, Typography} from "@material-ui/core";
import { Home, Person,List, PhotoCamera, PlayCircleOutline, TabletMac, Bookmark, Storefront, Settings, ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  Container: {
    height:"100vh",
    color:"white",
    paddingTop:theme.spacing(10),
    position:"sticky",
    top:0,
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      backgroundColor:"white",
      color:"#555",
      border:"1px solid #ece7e7",
    
    },    
  },
  items:{
      display:"flex",
      alignItems:"center",
      paddingBottom:theme.spacing(4),

      [theme.breakpoints.up("sm")]:{
      paddingBottom:theme.spacing(3),
      cursor:"pointer"

      },
  },
  icons:{
    marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize:"18px"
    },
  },

  text:{
    fontWeight:500,
      [theme.breakpoints.down("sm")]:{
      display:"none"

      },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.Container}>
        <div className={classes.items}>
          <Home className={classes.icons} />
          <Typography className={classes.text}>HomePage</Typography>
        </div>{" "}
        <div className={classes.items}>
          <Person className={classes.icons} />
          <Typography className={classes.text}>Friends</Typography>
        </div>{" "}
        <div className={classes.items}>
          <List className={classes.icons} />
          <Typography className={classes.text}>Lists</Typography>
        </div>{" "}
        <div className={classes.items}>
          <PhotoCamera className={classes.icons} />
          <Typography className={classes.text}>Camera</Typography>
        </div>{" "}
        <div className={classes.items}>
          <PlayCircleOutline className={classes.icons} />
          <Typography className={classes.text}>Videos</Typography>
        </div>{" "}
        <div className={classes.items}>
          <TabletMac className={classes.icons} />
          <Typography className={classes.text}>Apps</Typography>
        </div>{" "}
        <div className={classes.items}>
          <Bookmark className={classes.icons} />
          <Typography className={classes.text}>Collections</Typography>
        </div>{" "}
    
        <div className={classes.items}>
          <Storefront className={classes.icons} />
          <Typography className={classes.text}>Market Place</Typography>
        </div>{" "}
    
        <div className={classes.items}>
          <Settings className={classes.icons} />
          <Typography className={classes.text}>Settings</Typography>
        </div>{" "}
        <div className={classes.items}>
          <ExitToApp className={classes.icons} />
          <Typography className={classes.text}>LogOut</Typography>
        </div>{" "}
    
      </Container>
    </>
  );
};

export default Leftbar;
