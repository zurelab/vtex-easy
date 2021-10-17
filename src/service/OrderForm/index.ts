import { AxiosInstance } from 'axios';
import IOrderForm from '@/models/types/vtex/orderform/Index';
import IOrderFormProductList from '@/models/types/vtex/orderform/OrderFormProductList';

export default interface OrderForm {
    orderformId: string
    salesChannel: number

    constructor(axios: AxiosInstance, orderFormId:string, salesChannel: number): void

    get: () => Promise<IOrderForm>
    add: (items: IOrderFormProductList, SalesChannel: number) =>
        Promise<IOrderForm>
    update: (items: IOrderFormProductList) => Promise<IOrderForm>
    clear: () => Promise<IOrderForm>
}