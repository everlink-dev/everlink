'use client';
import React, { useState } from 'react';
import { Box, Grid2 } from '@mui/material';
import LinearStepper from '@/components/LinearStepper';
import Form from './Form';
import { UrlButton } from '@/types';

export default function EverlinkPages() {
  const [activeStep, setActiveStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [analyticsTag, setAnalyticsTag] = useState('');
  const [urlButtons, setUrlButtons] = useState<UrlButton[]>([
    { id: '1', title: 'Button 1', url: '' },
  ]);

  return (
    <Box bgcolor={'#F9FAFB'}>
      <Grid2 container mx={'auto'} width={{ md: '85%', xs: '100%' }}>
        <Grid2
          size={{ md: activeStep === 0 ? 12 : 7, xs: 12 }}
          mx={activeStep === 0 ? 'auto' : 'unset'}
        >
          <Box
            sx={{
              width: {
                md: activeStep === 0 ? '50%' : '85%',
                sm: '70%',
                xs: '85%',
              },
              display: 'flex',
              flexDirection: 'column',
              mx: 'auto',
              mt: '74px',
              bgcolor: 'primary.contrastText',
              p: { md: '40px 24px', xs: '24px 16px' },
              borderRadius: 3,
              boxShadow: '0px 4.03px 12.89px 0px #080F340F',
            }}
          >
            {' '}
            <Box sx={{ borderBottom: '1px solid #D9DBE9', pb: 2, mb: 3 }}>
              <LinearStepper activeStep={activeStep} />
            </Box>
            {activeStep === 0 ? (
              <>
                <Form
                  userName={userName}
                  setUserName={setUserName}
                  bio={bio}
                  setBio={setBio}
                  setActiveStep={setActiveStep}
                  analyticsTag={analyticsTag}
                  setAnalyticsTag={setAnalyticsTag}
                  urlButtons={urlButtons}
                  setUrlButtons={setUrlButtons}
                />
              </>
            ) : (
              <h1>Select Theme Here</h1>
            )}
          </Box>
        </Grid2>
        <Grid2
          size={{ md: 5, xs: 12 }}
          sx={{ display: activeStep === 0 ? 'none' : 'flex', p: 3 }}
        >
          <Box>
            <h1>Preview Here</h1>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
