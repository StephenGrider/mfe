import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const Main = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Our work
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          data-aos={'fade-up'}
        >
          Our solutions & services
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
         Kyanite360 develops digital platform solutions for the Real estate industry supply chain. This includes the assets, operations and disciplines that feed it, i.e., Proptech, Plantech, Contech, Logistics and Utility provision. We offer the following solutions:
        </Typography>
      </Box>
      {/* <Grid container spacing={4}>
        {[
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img10.jpg',
            title: 'Curology',
            subtitle:
              'For healthy and beautiful skin, get skincare customized just for you from experts at Curology.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img7.jpg',
            title: 'Hubble',
            subtitle:
              'The more affordable daily contact lens. Modify or cancel anytime.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
            title: 'Larq',
            subtitle:
              'LARQ Bottle Benefit Edition. 0. Lives will be saved with access. to clean water.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img6.jpg',
            title: 'Curology',
            subtitle:
              'For healthy and beautiful skin, get skincare customized just for you from experts at Curology.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
            title: 'Hubble',
            subtitle:
              'The more affordable daily contact lens. Modify or cancel anytime.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img5.jpg',
            title: 'Larq',
            subtitle:
              'LARQ Bottle Benefit Edition. 0. Lives will be saved with access. to clean water.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
            title: 'Curology',
            subtitle:
              'For healthy and beautiful skin, get skincare customized just for you from experts at Curology.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
            title: 'Hubble',
            subtitle:
              'The more affordable daily contact lens. Modify or cancel anytime.',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box
              component={'a'}
              href={'#0'}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 240,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'left'}
                  >
                    {item.title}
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-end'}>
                  <Button size="small">Learn More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default Main;
