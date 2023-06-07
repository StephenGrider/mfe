import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const CallToAction = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={{ xs: 'stretched', sm: 'flex-start', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box maxWidth={{ xs: '100%', md: '70%' }}>
        <Typography variant={'h6'} gutterBottom>
        For Change  for impact  to advance

        </Typography>
        <Typography color="text.secondary">
        Digital platform solutions for the real estate industry supply chain
        </Typography>
      </Box>
      <Link href="https://calendly.com/kyanite360" target="_blank">
                    <Button variant={'contained'} color={'primary'} size={'large'}>
                    Book a call
                    </Button>
                  </Link>
    </Box>
  );
};

export default CallToAction;
