import { ImageList } from './image';

export interface Project {
    name: string;
    description?: string;
    route?: string;
    startDate?: Date;                   // If left blank, render a 'not started yet'
    endDate?: Date;                     // If left blank but contains startDate, render 'ongoing'
    images?: ImageList;
    github?: string;
    url?: string;
}

export interface ProjectList extends Array<Project> {}
