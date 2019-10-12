export interface Image {
    caption?: string;
    src: string;
    shadow?: boolean;
    columns?: number;
    rows?: number;
}

export interface ImageList extends Array<Image> { }
