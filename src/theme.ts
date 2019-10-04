import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#6B6E70',
            main: '#222629',
            dark: '#222629',
            contrastText: '#FFF',
        },
        secondary: {
            light: '#86C232',
            main: '#86C232',
            dark: '#61892F',
            contrastText: '#000',
        },
        type: 'dark',
        text: {
            primary: '#FFF',
            secondary: 'rgba(0, 0, 0, 0.87)',
            hint: 'rgba(255, 255, 255, 0.50)',
        },
    },
});
