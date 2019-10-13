import React, { useState } from 'react';
import {
    makeStyles,
    createStyles,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    CardHeader,
} from '@material-ui/core';
import { OpenInNew, PhotoLibrary } from '@material-ui/icons';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { withFade, Project, GitHubIcon } from '../shared';
import { HomeItemContainer } from './home-item-container';
import { projects } from '../data';

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            height: '100%',
            minHeight: '300px',
            position: 'relative',
        },
        cardActions: {
            position: 'absolute',
            bottom: '0px',
        },
        cardContent: {
            paddingBottom: '96px',
        },
        container: {
            paddingTop: '48px',
        },
        name: {
            fontSize: '1.75em',
        },
        period: {
            fontSize: '1em',
            paddingBottom: '8px',
        },
        iconButtonNoHover: {
            paddingLeft: '4px',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        technologyContainer: {
            padding: '24px 8px',
        },
        technology: {
            fontSize: '1em',
            color: theme.palette.text.disabled,
        },
    }),
);

const ProjectItem: React.FC<Project> = (project: Project) => {
    const classes = useStyles();
    const [state, setState] = useState({
        modalOpen: false,
    });

    const openModal = () => {
        setState({
            modalOpen: true,
        });
    };

    const closeModal = () => {
        setState({
            modalOpen: false,
        });
    };

    const modalStyles = {
        blanket: (base: any) => ({
            ...base,
            zIndex: 3001,
        }),
        dialog: (base: any) => ({
            ...base,
            zIndex: 3000,
        }),
        positioner: (base: any) => ({
            ...base,
            zIndex: 3001,
        }),
    };

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <>
                            {
                                project.images &&
                                <IconButton
                                    size='small'
                                    disableFocusRipple
                                    disableRipple
                                    className={classes.iconButtonNoHover}
                                    color='secondary'
                                    onClick={openModal}
                                >
                                    <PhotoLibrary/>
                                </IconButton>
                            }
                            {
                                project.url &&
                                <IconButton
                                    href={project.url}
                                    target='_blank'
                                    size='small'
                                    disableFocusRipple
                                    disableRipple
                                    className={classes.iconButtonNoHover}
                                    color='secondary'
                                >
                                    <OpenInNew/>
                                </IconButton>
                            }
                            {
                                project.github &&
                                <IconButton
                                    href={project.github}
                                    target='_blank'
                                    size='small'
                                    disableFocusRipple
                                    disableRipple
                                    className={classes.iconButtonNoHover}
                                    color='secondary'
                                >
                                    <GitHubIcon/>
                                </IconButton>
                            }
                        </>
                    }
                />
                <CardContent className={classes.cardContent}>
                    <Typography
                        variant='h2'
                        className={classes.name}
                    >
                        {project.name}
                    </Typography>
                    <Typography variant='body1' className={classes.period}>
                        {project.period}
                    </Typography>
                    <Typography variant='body1'>
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Grid
                        container
                        spacing={2}
                        justify='flex-start'
                        alignItems='flex-end'
                        className={classes.technologyContainer}
                    >
                        {
                            project.technologies && project.technologies.sort().map((technology, index) => {
                                return (
                                    <Grid item key={index}>
                                        <Typography variant='body1' className={classes.technology}>
                                            {technology}
                                        </Typography>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </CardActions>
            </Card>

            <ModalGateway>
                {
                    state.modalOpen ? (
                        <Modal onClose={closeModal} styles={modalStyles}>
                            <Carousel views={project.images}/>
                        </Modal>
                    ) : null
                }
            </ModalGateway>
        </Grid>
    );
};

const Projects: React.FC = () => {
    const classes = useStyles();

    return (
        <HomeItemContainer header='Projects'>
            <Grid
                container
                spacing={3}
                alignItems='stretch'
                className={classes.container}
            >
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectItem key={index} {...project}/>
                        );
                    })
                }
            </Grid>
        </HomeItemContainer>
    );
};

export default withFade(Projects);
