import React from 'react';
import { useTheme } from '@material-ui/core';

export const LogoAnimated: React.FC<any> = (props: any) => {
    const theme = useTheme();

    return (
        <div {...props}>
            <svg
                height='100%'
                width='100%'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 899 899'
                preserveAspectRatio='xMidYMid meet'
            >
                <title>Logo</title>
                <circle
                    fillOpacity={0}
                    strokeMiterlimit={10}
                    stroke={theme.palette.secondary.main}
                    strokeLinecap='round'
                    strokeWidth='64px'
                    cx='449.5'
                    cy='449.5'
                    r='417.5'
                    strokeDasharray='3700'
                    strokeDashoffset='-3700'
                    transform='rotate(-90, 449.5, 449.5)'
                >
                    <animate
                        id='circleIn'
                        attributeName='stroke-dashoffset'
                        begin='f2a.end'
                        dur='1.5s'
                        fill='freeze'
                        calcMode='spline'
                        keyTimes='0; 1'
                        keySplines='.25, .1, .25, 1'
                        from='-3700'
                        to='0'
                    />
                </circle>
                <polyline
                    fill='none'
                    stroke={theme.palette.secondary.main}
                    strokeLinecap='round'
                    strokeWidth='64px'
                    strokeLinejoin='round'
                    points='449.5,449.5 449.5,449.5 449.5,449.5'
                >
                    <animate
                        id='f0a'
                        attributeName='points'
                        begin='0.5s'
                        dur='1s'
                        fill='freeze'
                        calcMode='spline'
                        keyTimes='0; 1'
                        keySplines='.25, .1, .25, 1'
                        from='449.5,449.5 449.5,449.5 449.5,449.5'
                        to='449.5,639.93 449.5,259.43 449.5,639.93'
                    />
                    <animate
                        id='f1a'
                        attributeName='points'
                        begin='f0a.end'
                        dur='1s'
                        fill='freeze'
                        calcMode='spline'
                        keyTimes='0; 1'
                        keySplines='.25, .1, .25, 1'
                        from='449.5,639.93 449.5,259.43 449.5,639.93'
                        to='299.11,639.93 449.5,259.43 599.89,639.93'
                    />
                    <animate
                        id='f2a'
                        attributeName='points'
                        begin='f1a.end'
                        dur='1s'
                        fill='freeze'
                        calcMode='spline'
                        keyTimes='0; 1'
                        keySplines='.25, .1, .25, 1'
                        from='299.11,639.93 449.5,259.43 599.89,639.93'
                        to='218,639.93 368.39,259.43 518.79,639.93'
                    />
                </polyline>
                <polyline
                    fill='none'
                    stroke={theme.palette.secondary.main}
                    strokeLinecap='round'
                    strokeWidth='64px'
                    strokeLinejoin='round'
                    points='449.5,449.5 449.5,449.5 449.5,449.5'
                >
                    <animate
                        id='f0b'
                        attributeName='points'
                        begin='0.5s'
                        dur='1s'
                        fill='freeze'
                        calcMode='spline'
                        keyTimes='0; 1'
                        keySplines='.25, .1, .25, 1'
                        from='449.5,449.5 449.5,449.5 449.5,449.5'
                        to='449.5,259.43 449.5,259.43 449.5,639.93'
                    />
                    <animate
                        id='f1b'
                        attributeName='points'
                        begin='f0b.end'
                        dur='1s'
                        fill='freeze'
                        calcMode='spline'
                        keyTimes='0; 1'
                        keySplines='.25, .1, .25, 1'
                        from='449.5,259.43 449.5,259.43 449.5,639.93'
                        to='449.5,259.43 449.5,259.43 599.89,639.93'
                    />
                    <animate
                        id='f2b'
                        attributeName='points'
                        begin='f1b.end'
                        dur='1s'
                        fill='freeze'
                        calcMode='spline'
                        keyTimes='0; 1'
                        keySplines='.25, .1, .25, 1'
                        from='449.5,259.43 449.5,259.43 599.89,639.93'
                        to='443.59,449.68 530.61,259.43 681,639.93'
                    />
                </polyline>
            </svg>
        </div>
    );
};
