import { Image } from './image';

export interface Globals {
    firstName: string;
    lastName: string;
    email: string;
    greeting: string;
    statement: string;
    description: string;
    githubUrl: string;
    linkedinUrl: string;
    image?: Image;
    toolkit?: string[];
}
