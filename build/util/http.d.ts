export declare enum HTTP_STATUS {
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}
export declare const isValidURL: (url: string) => boolean;
export declare const parseUrls: (rawUrls: string) => string[];
