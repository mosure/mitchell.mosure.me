import { CSSProperties, createStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';

export const useInlineHr = makeStyles((theme) =>
    createStyles({
        inlinehr: {
            '&::after': {
                backgroundColor: theme.palette.text.hint,
                content: '""',
                display: 'inline-block',
                height: '1px',
                position: 'relative',
                verticalAlign: 'middle',
                width: '350px',
                left: '0.5em',
            },
        },
    }),
);
