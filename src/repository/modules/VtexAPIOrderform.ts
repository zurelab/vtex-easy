import { AxiosInstance } from "axios";
import { IVtexApiOrderForm } from "../types/VtexApi";
import expectedOrderFormSections from '../expectedOrderFormSections';
import IOrderForm from '@model/types/vtex/orderform/Index';
import IOrderFormProductList from '@model/types/vtex/orderform/OrderFormProductList';
import defaultHeader from '../defaultHeader';

export default class VtexAPIOrderform implements IVtexApiOrderForm {
    axios:AxiosInstance
  
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    
    async get(): Promise<IOrderForm>{
        const url = '/api/checkout/pub/orderForm/';
        const { data } = await this.axios.get<IOrderForm>(url);
        return data;
    }
  
    async add(orderformId: string, items: IOrderFormProductList, SalesChannel = 1): Promise<IOrderForm> {
        const url = `/api/checkout/pub/orderForm/${orderformId}/items?sc=${SalesChannel}`;
  
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
  
    async update(orderformId: string, items: IOrderFormProductList): Promise<IOrderForm> {
        const url = `/api/checkout/pub/orderForm/${orderformId}/items/update/`;

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
}