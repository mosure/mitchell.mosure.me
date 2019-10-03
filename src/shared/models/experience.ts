import { Image } from './image';

export interface Experience {
    organization: string;
    position: string;
    description: string[];
    location?: string;
    url?: string;
    startDate?: Date;                   // If left blank, render a 'not started yet'
    endDate?: Date;                     // If left blank but contains startDate, render 'ongoing'
    image?: Image;
}

export interface ExperienceList extends Array<Experience> { }
