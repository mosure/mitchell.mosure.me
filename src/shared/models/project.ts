import { ImageList } from './image';

export interface Project {
    name: string;
    description?: string;
    period?: string;
    images?: ImageList;
    github?: string;
    url?: string;
    technologies?: string[];
}

export interface ProjectList extends Array<Project> {}
