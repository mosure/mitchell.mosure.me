import React, { useState } from 'react';
import {
    GridList,
    GridListTile,
} from '@material-ui/core';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { ImageList, Image } from '../../models';
import { ImageViewer } from './image-viewer';

export const Images: React.FC<{ images: ImageList }> = (props: { images: ImageList }) => {
    const [state, setState] = useState({
        modalOpen: false,
        imageIndex: 0,
    });

    const openModal = (image: Image) => {
        setState({
            modalOpen: true,
            imageIndex: props.images.indexOf(image),
        });
    };

    const closeModal = () => {
        setState({
            modalOpen: false,
            imageIndex: 0,
        });
    };

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
                                onClick={openModal}
                            />
                        </GridListTile>
                    );
                })
            }
            <ModalGateway>
                {
                    state.modalOpen ? (
                        <Modal onClose={closeModal}>
                            <Carousel views={props.images} currentIndex={state.imageIndex}/>
                        </Modal>
                    ) : null
                }
            </ModalGateway>
        </GridList>
    );
};
