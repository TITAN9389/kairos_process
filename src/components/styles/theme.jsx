import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5dbfbf',
      main: '#35afaf',
      dark: '#257a7a',
    },
    secondary: {
      light: '#5d6166',
      main: '#353a40',
      dark: '#2d2e30',
    },
    text: {
      primary: '#2d2e30',
      secondary: '#9e9e9e',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: '#257a7a',
    },
    background: {
      default: '#edf0f5',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
