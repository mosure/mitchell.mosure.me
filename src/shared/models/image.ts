export interface Image {
    alternateText?: string;
    path: string;
}

export interface ImageList extends Array<Image> { }
