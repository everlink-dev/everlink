import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#855DCD',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    allVariants: {
      textTransform: 'none',
      fontSize: 16,
    },
  },
});
