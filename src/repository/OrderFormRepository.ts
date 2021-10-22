import IOrderFormRepository from './types/IOrderFormRepository';
import IRestAdapter from './types/IRestAdapter';
import IRestAdapterResponse from './types/IRestAdapterResponse';
import IOrderFormAddItem from '@/types/vtex/orderform/IOrderFormAddItem';

export default class OrderformRepository implements IOrderFormRepository {
    request: IRestAdapter
    orderFormId: string
    salesChannel: number

    constructor(restAdapter: IRestAdapter, orderformId: string, salesChannel: number = 1) {
        this.request = restAdapter;
        this.orderFormId = orderformId;
        this.salesChannel = salesChannel;
    }

    get<T>(): Promise<IRestAdapterResponse<T>> {
        const url = `/api/checkout/pub/orderForm/${this.orderFormId}`;
        return this.request.get<T>(url);
    }

    addItem<T>(items: IOrderFormAddItem | IOrderFormAddItem[]): Promise<IRestAdapterResponse<T>> {
        const orderformId = this.orderFormId;
        const salesChannel = this.salesChannel;

        const url = `/api/checkout/pub/orderForm/${orderformId}/items?sc=${salesChannel}`;

        return this.request.get<T>(url);
    }
}