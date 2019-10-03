export interface Collaborator {
    firstName: string;
    lastName: string;
    relation?: string;
    organization?: string;
}

export interface CollaboratorList extends Array<Collaborator> {}
