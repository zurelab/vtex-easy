
import IRestAdapterResponse from './IRestAdapterResponse';

export default interface IRestAdapter {
    get<TypeResponse>(url: string, body?: any): Promise<IRestAdapterResponse<TypeResponse>>
    post<TypeResponse>(url: string, body?: any): Promise<IRestAdapterResponse<TypeResponse>>
    put<TypeResponse>(url: string, body?: any): Promise<IRestAdapterResponse<TypeResponse>>
    patch<TypeResponse>(url: string, body?: any): Promise<IRestAdapterResponse<TypeResponse>>
    delete<TypeResponse>(url: string, body?: any): Promise<IRestAdapterResponse<TypeResponse>>
}