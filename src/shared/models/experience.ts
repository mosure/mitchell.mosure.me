import { Image } from './image';

export interface Experience {
    organization: string;
    position: string;
    description: string[];
    location?: string;
    url?: string;
    period?: string;
    image: Image;
}

export interface ExperienceList extends Array<Experience> { }
