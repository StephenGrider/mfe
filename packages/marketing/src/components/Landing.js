import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import WhyUs from './WhyUs/WhyUs';
import Reviews from './Reviews/Reviews';
import Team from './Team/Team';
import Main from './Main/Main';
import CallToAction from './CallToAction/CallToAction';
import Teaser from './Teaser/Teaser';
import { Box } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#f2f2f2",
    padding: theme.spacing(8, 0, 0),
    // background:url("./header.jpg"),
    // backgroundAttachment:"fixed",
    // backgroundPosition:"left top"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  headerImg:{
    position: "absolute",
    height: "600px",
    top: "0",
    zIndex: "-1",
    width: "100%",
    opacity: "0.7",
  },
  callToAction:{
    backgroundColor: "#f2f2f2",
    width: "100%",
    paddingBottom: "33px"
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const theme = useTheme();
  useEffect(()=>{
    sessionStorage.clear();
        },[]);
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <WhyUs />
         <span >
         <svg style={{    marginBottom: "-10px"}} className="MuiBox-root css-1fcrnke" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1"><path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path></svg>
          </span> 
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Main />
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
         
        </Container>
        
        {/* <Container >
          <Teaser />
        </Container> */}
        <Container >
          <Team />
        </Container>
        <div className={classes.callToAction}>
        <svg style={{    marginBottom: "-10px", transform: "rotateX(180deg)"}} className="MuiBox-root css-1fcrnke" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1"><path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path></svg>
        <Container  maxWidth="md">
        <CallToAction />
        </Container>
        </div>
      </main>
      {/* Footer */}
    
      {/* End footer */}
    </React.Fragment>
  );
}
