import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFFFFF',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        type: 'dark',
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: '#fff',
            hint: 'rgba(255, 255, 255, 0.50)',
        },
    },
});
