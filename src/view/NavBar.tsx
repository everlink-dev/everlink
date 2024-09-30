import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const styles = {
  mainContainer: {
    height: '72px',
    borderBottom: '1px solid #F0F0F0',
    display: 'flex',
  },
  innerContainer: {
    width: '90%',
    m: 'auto',
  },
  Box: {
    display: 'flex',
    gap: '7px',
  },
  typography: {
    my: 'auto',
    fontSize: '21px',
  },
};
export default function NavBar() {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.Box}>
          <Image src={'/Frame.svg'} alt='Nav Icon' height={28} width={28} />
          <Typography sx={styles.typography}>EVERLINK</Typography>
        </Box>
      </Box>
    </Box>
  );
}
