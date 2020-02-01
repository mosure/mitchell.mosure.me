import posed from 'react-pose';

export const DisplayNone = posed.div({
    load: {
        applyAtStart: { display: 'block' },
        beforeChildren: true,
        staggerChildren: 100,
    },
    init: {
        applyAtEnd: { display: 'none' },
    },
});
