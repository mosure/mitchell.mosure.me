import React from 'react';
import { makeStyles, createStyles, Grid, Card, CardContent, CardActions, Typography } from '@material-ui/core';

import { withFade, Project } from '../shared';
import { HomeItemContainer } from './home-item-container';
import { projects } from '../data';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            paddingTop: '48px',
        },
        name: {
            fontSize: '2em',
            paddingBottom: '4px',
        },
    }),
);

const ProjectItem: React.FC<Project> = (project: Project) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card>
                <CardContent>
                    <Typography variant='h2' className={classes.name} color='secondary'>
                        {project.name}
                    </Typography>
                </CardContent>
                <CardActions/>
            </Card>
        </Grid>
    );
};

const Projects: React.FC = () => {
    const classes = useStyles();

    return (
        <HomeItemContainer header='Projects'>
            <Grid container spacing={4} className={classes.container}>
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
