export * from './gatsby';
export declare enum ApiVersion {
    Apr2020 = "2020-04",
    Jul2020 = "2020-07"
}
export declare type QueryResult<T> = {
    data: {
        data: T;
    };
};
