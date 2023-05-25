import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
  }
  
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  useEffect(()=>{
    sessionStorage.clear();
        },[]);
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <img src={require("./header.jpg").default} alt="header"  className={classes.headerImg} />
          <Container maxWidth="sm" style={{color: "#FFF", backgroundColor: "rgb(0 0 0 / 77%)", borderRadius: "50px", padding: "50px"}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              to={"/"}
            >
              {/* Welcome To <br/>  */}
              <img src={require("./logo.svg").default} alt="logo" style={{width:"300px"}}  />
              
            </Typography>
            <Typography
              variant="h5"
              align="center"
              paragraph
            >
              Kyanite360 - Digital platform solutions developer. We develop and deploy technology enabled systems to leverage physical assets, investments, products, services and capabilities with data and algorithms.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <MaterialLink href="https://calendly.com/kyanite360" target="_blank">
                    <Button variant="contained" color="primary">
                    Book a call
                    </Button>
                  </MaterialLink>
                </Grid>
                <Grid item>
                  <MaterialLink href="/contact">
                    <Button variant="outlined" color="primary">
                    Contact us
                    </Button>
                  </MaterialLink>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
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
      </main>
      {/* Footer */}
    
      {/* End footer */}
    </React.Fragment>
  );
}
