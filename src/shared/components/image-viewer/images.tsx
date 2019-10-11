import React from 'react';
import {
    GridList,
    GridListTile,
} from '@material-ui/core';

import { ImageList } from '../../models';
import { ImageViewer } from './image-viewer';

export const Images: React.FC<{ images: ImageList }> = (props: { images: ImageList }) => {
    return (
        <GridList cellHeight='auto' cols={3} spacing={1}>
            {
                props.images.map((image, index) => {
                    return (
                        <GridListTile key={index} cols={image.columns || 1} rows={image.rows || 2}>
                            <ImageViewer
                                {...image}
                                shadow={false}
                                borderRadius={false}
                            />
                        </GridListTile>
                    );
                })
            }
        </GridList>
    );
};
