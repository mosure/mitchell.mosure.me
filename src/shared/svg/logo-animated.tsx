import React from 'react';
import { useTheme } from '@material-ui/core';

export const LogoAnimated: React.FC<any> = (props: any) => {
    const theme = useTheme();

    return (
        <div {...props}/>
    );
};
