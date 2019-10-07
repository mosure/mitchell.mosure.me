import React from 'react';
import { useTheme } from '@material-ui/core';

export const LogoStatic: React.FC<any> = (props: any) => {
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
                />
                <polyline
                    fill='none'
                    stroke={theme.palette.secondary.main}
                    strokeLinecap='round'
                    strokeWidth='64px'
                    strokeLinejoin='round'
                    points='218 639.93 368.39 259.43 518.79 639.93'
                />
                <polyline
                    fill='none'
                    stroke={theme.palette.secondary.main}
                    strokeLinecap='round'
                    strokeWidth='64px'
                    strokeLinejoin='round'
                    points='449.69 464.48 530.61 259.43 681 639.93'
                />
            </svg>
        </div>
    );
};
