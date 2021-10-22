import IOrderFormRepository from './types/IOrderFormRepository';
import IRestAdapter from './types/IRestAdapter';
import IRestAdapterResponse from './types/IRestAdapterResponse';
import IOrderFormAddItem from '@/types/vtex/orderform/request/IOrderFormAddItem';
import IOrderFormResponse from '@/types/vtex/orderform/response/IOrderFormResponse';

export default class OrderformRepository implements IOrderFormRepository {
    request: IRestAdapter
    orderFormId: string
    salesChannel: number

    constructor(restAdapter: IRestAdapter, orderformId: string, salesChannel: number = 1) {
        this.request = restAdapter;
        this.orderFormId = orderformId;
        this.salesChannel = salesChannel;
    }

    get(): Promise<IRestAdapterResponse<IOrderFormResponse>> {
        const url = `/api/checkout/pub/orderForm/${this.orderFormId}`;
        return this.request.get<IOrderFormResponse>(url);
    }

    addItem(items: IOrderFormAddItem | IOrderFormAddItem[]): Promise<IRestAdapterResponse<IOrderFormResponse>> {
        const orderformId = this.orderFormId;
        const salesChannel = this.salesChannel;
        const url = `/api/checkout/pub/orderForm/${orderformId}/items?sc=${salesChannel}`;

        let orderItems: Array<IOrderFormAddItem>;

        if (Array.isArray(items)) {
            orderItems = items;
        } else {
            orderItems = [items];
        }

        return this.request.post<IOrderFormResponse>(url, { orderItems });
    }
}