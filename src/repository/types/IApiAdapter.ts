import IApiAdapterResponse from './IApiAdapterResponse';

type IHeaderArray = [string, string];
export default interface IApiAdapter {
    get<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IApiAdapterResponse<T>>
    post<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IApiAdapterResponse<T>>
    put<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IApiAdapterResponse<T>>
    patch<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IApiAdapterResponse<T>>
    delete<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IApiAdapterResponse<T>>
}