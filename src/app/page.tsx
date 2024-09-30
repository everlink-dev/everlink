import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';

const styles = {
  outerBox: {
    backgroundImage: "url('/LandingBackground.png')",
    backgroundRepeat: 'round',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
    my: 12,
  },
  containerBox: {
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '24px',
  },
  title: {
    fontSize: 64,
    fontWeight: 700,
    lineHeight: 1,
  },
  description: {
    '& .MuiTypography-root': {
      fontSize: 24,
    },
  },
  ownText: { fontWeight: '400', fontStyle: 'italic' },
  farcasterConnectingButton: {
    width: 'fit-content',
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    gap: '8px',
    mx: 'auto',
    borderRadius: '8px',
    padding: '8px 16px',
  },
};
export default function Home() {
  return (
    <>
      <Box sx={styles.outerBox}>
        <Container sx={styles.container}>
          <Box sx={styles.containerBox}>
            <Box mx={'auto'}>
              <Image src={'/Frame.svg'} alt='Nav Icon' height={80} width={80} />
            </Box>
            <Typography sx={styles.title}>
              <Box component={'span'} sx={styles.ownText}>
                Own{' '}
              </Box>
              Your Calling Card
            </Typography>
            <Box sx={styles.description}>
              <Typography>
                Create your personal bio page and publish for one price,
                forever.
              </Typography>
              <Typography>No subscriptions. No hidden fees.</Typography>
            </Box>
            <Button sx={styles.farcasterConnectingButton}>
              <Image
                src={'/FarcasterLogo.svg'}
                alt='Icon'
                width={25.86}
                height={24}
              />
              Connect with Farcaster
            </Button>
          </Box>
          <Box>
            <Image
              src={'/HomeMainImage.svg'}
              alt='Main Image'
              height={640}
              width={1100}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
