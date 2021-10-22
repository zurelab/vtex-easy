import IRestAdapterResponse from './IRestAdapterResponse';

type IHeaderArray = [string, string];
export default interface IRestAdapter {
    get<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IRestAdapterResponse<T>>
    post<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IRestAdapterResponse<T>>
    put<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IRestAdapterResponse<T>>
    patch<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IRestAdapterResponse<T>>
    delete<T>(url: string, body?: any, headers?: Array<IHeaderArray>): Promise<IRestAdapterResponse<T>>
}