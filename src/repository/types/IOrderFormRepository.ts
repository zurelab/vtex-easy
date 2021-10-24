import IRestAdapter from './IApiAdapter';
import IApiAdapterResponse from './IApiAdapterResponse';
import IOrderFormAddItem from '@/types/vtex/orderform/request/IOrderFormAddItem';
import IOrderFormResponse from '@/types/vtex/orderform/response/IOrderFormResponse';

export default interface IOrderFormRepository {
    request: IRestAdapter
    orderFormId: string
    salesChannel: number

    get(): Promise<IApiAdapterResponse<IOrderFormResponse>>
    addItem(items: IOrderFormAddItem | IOrderFormAddItem[]): Promise<IApiAdapterResponse<IOrderFormResponse>>
}