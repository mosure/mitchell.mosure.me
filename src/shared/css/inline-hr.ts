import { createStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';

export const useInlineHr = makeStyles((theme) =>
    createStyles({
        inlinehr: {
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            '&::after': {
                backgroundColor: theme.palette.text.hint,
                content: '""',
                display: 'block',
                height: '1px',
                position: 'relative',
                verticalAlign: 'middle',
                width: '350px',
                maxWidth: '350px',
                marginLeft: '16px',
                top: '3px',
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                },
            },
        },
    }),
);
