import { CSSProperties } from '@material-ui/styles';

export const inlinehr: CSSProperties = {
    overflow: 'hidden',
    textAlign: 'center',
    '&:after': {
        backgroundColor: '#000',
        content: '',
        display: 'inline-block',
        height: '1px',
        position: 'relative',
        verticalAlign: 'middle',
        width: '50%',
        left: '0.5em',
        marginRight: '-50%',
    },
};
