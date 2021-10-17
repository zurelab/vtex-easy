import { AxiosInstance } from "axios";
import { IVtexApiOrderForm } from "../types/VtexApi";
import expectedOrderFormSections from '../expectedOrderFormSections';
import IOrderForm from '@model/types/vtex/orderform/Index';
import IOrderFormProductList from '@model/types/vtex/orderform/OrderFormProductList';
import defaultHeader from '../defaultHeader';

export default class VtexAPIOrderform implements IVtexApiOrderForm {
    private axios:AxiosInstance
    orderFormId: string
    salesChannel: number
  
    constructor(axios: AxiosInstance, orderFormId:string, salesChannel:number = 1) {
        this.axios = axios;
        this.orderFormId = orderFormId;
        this.salesChannel = salesChannel;
    }
    
    async get(): Promise<IOrderForm>{
        const orderformId = this.orderFormId;
        const url = `/api/checkout/pub/orderForm/${orderformId}`;
        const { data } = await this.axios.get<IOrderForm>(url);
        return data;
    }
  
    async add(items: IOrderFormProductList): Promise<IOrderForm> {
        const orderformId = this.orderFormId;
        const salesChannel = this.salesChannel;

        const url = `/api/checkout/pub/orderForm/${orderformId}/items?sc=${salesChannel}`;
  
        const { data }: { data: Promise<IOrderForm> } = await this.axios({
            method: 'post',
            url,
            headers: defaultHeader,
            data: {
                expectedOrderFormSections,
                orderItems: items,
            },
        });
  
        return data;
    }
  
    async update(items: IOrderFormProductList): Promise<IOrderForm> {
        const orderformId = this.orderFormId;
        const url = `/api/checkout/pub/orderForm/${orderformId}/items`;

        const { data }: { data: Promise<IOrderForm> } = await this.axios({
            method: 'patch',
            url,
            headers: defaultHeader,
            data: {
                orderItems: items,
            },
        });

        return data;
    }

    async clear(): Promise<IOrderForm> {
        const orderformId = this.orderFormId;
        const url = `/api/checkout/pub/orderForm/${orderformId}/items/removeAll`;

        const { data }: { data: Promise<IOrderForm> } = await this.axios({
            method: 'post',
            url,
            headers: defaultHeader,
            data: {},
        });
  
        return data;
    }
}