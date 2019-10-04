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
                    fill={theme.palette.primary.main}
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
                    points='218 639.93 368.39 259.43 443.59 449.68 518.79 639.93'
                />
                <polyline
                    fill='none'
                    stroke={theme.palette.secondary.main}
                    strokeLinecap='round'
                    strokeWidth='64px'
                    strokeLinejoin='round'
                    points='681 639.57 605.8 449.32 531.53 261.42 530.61 259.07 449.69 464.48'
                />
            </svg>
        </div>
    );
};
