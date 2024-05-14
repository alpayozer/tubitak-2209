export interface PaginationDto<T> {
    total: number,
    pageSize: number,
    page: number,
    pageCount: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    items: T[]
}