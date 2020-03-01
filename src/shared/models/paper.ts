export interface Paper {
    title: string;
    description: string[];
    url?: string;
    siteUrl?: string;
    period?: string;
}

export interface PaperList extends Array<Paper> { }
