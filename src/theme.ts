import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const bps = createMuiTheme();

export const theme = responsiveFontSizes(createMuiTheme({
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
            hint: 'rgba(255, 255, 255, 0.60)',
        },
    },
    typography: {
        h1: {
            fontWeight: 500,
            [bps.breakpoints.up('md')]: {
                fontSize: '6rem',
            },
            [bps.breakpoints.down('md')]: {
                fontSize: '5rem',
            },
            [bps.breakpoints.down('sm')]: {
                fontSize: '4rem',
            },
            [bps.breakpoints.down('xs')]: {
                fontSize: '3rem',
            },
        },
        h2: {
            fontWeight: 500,
        },
        h3: {
            fontWeight: 500,
        },
        h4: {
            fontWeight: 500,
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
    },
}));
