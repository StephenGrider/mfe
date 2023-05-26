import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from '@material-ui/core/CardMedia';

const Team = () => {
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
          Our team
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Trust the professionals
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            name: 'Chary Smith',
            title: 'SEO at Comoti',
            avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
          },
          {
            name: 'Clara Bertoletti',
            title: 'Junior Designer',
            avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
          },
          {
            name: 'Jhon Anderson',
            title: 'Senior Frontend Developer',
            avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
          },
          {
            name: 'Chary Smith',
            title: 'SEO at Comoti',
            avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box component={Card} boxShadow={0} bgcolor={'transparent'}>
              <Box
                component={CardMedia}
                borderRadius={2}
                width={'100%'}
                height={'100%'}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={'transparent'}
                marginTop={-5}
              >
                <Box component={Card} borderRadius={2}>
                  <CardContent>
                    <ListItemText primary={item.name} secondary={item.title} />
                  </CardContent>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
