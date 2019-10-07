import posed from 'react-pose';

export const DropFade = posed.div({
    load: {
        y: '0px',
        opacity: 1,
        delay: (props: any) => props.delay || 0,
        beforeChildren: (props: any) => props.beforeChildren || false,
        staggerChildren: (props: any) => props.staggerChildren || 0,
        transition: {
            duration: 500,
        },
    },
    init: {
        y: '-100px',
        opacity: 0,
        transition: {
            duration: 500,
        },
    },
});
