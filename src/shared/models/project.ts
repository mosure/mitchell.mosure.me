import { CollaboratorList } from './collaborator';
import { ImageList } from './image';

export interface Project {
    name: string;
    description?: string;
    route: string;
    startDate?: Date;                   // If left blank, render a 'not started yet'
    endDate?: Date;                     // If left blank but contains startDate, render 'ongoing'
    images: ImageList;
    collaborators?: CollaboratorList;
    content?: (props: Project) => {};
}

export interface ProjectList extends Array<Project> {}
