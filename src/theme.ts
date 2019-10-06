import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const paletteTheme = createMuiTheme({
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
});

export const theme = responsiveFontSizes(createMuiTheme({
    palette: paletteTheme.palette,
    typography: {
        h1: {
            fontWeight: 500,
            [paletteTheme.breakpoints.up('md')]: {
                fontSize: '6rem',
            },
            [paletteTheme.breakpoints.down('md')]: {
                fontSize: '5rem',
            },
            [paletteTheme.breakpoints.down('sm')]: {
                fontSize: '4rem',
            },
            [paletteTheme.breakpoints.down('xs')]: {
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
            color: paletteTheme.palette.text.primary,
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
        body1: {
            color: paletteTheme.palette.text.hint,
        },
        body2: {
            color: paletteTheme.palette.text.hint,
        },
    },
}));
