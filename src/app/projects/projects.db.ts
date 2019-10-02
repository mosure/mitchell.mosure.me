
export interface IProject {
    name: string;
    description?: string;
    route: string;
    startDate?: Date;                   // If left blank, render a not started yet
    endDate?: Date;                     // If left blank but contains startDate, render Ongoing
    images?: IImage[];
    collaborators?: ICollaborator[];
    content?: (props: IProject) => {};
}

export interface IImage {
    alternateText?: string;
    path: string;
}

export interface ICollaborator {
    firstName: string;
    lastName: string;
    relation?: string;
    organization?: string;
}

export const Projects: IProject[] = [

];
