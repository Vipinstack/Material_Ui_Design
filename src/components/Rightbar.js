import {
  makeStyles,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Link,
  Divider
  
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  link:{
    marginRight:theme.spacing(2)
  },
  
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.Container}>
        <Typography>Online Friends</Typography>

        <AvatarGroup max={4} style={{marginBottom:20}}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869__340.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.pixabay.com/photo/2016/05/23/23/32/human-1411499__340.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231__340.jpg"
          />
        </AvatarGroup>

        {/* {<br/>} */}
        <Typography gutterBottom >Images list</Typography>

        <ImageList rowHeight={100} cols={2} style={{marginBottom:20}} >
          <ImageListItem> 
            <img
              src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/morning.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/hats.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/honey.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography gutterBottom >Categories</Typography>
        
        <Link href="#"  variant="body2" className={classes.link}>
          Sports
        </Link>
        <Link href="#"  variant="body2" className={classes.link}>
          Food
        </Link>
        <Link href="#"  variant="body2" className={classes.link}>
          Movies
        </Link>
        <Divider flexItem style={{marginBottom:6}} />
        <Link href="#"  variant="body2" className={classes.link}>
          Sports
        </Link>
        <Link href="#"  variant="body2" className={classes.link}>
          Food
        </Link>
        <Link href="#"  variant="body2" className={classes.link}>
          Movies
        </Link>
      </Container>
    </>
  );
};

export default Rightbar;
