import IRestAdapter from './IRestAdapter';
import IRestAdapterResponse from './IRestAdapterResponse';
import IOrderFormAddItem from '@/types/vtex/orderform/IOrderFormAddItem';

export default interface IOrderFormRepository {
    request: IRestAdapter
    orderFormId: string
    salesChannel: number

    get<T>(): Promise<IRestAdapterResponse<T>>
    addItem<T>(items: IOrderFormAddItem | IOrderFormAddItem[]): Promise<IRestAdapterResponse<T>>
}