export interface Image {
    alternateText?: string;
    path: string;
    shadow?: boolean;
    columns?: number;
    rows?: number;
}

export interface ImageList extends Array<Image> { }
