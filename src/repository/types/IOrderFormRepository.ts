import IRestAdapter from './IRestAdapter';
import IRestAdapterResponse from './IRestAdapterResponse';
import IOrderFormAddItem from '@/types/vtex/orderform/request/IOrderFormAddItem';
import IOrderFormResponse from '@/types/vtex/orderform/response/IOrderFormResponse';

export default interface IOrderFormRepository {
    request: IRestAdapter
    orderFormId: string
    salesChannel: number

    get(): Promise<IRestAdapterResponse<IOrderFormResponse>>
    addItem(items: IOrderFormAddItem | IOrderFormAddItem[]): Promise<IRestAdapterResponse<IOrderFormResponse>>
}