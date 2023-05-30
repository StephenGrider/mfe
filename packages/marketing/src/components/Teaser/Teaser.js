import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Teaser = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant="h3"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            One Platform. Multiple Benefits.
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h6" align={'center'} color={'textSecondary'}>
            With us as your expansion partner, you can quickly commence hiring
            overseas, without the burden of establishing costly foreign
            entities.
            <br />
            We tailor our process to the unique needs of your business, whether
            hiring one employee or many, and whether you’re hiring in one or
            multiple countries.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={'center'}
          alignItems={{ xs: 'stretched', sm: 'center' }}
        >
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={!isMd}
          >
            Get started
          </Box>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={!isMd}
            marginTop={{ xs: 1, sm: 0 }}
            marginLeft={{ sm: 2 }}
          >
            Learn more
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Teaser;
