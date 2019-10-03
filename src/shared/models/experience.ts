import { Image } from './image';

export interface Experience {
    title: string;
    position?: string;
    location?: string;
    description?: string;
    image?: Image;
}

export interface ExperienceList extends Array<Experience> { }
