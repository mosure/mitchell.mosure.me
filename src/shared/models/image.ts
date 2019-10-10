export interface Image {
    alternateText?: string;
    path: string;
    shadow?: boolean;
}

export interface ImageList extends Array<Image> { }
