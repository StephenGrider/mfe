import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TeamWorkingIllustration from './TeamWorking';
import { Link } from '@material-ui/core';

const WhyUs = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          data-aos={'fade-up'}
        >
         Digital platform solutions for 
          <br />
          the real estate industry supply chain
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos={'fade-up'}
        >Kyanite360 - Digital platform solutions developer. 
          <br />We develop and deploy technology enabled systems to leverage physical assets,
          <br /> investments, products, services and capabilities with data and algorithms.
            
        </Typography>
        <Box
          marginTop={3}
          display={'flex'}
          justifyContent={'center'}
          data-aos={'fade-up'}
        >
            <Link href="https://calendly.com/kyanite360" target="_blank">
                    <Button variant={'contained'} color={'primary'} size={'large'}>
                    Book a call
                    </Button>
                  </Link>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'} maxWidth={600} data-aos={'fade-up'}>
          <TeamWorkingIllustration height={'100%'} width={'100%'} />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;
